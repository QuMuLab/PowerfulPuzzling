import tensorflow as tf

# Get the puzzle piece objects
from cmath import log

import os
import sys
import cv2
import random
import numpy as np
import skimage.io
import matplotlib.pyplot as plt
from scipy.ndimage import filters
from imgaug import augmenters as iaa
try:
    from src.ML.puzzle_dataset import PuzzleDataset
except ImportError:
    from puzzle_dataset import PuzzleDataset

# Setup the backend as tensorflow so we are not using theano
os.environ['KERAS_BACKEND']='tensorflow'

# Root directory of the project
ROOT_DIR = os.path.abspath("../")

# Import Mask RCNN
sys.path.append(ROOT_DIR)  # To find local version of the library

try:
    from src.ML.mrcnn import utils
    import src.ML.mrcnn.model as modellib
    from src.ML.mrcnn import visualize
    from src.ML.mrcnn.config import Config
except ImportError:
    from mrcnn import utils
    import mrcnn.model as modellib
    from mrcnn import visualize
    from mrcnn.config import Config



class PuzzleConfig(Config):
    """[summary]

    Args:
        Config ([type]): [description]
    """

    # Give the configuration a recognizable name
    NAME = "puzzle_parser"

    # We use a GPU with 12GB memory, which can fit two images.
    # Adjust down if you use a smaller GPU.
    IMAGES_PER_GPU = 1

    """Changed Config Values"""
    """ ---- """
    # # Number of training and validation steps per epoch
    # STEPS_PER_EPOCH = 100 // IMAGES_PER_GPU
    # VALIDATION_STEPS = 28 // IMAGES_PER_GPU

    # # Don't exclude based on confidence. Since we have two classes
    # # then 0.5 is the minimum anyway as it picks between island and BG
    # DETECTION_MIN_CONFIDENCE = 0

    # # If enabled, resizes instance masks to a smaller size to reduce
    # # memory load. Recommended when using high-resolution images.
    # USE_MINI_MASK = True
    # MINI_MASK_SHAPE = (56, 56)  # (height, width) of the mini-mask

    # # Adjust the mask shape for higher resolution masks
    # MASK_SHAPE = [56, 56]

    # # Lower the learning rate a bit
    # LEARNING_RATE = 0.0008

    # # # Have to decrease these to avoid running out of RAM
    # RPN_TRAIN_ANCHORS_PER_IMAGE = 200
    # TRAIN_ROIS_PER_IMAGE = 100
    """ ---- """

    # Number of classes (including background)
    NUM_CLASSES = 1 + 1


class InferencePuzzleConfig(PuzzleConfig):
    # Set batch size to 1 since we'll be running inference on
    # one image at a time. Batch size = GPU_COUNT * IMAGES_PER_GPU
    GPU_COUNT = 1
    IMAGES_PER_GPU = 1

    NAME = "piece" # custom object name
    IMAGES_PER_GPU = 1
    GPU_COUNT = 1
    NUM_CLASSES = 1 + 1 # custom object + background
    DETECTION_MAX_INSTANCES = 500

    # Adjust the mask shape for higher resolution masks
    # MASK_SHAPE = [56, 56]


class PuzzleParserMode:
    # Static variables to make choosing a mode easier
    INFERENCE = "inference"
    TRAIN = "training"


class PuzzleParser:
    """
    The API for finding puzzle peices.
    """

    def __init__(self, log_dir: str = None, mode: str = PuzzleParserMode.INFERENCE) -> None:
        # Make sure if there are no logs that we are in inference mode
        assert log_dir is None and mode == PuzzleParserMode.TRAIN or mode == PuzzleParserMode.INFERENCE, "Must provide a log directory if not in inference mode."

        # Save the log directory
        self.__log_dir = log_dir if log_dir is not None else ""

        # Set the mode and config
        mode = mode.lower()
        assert mode in [PuzzleParserMode.TRAIN,
                        PuzzleParserMode.INFERENCE], "Mode must be either train or inference!"
        self.__config = PuzzleConfig() if mode == PuzzleParserMode.TRAIN else InferencePuzzleConfig()

        # Create the model
        self.__model = modellib.MaskRCNN(mode=str(mode), model_dir=self.__log_dir, config=self.__config)

        # Initialize our class names
        self.__class_names = None

    def find_last_weights(self) -> str:
        """
        Returns the last used weights path

        Returns:
            [type]: [description]
        """
        return self.__model.find_last()[1]

    def get_imagenet_weights(self):
        self.__model.get_imagenet_weights()

    def load_weights(self, path, by_name=True, exclude=None):
        self.__model.load_weights(path, by_name, exclude)

    def set_class_names(self, names):
        self.__class_names = names

    def display_config(self):
        self.__config.display()

    def train_model(self, island_dir, epochs=30, layers='heads', callbacks=[]):
        """[summary]

        Args:
            epochs (int, optional): [description]. Defaults to 30.
            layers (str, optional): [description]. Defaults to 'heads'.
        """

        # Training dataset.
        dataset_train = PuzzleDataset()
        dataset_train.load_island(island_dir, "train")
        dataset_train.prepare()

        # Validation dataset
        dataset_val = PuzzleDataset()
        dataset_val.load_island(island_dir, "val")
        dataset_val.prepare()

        # Set up some augmentations
        augmentation = iaa.SomeOf((0, 2), [
        iaa.Fliplr(0.5),
        iaa.Flipud(0.5),
        iaa.OneOf([iaa.Affine(rotate=90),
                   iaa.Affine(rotate=180),
                   iaa.Affine(rotate=270)]),
        iaa.Multiply((0.8, 1.5)),
        iaa.GaussianBlur(sigma=(0.0, 5.0))
    ])

        # Add our csv logger callback
        csv_logger = tf.keras.callbacks.CSVLogger(f"{self.__log_dir}/train_log.csv", separator=",", append=True)
        callbacks.append(csv_logger)

        # Since we're using a very small dataset, and starting from
        # COCO trained weights, we don't need to train too long. Also,
        # no need to train all layers, just the heads should do it.
        print("Training network heads")
        print(f"Training Size: {len(dataset_train.image_ids)}")
        print(f"Validation Size: {len(dataset_val.image_ids)}")
        self.__model.train(dataset_train, dataset_val,
                           learning_rate=self.__config.LEARNING_RATE,
                           epochs=epochs,
                           layers=layers,
                           augmentation=augmentation,
                           custom_callbacks=callbacks)

    def display_test(self, image_path: str):
        # Make sure we have names
        assert self.__class_names is not None, "Must call set_class_names(names) to provide names for the model before running inference or training."

        # Load a image
        image = skimage.io.imread(image_path)
        if(image.shape[-1] == 4):
            image = image[:,:,:3]

        # Run detection
        results = self.__model.detect([image], verbose=1)

        # Visualize results
        r = results[0]
        visualize.display_instances(image, r['rois'], r['masks'], r['class_ids'], self.__class_names, r['scores'])

    def detect(self, input_image: str):
        # Run detection
        return self.__model.detect([input_image], verbose=1)

    def extract_puzzle_pieces(self, img_path: str):
        """[summary]

        Args:
            img_path ([type]): [description]
            max_pieces ([type], optional): [description]. Defaults to None.

        Raises:
            NotImplementedError: [description]
        """
        # Make sure we have names
        assert self.__class_names is not None, "Must call set_class_names(names) to provide names for the model before running inference or training."

        # Run a detection on the image
        # Load a image
        image = skimage.io.imread(img_path)
        if(image.shape[-1] == 4):
            image = image[:,:,:3]

        # Run detection
        results = self.__model.detect([image], verbose=1)[0]

        # Get our masks
        masks = results['masks']
        masks = masks.astype(np.uint8)

        # Extract each contour
        contours = []
        for i in range(masks.shape[-1]):
            # Grab the mask and put in range (0-255)
            puzzle = masks[:, :, i] * 255

            # Run adaptive threshold
            puzzle = cv2.GaussianBlur(puzzle, (5,5), 1)

            # Find all borders on the mask
            cntrs, _ = cv2.findContours(puzzle, 0, 1)
            cntrs = np.array(cntrs[0])

            # Add each contour to our list
            print("Contour shape:", cntrs.shape)
            contours.append(cntrs)

        return image, contours


    def build_rpn_targets(self, image, gt_class_id, gt_bbox):
      return modellib.build_rpn_targets(image.shape, self.__model.anchors, gt_class_id, gt_bbox, self.__model.config)

    def get_anchors(self):
      return self.__model.anchors

    def get_config(self):
      return self.__config

    def get_keras_model(self):
      return self.__model.keras_model

    def get_model(self):
      return self.__model

    def visualize(self, island_dir):
        config = PuzzleConfig()

        import puzzle_dataset
        dataset = puzzle_dataset.PuzzleDataset()
        dataset.load_island(island_dir, "train")

        # Must call before using the dataset
        dataset.prepare()

        print("Image Count: {}".format(len(dataset.image_ids)))
        print("Class Count: {}".format(dataset.num_classes))
        for i, info in enumerate(dataset.class_info):
            print("{:3}. {:50}".format(i, info['name']))

        # Load and display random samples
        image_ids = np.random.choice(dataset.image_ids, 10)
        for image_id in image_ids:
            image = dataset.load_image(image_id)
            mask, class_ids = dataset.load_mask(image_id)
            visualize.display_top_masks(image, mask, class_ids, dataset.class_names)

        # Load random image and mask.
        image_id = random.choice(dataset.image_ids)
        image = dataset.load_image(image_id)
        mask, class_ids = dataset.load_mask(image_id)
        # Compute Bounding box
        bbox = utils.extract_bboxes(mask)

        # Display image and additional stats
        print("image_id ", image_id, dataset.image_reference(image_id))
        print("image", image)
        print("mask", mask)
        print("class_ids", class_ids)
        print("bbox", bbox)
        # Display image and instances
        visualize.display_instances(image, bbox, mask, class_ids, dataset.class_names)


if __name__ == "__main__":
    # Load up a new model
    model = PuzzleParser("", PuzzleParserMode.INFERENCE)

    # Set the class names of the model
    class_names = ["BG", "pp"]
    model.set_class_names(class_names)
    model.load_weights("src/ML/(MiniMask, BaseResolution)_epoch_17_val_loss_0.41_.h5")
    model.display_test("dataset/starry_night/edge_case.JPG")
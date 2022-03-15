# Get the puzzle piece objects
from cmath import log
from puzzle_piece import PuzzlePiece

import os
import sys
import random
import math
import numpy as np
import skimage.io
import matplotlib.pyplot as plt
from imgaug import augmenters as iaa
from puzzle_dataset import PuzzleDataset

# Setup the backend as tensorflow so we are not using theano
os.environ['KERAS_BACKEND']='tensorflow'

# Root directory of the project
ROOT_DIR = os.path.abspath("../")

# Import Mask RCNN
sys.path.append(ROOT_DIR)  # To find local version of the library
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
    IMAGES_PER_GPU = 2

    # Uncomment to train on 8 GPUs (default is 1)
    # GPU_COUNT = 8

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


class PuzzleParserMode:
    # Static variables to make choosing a mode easier
    INFERENCE = "inference"
    TRAIN = "training"


class PuzzleParser:
    """
    The API for finding puzzle peices.
    """

    def __init__(self, log_dir: str, mode: str) -> None:
        # Save the log directory
        self.__log_dir = log_dir

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

    def get_best_model(self):
        # Lady load glob
        from glob import glob

        # Look at each file in the logs dir
        log_directories = glob(f"{self.__log_dir}/*")

        # If there are no files raise value error
        # If there is only one file then return that file
        if len(log_directories) == 0:
            raise ValueError("No model logs present!")
        elif len(log_directories) == 1:
            return glob(f"{log_directories[0]}/*.h5")[0]

        # Lazy load tensorboard's event accumulator
        from tensorboard.backend.event_processing import event_accumulator

        # Loop through each file and file the best one
        best_file = None
        for dir in log_directories:
            # Grab each file from the log
            weights = glob(f"{dir}/*.h5")[0]
            tb_log_file = glob(f"{dir}/*events.out.tfevents*")[0]

            # Check the validation loss
            ea = event_accumulator.EventAccumulator(tb_log_file, size_guidance={event_accumulator.SCALARS: 0})
            ea.Reload()

            # Get validation loss
            val_loss = ea.Scalars('val_loss')[-1].value

            # Update best weights
            if best_file is None or val_loss < best_file[0]:
                best_file = (val_loss, weights)

        return best_file[1]

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

        # Load a random image from the images folder
        image = skimage.io.imread(image_path)
        if(image.shape[-1] == 4):
            image = image[:,:,:3]

        # Run detection
        results = self.__model.detect([image], verbose=1)

        # Visualize results
        r = results[0]
        visualize.display_instances(image, r['rois'], r['masks'], r['class_ids'], self.__class_names, r['scores'])

    def extract_puzzle_pieces(self, img_path: str, max_pieces:int=None):
        """[summary]

        Args:
            img_path ([type]): [description]
            max_pieces ([type], optional): [description]. Defaults to None.

        Raises:
            NotImplementedError: [description]
        """
        # Make sure we have names
        assert self.__class_names is not None, "Must call set_class_names(names) to provide names for the model before running inference or training."
        raise NotImplementedError()

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


class_names = ["BG", "pp"]

pp = PuzzleParser("src/ML/logs", PuzzleParserMode.TRAIN)
# pp.load_weights("/Users/martingleave/Desktop/School Work/UNIVERSITY/fourth_year/second_sem/CISC499/PowerfulPuzzling/src/ML/mask_rcnn_coco.h5")

pp.load_weights("/Users/martingleave/Desktop/School Work/UNIVERSITY/fourth_year/second_sem/CISC499/PowerfulPuzzling/src/ML/mask_rcnn_coco.h5", exclude=[ "mrcnn_class_logits", "mrcnn_bbox_fc", "mrcnn_bbox", "mrcnn_mask"])
pp.set_class_names(class_names)
# pp.visualize("/Users/martingleave/Desktop/School Work/UNIVERSITY/fourth_year/second_sem/CISC499/PowerfulPuzzling/dataset/mask_rcnn")
pp.train_model("/Users/martingleave/Desktop/School Work/UNIVERSITY/fourth_year/second_sem/CISC499/PowerfulPuzzling/dataset/mask_rcnn", 3)

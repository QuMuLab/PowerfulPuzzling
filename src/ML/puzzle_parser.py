# Get the puzzle piece objects
from cmath import log
from puzzle_piece import PuzzlePiece

import os
import sys
import random
import math
import numpy as np
import skimage.io
import matplotlib
import matplotlib.pyplot as plt

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
    NUM_CLASSES = 1 + 80


class InferencePuzzleConfig(PuzzleConfig):
    # Set batch size to 1 since we'll be running inference on
    # one image at a time. Batch size = GPU_COUNT * IMAGES_PER_GPU
    GPU_COUNT = 1
    IMAGES_PER_GPU = 1

    NAME = "piece" # custom object name
    IMAGES_PER_GPU = 1
    GPU_COUNT = 1
    NUM_CLASSES = 1 + 1 # custom object + background
    DETECTION_MAX_INSTANCES = 1 # looking for only one piece per validation image


class PuzzleParserMode:
    # Static variables to make choosing a mode easier
    INFERENCE = "inference"
    TRAIN = "train"


class PuzzleParser:
    """
    The API for finding puzzle peices.
    """

    def __init__(self, log_dir: str, mode: str) -> None:
        # Save the log directory
        self.__log_dir = log_dir

        # Set the mode and config
        print(mode)
        mode = mode.lower()
        assert mode in ["inference", "train"], "Mode must be either train or inference!"
        self.__config = PuzzleConfig() if mode == "train" else InferencePuzzleConfig()

        # Create the model
        self.__model = modellib.MaskRCNN(mode=mode, model_dir=self.__log_dir, config=self.__config)

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

    def train_model(self, epochs=30, layers='heads'):
        """[summary]

        Args:
            epochs (int, optional): [description]. Defaults to 30.
            layers (str, optional): [description]. Defaults to 'heads'.
        """

        # Training dataset.
        dataset_train = PuzzleDataset()
        dataset_train.load_island(args.dataset, "train")
        dataset_train.prepare()

        # Validation dataset
        dataset_val = PuzzleDataset()
        dataset_val.load_island(args.dataset, "val")
        dataset_val.prepare()

        # *** This training schedule is an example. Update to your needs ***
        # Since we're using a very small dataset, and starting from
        # COCO trained weights, we don't need to train too long. Also,
        # no need to train all layers, just the heads should do it.
        print("Training network heads")
        self.__model.train(dataset_train, dataset_val,
                           learning_rate=config.LEARNING_RATE,
                           epochs=epochs,
                           layers=layers)

    def display_test(self, image_path: str):
        # Make sure we have names
        assert self.__class_names is not None, "Must call set_class_names(names) to provide names for the model before running inference or training."

        # Load a random image from the images folder
        image = skimage.io.imread(image_path)
        if(image.shape[-1] == 4):
            image = image[:,:,:3]

        # Run detection
        results = self.__model.detect(image, verbose=1)

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
        image_ids = np.random.choice(dataset.image_ids,1)
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


# class_names = ['BG', 'person', 'bicycle', 'car', 'motorcycle', 'airplane',
#                'bus', 'train', 'truck', 'boat', 'traffic light',
#                'fire hydrant', 'stop sign', 'parking meter', 'bench', 'bird',
#                'cat', 'dog', 'horse', 'sheep', 'cow', 'elephant', 'bear',
#                'zebra', 'giraffe', 'backpack', 'umbrella', 'handbag', 'tie',
#                'suitcase', 'frisbee', 'skis', 'snowboard', 'sports ball',
#                'kite', 'baseball bat', 'baseball glove', 'skateboard',
#                'surfboard', 'tennis racket', 'bottle', 'wine glass', 'cup',
#                'fork', 'knife', 'spoon', 'bowl', 'banana', 'apple',
#                'sandwich', 'orange', 'broccoli', 'carrot', 'hot dog', 'pizza',
#                'donut', 'cake', 'chair', 'couch', 'potted plant', 'bed',
#                'dining table', 'toilet', 'tv', 'laptop', 'mouse', 'remote',
#                'keyboard', 'cell phone', 'microwave', 'oven', 'toaster',
#                'sink', 'refrigerator', 'book', 'clock', 'vase', 'scissors',
#                'teddy bear', 'hair drier', 'toothbrush']

# class_names = ["BG", "pp"]


# pp = PuzzleParser("src/ML/logs", PuzzleParserMode.INFERENCE)
# pp.load_weights("src/ML/mask_rcnn_piece_0020.h5")
# pp.set_class_names(class_names)
# pp.visualize("/Users/martingleave/Desktop/School Work/UNIVERSITY/fourth_year/second_sem/CISC499/PowerfulPuzzling/dataset/mask_rcnn")


if __name__ == '__main__':
    import argparse


    # Parse command line arguments
    parser = argparse.ArgumentParser(
        description='Train Mask R-CNN to detect balloons.')
    parser.add_argument("command",
                        metavar="<command>",
                        help="'train' or 'inference'")
    parser.add_argument('--dataset', required=False,
                        metavar="/path/to/island/dataset/",
                        help='Directory of the island dataset')
    parser.add_argument('--weights', required=True,
                        metavar="/path/to/weights.h5",
                        help="Path to weights .h5 file or 'coco'")
    parser.add_argument('--logs', required=False,
                        metavar="/path/to/logs/",
                        help='Logs and checkpoints directory (default=logs/)')
    parser.add_argument('--image', required=False,
                        metavar="path or URL to image",
                        help='Image to inference on')
    args = parser.parse_args()

    # inference arguments
    if args.command == "train":
        assert args.dataset, "Argument --dataset is required for training"
    elif args.command == "inference":
        assert args.image or args.video,\
            "Provide --image or --video to inference network"

    print("Weights: ", args.weights)
    print("Dataset: ", args.dataset)
    print("Logs: ", args.logs)

    # Configurations
    if args.command == "train":
        config = PuzzleConfig()
    else:
        config = InferencePuzzleConfig()
    config.display()

    # Create model
    if args.command == "train":
        model = PuzzleParser(mode = PuzzleParserMode.TRAIN,
                             log_dir=args.log)
    else:
        model = PuzzleParser(mode=PuzzleParserMode.INFERENCE,
                             log_dir=args.log)

    # Set our class names
    model.set_class_names(["BG", "ISLAND"])

    # Select weights file to load
    if args.weights.lower() == "coco":
        weights_path = "mask_rcnn_coco.h5"
        # Download weights file
        if not os.path.exists(weights_path):
            utils.download_trained_weights(weights_path)
    elif args.weights.lower() == "last":
        # Find last trained weights
        weights_path = model.find_last_weights()[1]
    elif args.weights.lower() == "imagenet":
        # Start from ImageNet trained weights
        weights_path = model.get_imagenet_weights()
    else:
        weights_path = args.weights

    # Load weights
    print("Loading weights ", weights_path)
    if args.weights.lower() == "coco":
        # Exclude the last layers because they require a matching
        # number of classes
        model.load_weights(weights_path, by_name=True, exclude=[
            "mrcnn_class_logits", "mrcnn_bbox_fc",
            "mrcnn_bbox", "mrcnn_mask"])
    else:
        model.load_weights(weights_path, by_name=True)

    # Train or evaluate
    if args.command == "train":
        ## TODO ADD ARGS FOR THE EPOCHS AND LAYERS
        model.train_model()
    elif args.command == "inference":
        model.display_test(image_path=[args.image])
    else:
        print("'{}' is not recognized. "
              "Use 'train' or 'inference'".format(args.command))

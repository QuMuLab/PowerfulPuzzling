import matplotlib.patches as patches
from scipy.ndimage import filters
from PIL import Image, ImageChops
import matplotlib.pyplot as plt
import numpy as np
import cv2


class SegmentationMethods:
    """

    """
    MRCNN = 0
    THRESHOLDING = 1
    LOADBOARDER = 2


class IslandSegmentor(object):
    def __init__(self, mode: int) -> None:
        assert 0 <= mode <= 2, "Mode must be one of the following: SegmentationMethods.MRCNN, SegmentationMethods.THRESHOLDING, or SegmentationMethods.LOADBOARDER"

        # Set the method
        self.extraction_method = None
        if mode == SegmentationMethods.THRESHOLDING:
            self.extraction_method = self.__extract_threshold

    def extract_boarders(self, image):
        # If our image is a path (a string)
        if isinstance(image, str):
            puzzle = np.array(Image.open(image).convert('RGBA'))
        # If our image is already opened (a PIL image)
        elif isinstance(image, Image.Image):
            puzzle = image
        else:
            raise ValueError("Image must either be an image path or a PIL image")

        # Return the boarders
        return self.extraction_method(puzzle)

    def __extract_mrcnn(self, puzzle):
        raise NotImplementedError()

    def __extract_threshold(self, puzzle):
        c = 13
        blocksize = 11
        thr = cv2.cvtColor(puzzle, cv2.COLOR_RGBA2GRAY)  # grayscaling
        thr = cv2.adaptiveThreshold(thr, 255, 0, 1, blocksize, c)
        thr = cv2.GaussianBlur(thr, (5, 5), 1)

        #Finding the border of thresholded image:
        cntrs, _ = cv2.findContours(thr, 0, 1)
        srt = sorted([[cnt.shape[0], i]
                    for i, cnt in enumerate(cntrs)], reverse=True)[:15]
        biggest = [cntrs[s[1]] for s in srt]
        fill = cv2.drawContours(
            np.zeros(puzzle.shape[:2]), biggest, -1, 255, thickness=cv2.FILLED)

        # Smoothing out the edges of each puzzle piece by drawing a black (color=0) contour around each piece
        smooth = filters.median_filter(fill.astype('uint8'), size=10)
        trimmed, _ = cv2.findContours(smooth, 0, 1)
        cv2.drawContours(smooth, trimmed, -1, color=0, thickness=15)

        # Updating contours after smoothing
        contours, _ = cv2.findContours(smooth, 0, 1)

        # position at 0,0 by subtracting by min point:
        # x, y, w, h = cv2.boundingRect(contours[i])

        return puzzle, contours


i = IslandSegmentor(SegmentationMethods.THRESHOLDING)
i.extract_boarders("ass")
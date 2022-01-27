# TODO: FIX THIS: Make dynamic and merge with the rest of the package in a coherent manner.
from scipy.ndimage import filters
from PIL import Image, ImageChops
import matplotlib.pyplot as plt
import matplotlib.patches as patches
import numpy as np
import cv2

def get_image_and_border(path_to_image):
    # opening image and applying **adaptive threshold**
    puzzle = np.array(Image.open(path_to_image).convert('RGBA'))

    blocksize=11
    c=13
    thr = cv2.cvtColor(puzzle, cv2.COLOR_RGBA2GRAY) # grayscaling
    thr = cv2.adaptiveThreshold(thr, 255, 0, 1, blocksize, c)
    thr = cv2.GaussianBlur(thr, (5,5), 1)


    #Finding the border of thresholded image:
    cntrs, _ = cv2.findContours(thr, 0, 1)
    srt = sorted([[cnt.shape[0], i] for i, cnt in enumerate(cntrs)], reverse=True)[:15]
    biggest = [cntrs[s[1]] for s in srt]
    fill = cv2.drawContours(np.zeros(puzzle.shape[:2]), biggest, -1, 255, thickness=cv2.FILLED)


    # Smoothing out the edges of each puzzle piece by drawing a black (color=0) contour around each piece
    smooth = filters.median_filter(fill.astype('uint8'), size=10)
    trimmed, _ = cv2.findContours(smooth, 0, 1)
    cv2.drawContours(smooth, trimmed, -1, color=0, thickness=15)

    # Updating contours after smoothing
    contours, _ = cv2.findContours(smooth, 0, 1)

    return puzzle, contours

"""This is where we will call the functions from the powerful pluzzling algo"""
from cmath import inf
from turtle import shape
from src.border_matching import Matcher
from src.border_extraction.get_border import get_image_and_border
from src.utils import border_ops
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle
import numpy as np
from typing import Tuple
import cv2 as cv
import math
from dtw import dtw, rabinerJuangStepPattern

img, borders = get_image_and_border('dataset\\starry_night\\edge_case.jpg')
img_matcher = Matcher(img, kmeans=False)

def display_border(border, **kwargs):
    n = border.shape[0]
    b = border.reshape(n, 2)
    plt.scatter(b[:,0], b[:,1], **kwargs)

# Pieces 0 and 2 can connect on one side:
b1 = borders[0]
b2 = borders[2]
sampling_rate = 25
ur_b1 = border_ops.unroll_border(b1[:,0], sampling_rate=sampling_rate)

# Getting appropriate segments:
p1 = 1420
p2 = 2320
p3 = 3540
n = 450
b1_s = b1[p1:p1+n]
b2_s = b2[p2:p2+n]

# using hough line transform to detect straight lines
def points2img(points:np.array) -> np.array:
    # getting bounding rect:
    max_x, min_x = max(points[:,1]), min(points[:,1]) # y is the first column
    max_y, min_y = max(points[:,0]), min(points[:,0])
    h, w = max_y - min_y, max_x - min_x
    
    # creating np.array to store image:
    img = np.zeros((w+1,h+1,), dtype=np.uint8)
    for p in points:
        x = p[1] - min_x
        y = p[0] - min_y
        img[x,y] = 255
    return img

gray_b1 = points2img(b1[:,0])
gray_b1_lines = cv.cvtColor(gray_b1, cv.COLOR_GRAY2BGR)
plt.imshow(gray_b1)

lines = cv.HoughLines(gray_b1, 1, np.pi / 180, 90, None, 0, 0)

# draw the lines from the hough transform:
if lines is not None:
    for i in range(0, len(lines)):
        rho = lines[i][0][0]
        theta = lines[i][0][1]
        a = math.cos(theta)
        b = math.sin(theta)
        x0 = a * rho
        y0 = b * rho
        pt1 = (int(x0 + 1000*(-b)), int(y0 + 1000*(a)))
        pt2 = (int(x0 - 1000*(-b)), int(y0 - 1000*(a)))
        cv.line(gray_b1_lines, pt1, pt2, color=(0,0,255), thickness=2, lineType=cv.LINE_AA)
    
plt.imshow(gray_b1_lines)    
plt.show()

# exit()

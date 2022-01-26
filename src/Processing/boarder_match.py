import pickle
import numpy as np
import cv2 as cv

PATH = "/Users/martingleave/Desktop/School Work/UNIVERSITY/fourth_year/second_sem/CISC499/PowerfulPuzzling/contours_(4_fc.JPG).pickle"

def load_pickle(path):
    """[summary]

    Args:
        path ([type]): [description]

    Returns:
        [type]: [description]
    """
    with open(path, "rb") as p:
        return pickle.loads(p.read())

# Extract the contours
contours = load_pickle(PATH)
print("Num Contours:", len(contours))
print("0th Contour Shape:", contours[0].shape)

for cnt in contours:
    print(cv.contourArea(cnt))
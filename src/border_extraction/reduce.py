#%%
import pickle
import numpy as np
import cv2 as cv
import matplotlib.pyplot as plt

#%%
PATH = "contours_(edge_case.JPG).pickle"

def load_pickle(path):
    with open(path, "rb") as p:
        return pickle.loads(p.read())

#%% Extract the contours
contours = load_pickle(PATH)
print("Num Contours:", len(contours))
print("0th Contour Shape:", contours[0].shape)

#%% Display contour:
for i in range(len(contours)):
    plt.scatter(contours[i][:,0][:,0], contours[i][:,0][:,1])
    plt.show()
# %% reducing contour size
i=1
eps = 0.0005*cv.arcLength(contours[i], True)
approx = cv.approxPolyDP(contours[i], eps, True)
plt.scatter(contours[i][:,0][:,0], contours[i][:,0][:,1])
plt.scatter(approx[:,0][:,0], approx[:,0][:,1], c='r')
plt.show()
"""This is where we will call the functions from the powerful pluzzling algo"""
#%%
from cmath import inf
from src.app import get_hint, complete_puzzle
from src.border_matching import Matcher
from src.segmentation.FIXME import get_image_and_border
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle
import numpy as np
import cv2 as cv
from dtw import dtw, rabinerJuangStepPattern

# %%
img, borders = get_image_and_border('dataset\\starry_night\\edge_case.jpg')
m = Matcher(img)
plt.imshow(img)

# %%
def display_border(border, **kwargs):
    print(border.shape)
    n = border.shape[0]
    b = border.reshape(n, 2)
    plt.scatter(b[:,0], b[:,1], **kwargs)

#%% Pieces 0 and 2 can connect on one side:
b1 = borders[0]
b2 = borders[2]
display_border(b1, c='r')
display_border(b2, c='r')

# %% function to get the color near that border:
p1 = 1420
p2 = 2320
n = 450
b1_s = b1[p1:p1+n]
b2_s = b2[p2:p2+n]
display_border(b1_s, c='g')
display_border(b2_s, c='r')

# %% Unrolling on one side only using approx
ur_b1_s = cv.approxPolyDP(b1_s, 1, True)[:,0][:,0]
ur_b2_s = cv.approxPolyDP(b2_s, 1, True)[:,0][:,0]

# normalizing
ur_b1_s = ur_b1_s / np.linalg.norm(ur_b1_s)
ur_b2_s = ur_b2_s / np.linalg.norm(ur_b2_s)

plt.plot(ur_b1_s)
plt.plot(ur_b2_s)

# %% Using dtw to match
alignment = dtw(ur_b1_s, ur_b2_s, keep_internals=True)

## Display the warping curve, i.e. the alignment curve
alignment.plot(type="twoway")
print(alignment.normalizedDistance)
#``normalizedDistance`` distance computed, *normalized* for path
#   length, if normalization is known for chosen step pattern.

#%% Align and plot with the Rabiner-Juang type VI-c (no. 6) unsmoothed recursion
aligned = dtw(ur_b1_s, ur_b2_s, keep_internals=True, 
    step_pattern=rabinerJuangStepPattern(6, "c"))

aligned.plot(type="twoway")
print(aligned.normalizedDistance)

# %% High level classification of pieces using calculus:
np.diff()
# First derivative will be decreasing and the 
# second derivative will be negative for concave shapes (/\):
# First derivative will be increasing and the 
# second derivative will be positive for convex shapes (\/):

# Taking the average of the second derivative will let us know which one it is.
# A large jerk at such a point will mean the curve is very quickly changing its curvature at the point. An example would be that as you move through the point, the curve goes very quickly from a gradual bend, like moving along a huge circle, to a much sharper bend.

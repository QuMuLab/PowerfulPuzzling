"""This is where we will call the functions from the powerful pluzzling algo"""
#%%
from cmath import inf
from src.app import get_hint, complete_puzzle
from src.border_matching import Matcher
from src.segmentation.FIXME import get_image_and_border
from src.utils import rotate_points, points2img
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle
import numpy as np
from typing import Tuple
import cv2 as cv
from dtw import dtw, rabinerJuangStepPattern

# %%
img, borders = get_image_and_border('dataset\\starry_night\\edge_case.jpg')
m = Matcher(img)
plt.imshow(img)
plt.show()

# %%
def display_border(border, **kwargs):
    print(border.shape)
    n = border.shape[0]
    b = border.reshape(n, 2)
    plt.scatter(b[:,0], b[:,1], **kwargs)

#%% Pieces 0 and 2 can connect on one side:
b1 = borders[0]
b2 = borders[2]
b3 = borders[5] # non-matching piece
# display_border(b1)
# display_border(b2)
display_border(b3)
plt.show()

# %% Getting appropriate segments:
p1 = 1420
p2 = 2320
p3 = 3540
n = 450
b1_s = b1[p1:p1+n]
b2_s = b2[p2:p2+n]
b3_s = b3[p3:p3+n]
# display_border(borders[1])
# display_border(b3_s)

#%% border unrolling by getting angles:
def unroll(brdr):
    # Using the Law of cosines for SSS case:
    #       a
    # P1 - - - P2
    #         0  \  b
    #     c       \
    #              P3
    # Angle 0 is:
    #   cos^-1((a^2 + b^2 - c^2) / 2ab)
    # example: https://www.desmos.com/calculator/1vu8qxarpx
    angles = [] #TODO: optimize this by preallocating
    for i in range(0,brdr.shape[0], 3):
        p1 = brdr[i]
        p2 = brdr[i+1]
        p3 = brdr[i+2]
        # calculating euclidian distances (l2 norm):
        a = np.norm(p2-p3)
        b = np.norm(p3-p1)
        c = np.norm(p1-p2)
        angle = np.arccos((c**2 - a**2 - b**2) / (-2*a*b))
        angles.append(angle)
        #TODO: need to be able to determine if the angle is a right(+) or a left (-) turn
        # This can be done by drawing a line b/t p1 and p3 and seeing where p2 ends up on
        #   This will determine if it is concave (left turn) or convex (right turn); 
        #       (note that I am assuming we are traveling around the puzzle in a clockwise direction)
        
    return angles
        
        
         
        
  
#%%
rot = rotate_points(b3[:,0])
obs = b3[:,0][:,0]

# %%
bimg = points2img(b3[:,0])

#%% border unrolling

# n = num of observations:
n = 4 # max is 360 -> observe for each 1 deg rotation
step = 360//n
sides = []
for i in range(0, 360, step):
    pts = np.array(rotate_points(b3[:,0], deg=i), dtype=int)
    pt_img = points2img(pts)
    unrolled = []
    for j in range(pt_img.shape[0]):
        obs_ps = np.where(pt_img[j] == 1)[0]
        if obs_ps.shape[0] > 0:
            unrolled.append(obs_ps[0])
    sides.append(unrolled)
    
# %% displaying each side:
curr = 0
for i in range(n):
    l = len(sides[i])
    plt.scatter(list(range(curr, l+curr)), sides[i])
    curr += l
    
plt.show()
# %%
brdr = []
for i in sides:
    for j in i:
        brdr.append(j)
plt.plot(brdr)

# %% unrolling by extracting angles of 3 points


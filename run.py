"""This is where we will call the functions from the powerful pluzzling algo"""
#%%
from cmath import inf
from turtle import shape
from src.app import get_hint, complete_puzzle
from src.border_matching import Matcher
from src.segmentation.FIXME import get_image_and_border
from src.utils import border_ops
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle
import numpy as np
from typing import Tuple
import cv2 as cv
from dtw import dtw, rabinerJuangStepPattern

# %%
img, borders = get_image_and_border('dataset\\starry_night\\edge_case.jpg')
img_matcher = Matcher(img, kmeans=False)

# %%
def display_border(border, **kwargs):
    n = border.shape[0]
    b = border.reshape(n, 2)
    plt.scatter(b[:,0], b[:,1], **kwargs)

#%% Pieces 0 and 2 can connect on one side:
b1 = borders[0]
b2 = borders[2]
plt.show()

# %% Getting appropriate segments:
p1 = 1420
p2 = 2320
p3 = 3540
n = 450
b1_s = b1[p1:p1+n]
b2_s = b2[p2:p2+n]
# Their matching score is 0.08993 (from match_shape and a sampling rate of 50)

# %% Getting jigsaw nodes:
jigsaw_nodes = []

# using hough line transform to detect straight lines

display_border(b1)
plt.scatter(3706, 2030)
plt.scatter(3696, 2033, c='r')

plt.figure()
ur_b1 = border_ops.unroll_border(b1[:,0], sampling_rate=50)
plt.plot(ur_b1)
plt.show()    
exit()

# %% visualize the jigsaw nodes:


# %%
# TODO:
#   - Shape matching might do better with 2daprox?

matches = []
angles = []
dists = []
piece_size = 450
for p1 in range(0,b1.shape[0]-piece_size, 20): # TODO: also try border segments on the cut line
    for p2 in range(0,b2.shape[0]-piece_size, 20):
        seg1 = b1[p1:p1+piece_size]
        seg2 = b2[p2:p2+piece_size]
        
        # high level matching by concavity
        ur_seg1 = border_ops.unroll_border(seg1[:,0], sampling_rate=50)
        ur_seg2 = border_ops.unroll_border(seg2[:,0], sampling_rate=50)
        shape1, _ = border_ops.get_poly_shape(ur_seg1) # increase cutoff to 0.5?
        shape2, _ = border_ops.get_poly_shape(ur_seg2)
        
        # if (shape1 == -shape2): # making sure that they are inverted shapes (convex matching with concave)
        if shape1 != 0 and shape2 != 0: # making sure they are not just straight lines
            try:
                shape_dist = Matcher.match_shape_distance(ur_seg1, -ur_seg2)
                
                if shape_dist[1] < 0.1: # only consider matches with a low shape distance
                    # REVIEW: Am I just sampling too much? Maybe it would be better to average along the border instead?
                    dist = img_matcher.match_color_distance(seg1[:,0], seg2[:,0]) 
                    matches.append([seg1,seg2])
                    angles.append([ur_seg1, ur_seg2])
                    dists.append(dist)
                
            except Exception as e:
                print(ur_seg1.shape)
                print(ur_seg2.shape)
                display_border(b1)
                display_border(b2)
                display_border(seg1)
                display_border(seg2)
                raise e       

# %%
def get_argmin(dists, n):
    d = np.array(dists)[:,1]
    return d.argpartition(n)[:n]


# TODO: Check color for shadow

# n = 14922
# print('dist:', dists[n])
# display_border(b1)
# display_border(matches[n][0])
# display_border(b2)
# display_border(matches[n][1])

# plt.show()
# plt.plot(angles[n][0])
# plt.plot(-angles[n][1])
# s1 = border_ops.get_poly_shape(angles[n][0])
# s2 = border_ops.get_poly_shape(angles[n][1])

# print(s1,s2)
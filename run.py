"""This is where we will call the functions from the powerful pluzzling algo"""
#%%
from cmath import inf
from turtle import shape
from src.app import get_hint, complete_puzzle
from src.border_matching import Matcher
from src.segmentation.FIXME import get_image_and_border
from src.segmentation import segment_border
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

#%% running the matcher:
match_val, match_segs = img_matcher.get_matching_segments(b1[:,0], b2[:,0], mse_cutoff=5.0)

# %% Getting jigsaw nodes:
jigsaw_nodes = []

sampling_rate = 25
THRESHOLD = 0.104
mse_cutoff = 5.0
ur_b1 = border_ops.unroll_border(b1[:,0], sampling_rate=sampling_rate)
ur_b2 = border_ops.unroll_border(b2[:,0], sampling_rate=sampling_rate)

print("border 1:")
seg_is1, seg_vals1, seg_points1 = segment_border.get_border_segments(ur_b1, b1[:,0], display_borders=True)
print("border 2:")
seg_is2, seg_vals2, seg_points2 = segment_border.get_border_segments(ur_b2, b2[:,0], display_borders=True)

# %%
# getting poly shape and mse beforehand to speed up matching by avoiding redundant computations
seg_shapes1 = [border_ops.get_poly_shape(s1, cutoff=0.0)[0] for s1 in seg_vals1] # cutoff is zero because MSE is better at determing linearity
seg_shapes2 = [border_ops.get_poly_shape(s2, cutoff=0.0)[0] for s2 in seg_vals2]

seg_mse1 = [border_ops.get_mse(s1) for s1 in seg_points1]
seg_mse2 = [border_ops.get_mse(s2) for s2 in seg_points2]

# %%
best_match_i = (-1, -1) # best match index for left and right border segments
best_match_val = inf # the distance value
for seg1_i, seg1 in enumerate(seg_vals1): # seg_vals is the angles
    shape1 = seg_shapes1[seg1_i] 
    mse1 = seg_mse1[seg1_i]
    for seg2_i, seg2 in enumerate(seg_vals2):
        shape2 = seg_shapes2[seg2_i]
        mse2 = seg_mse2[seg2_i]
        
        # Check to make sure it is not linear and are inverted shapes (convex matching with concave)
        if mse1 > mse_cutoff and mse2 > mse_cutoff and shape1 == -shape2:
            # Low level shape match first:
            _, shape_dist_norm = Matcher.match_shape_distance(seg1, -seg2) # Negative to flip the curve so they overlap
            if shape_dist_norm < best_match_val:
                best_match_val = shape_dist_norm
                best_match_i = (seg1_i, seg2_i)



#%% looping through the segments and matching up possible pairs (from shapes)
s_dist = []
angles = []
segments = []
c_dist = []
for seg1_i, seg1 in enumerate(seg_vals1):
    shape1 = seg_shapes1[seg1_i][0]
    mse1 = seg_mse1[seg1_i]
    
    for seg2_i, seg2 in enumerate(seg_vals2):
        shape2 = seg_shapes2[seg2_i][0]
        mse2 = seg_mse2[seg2_i]
        
        # check to make sure it is not linear and  are inverted shapes (convex matching with concave)
        if mse1 > 5 and mse2 > 5 and shape1 == -shape2 : # line segments will have mse's close to 0
            # Matching by shape first:
            shape_dist = Matcher.match_shape_distance(seg1, -seg2) # negative to ensure they overlap
            
            # Then match by color if shape distance is the small enough:
            if shape_dist[1] < 0.1:
                # Converting ur index to a real index on the original border
                # no need to apply modulo because every ur_border index should map to a real border index:
                b1_i = seg_is1[seg1_i] * sampling_rate
                b2_i = seg_is2[seg2_i] * sampling_rate
                
                # using the real index to get the segment for matching color:
                seg_b1 = segment_border.get_border_points(b1_i[0], b1_i[1], b1[:,0])
                seg_b2 = segment_border.get_border_points(b2_i[0], b2_i[1], b2[:,0])
                
                # getting color distance:
                color_dist = img_matcher.match_color_distance(seg_b1, seg_b2)
                
                print("seg1:", seg1_i, "seg2:", seg2_i, round(shape_dist[1],3), round(color_dist[1],3))
                s_dist.append(shape_dist)
                c_dist.append(color_dist)
                angles.append([seg1, seg2])
                segments.append([seg_b1, seg_b2])
                border_ops.display_border(b1, c='b')
                border_ops.display_border(b2, c='b')
                
                border_ops.display_border(seg_b1, c='g')
                border_ops.display_border(seg_b2, c='g')
                plt.show()
                
s_dist = np.array(s_dist)
# exit()

# %% Display mse and polyshape with its corresponding segment
seg_is   =   seg_is1
seg_vals = seg_vals1
b        =        b1

for i, s in enumerate(seg_is):
    sb = segment_border.get_border_points(s[0]*sampling_rate, s[1]*sampling_rate, b[:,0])
    mse = border_ops.get_mse(sb)
    
    print(border_ops.get_poly_shape(seg_vals[i], cutoff=0))
    display_border(b)
    display_border(sb)
    plt.title("mse = "+str(mse))
    plt.show() 

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
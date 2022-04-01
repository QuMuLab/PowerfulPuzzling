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

# %% Getting jigsaw nodes:
jigsaw_nodes = []

sampling_rate = 25
THRESHOLD = 0.104
ur_b1 = border_ops.unroll_border(b1[:,0], sampling_rate=sampling_rate)
ur_b2 = border_ops.unroll_border(b2[:,0], sampling_rate=sampling_rate)

print("border 1:")
seg_is1, seg_vals1 = segment_border.get_border_segments(ur_b1, b1, display_borders=True)
print("border 2:")
seg_is2, seg_vals2 = segment_border.get_border_segments(ur_b2, b2, display_borders=True)

# %%
# for seg in seg_is1:
#     border_ops.display_border(b1, c='b')
#     segment_border.get_border_points(seg[0]*sampling_rate, seg[1]*sampling_rate, b1[:,0])
#     plt.show()

# %% matching segment values from the two borders:
# getting poly shape beforehand to speed up matching:
seg_shapes1 = [border_ops.get_poly_shape(s1, cutoff=0.002) for s1 in seg_vals1]
seg_shapes2 = [border_ops.get_poly_shape(s2, cutoff=0.002) for s2 in seg_vals2]

#%% looping through the segments and matching up possible pairs (from shapes)
s_dist = []
angles = []
segments = []
c_dist = []
for seg1_i, seg1 in enumerate(seg_vals1):
    shape1 = seg_shapes1[seg1_i][0]
    
    for seg2_i, seg2 in enumerate(seg_vals2):
        shape2 = seg_shapes2[seg2_i][0]
        
        # making sure neither are zero (linear) and are inverted shapes (convex matching with concave)
        if True:#(shape1 != 0 and shape2 != 0) and (shape1 == -shape2):
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

#%%
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
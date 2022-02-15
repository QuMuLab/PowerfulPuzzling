"""This is where we will call the functions from the powerful pluzzling algo"""
#%%
from cmath import inf
from src.app import get_hint, complete_puzzle
from src.border_matching import Matcher
from src.segmentation.FIXME import get_image_and_border
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
display_border(b1, c='r')
display_border(b2, c='r')

# %% Getting appropriate segments:
p1 = 1420
p2 = 2320
p3 = 3540
n = 450
b1_s = b1[p1:p1+n]
b2_s = b2[p2:p2+n]
b3_s = borders[1][p3:p3+n]
# display_border(borders[1])
display_border(b3_s)

#%% convertting to hsv:
hsv_puzzle = cv.cvtColor(img, cv.COLOR_RGB2HSV)

#%% color match function:
def match_color_distance(hsv_puzzle, seg1:np.array, seg2:np.array, step_pattern="symmetric2",
                        distance_only=True, display=False, y_first=True) -> Tuple[float, float]: # TODO: complete this function
    """
    Matching validation based on colors along the border segment.
    The method used here is a cummulative DTW approach (DTWi from 
    cs.ucr.edu/~eamonn/Multi-Dimensional_DTW_Journal.pdf).

    Args:
        seg1 (np.array): The pixel positions of colors to use (n,2) where y is first and x is second.
        seg2 (np.array): pixel positions of the segment to match with.
        step_pattern (str, optional): The step pattern to use when applying DTW 
            (see dtw-python docs for more info). Defaults to "symmetric2".
        distance_only (bool, optional): Only calculate the distance (no backtracking). Defaults to True.
        display (bool, optional): Display threeway and twoway plots. Defaults to False.
        y_first (bool, optional): y is the first value in the pixel position. Defaults to True

    Returns:
        Tuple[float, float]: distance and normalized distance value from DTW, respectively.
    """
    assert not (distance_only and display), 'Cannot display anything if distance_only is also set.'
    assert seg1.shape[-1] == 2 and \
            seg2.shape[-1] == 2, "Passed in segments must be pixel positions for the colors!"
    assert len(seg1.shape) == 2 and len(seg2.shape) == 2, "Segment shape must be of the format (x,2)!"
    
    # Extracting the HSV values
    hsv1 = hsv_puzzle[seg1[:, int(y_first)], seg1[:, int(not y_first)]]
    hsv2 = hsv_puzzle[seg2[:, int(y_first)], seg2[:, int(not y_first)]]
    
    # Running DTW on each individual color format (H, S, and V)
    DTW_h = dtw(hsv1[:,0], hsv2[:,0], step_pattern=step_pattern, keep_internals=display, distance_only=distance_only)
    DTW_s = dtw(hsv1[:,1], hsv2[:,1], step_pattern=step_pattern, keep_internals=display, distance_only=distance_only)
    DTW_v = dtw(hsv1[:,2], hsv2[:,2], step_pattern=step_pattern, keep_internals=display, distance_only=distance_only)
    
    # Summing all to get cumulative value        
    dist = DTW_h.distance + DTW_s.distance + DTW_v.distance
    norm_dist = DTW_h.normalizedDistance + DTW_s.normalizedDistance + DTW_v.normalizedDistance
    
    # Displaying all three:
    if display:
        # TODO: figure out how to title these (set_title doesn't work...)
        # print('Hue')
        # DTW_h.plot(type="threeway")
        # DTW_h.plot(type="twoway")

        print('Saturation')
        DTW_s.plot(type="threeway")
        DTW_s.plot(type="twoway")

        # print('Value')
        # DTW_v.plot(type="threeway")
        # DTW_v.plot(type="twoway")
        
    return dist, norm_dist

# %% checking color match
match_color_distance(hsv_puzzle, seg1=b1_s[:,0], seg2=b2_s[:,0], distance_only=False, display=True)

# %% comparing with blurry
# hsv_blr = cv.GaussianBlur(hsv_puzzle, ksize=(15,15), sigmaX=10)
hsv_blr = cv.medianBlur(hsv_puzzle, ksize=61)
plt.imshow(hsv_blr)
match_color_distance(hsv_blr, seg1=b1_s[:,0], seg2=b2_s[:,0], distance_only=False, display=True)

# %% Unrolling on one side only using approx
ur_b1_s = b1_s[:,0][:,0]
ur_b2_s = b2_s[:,0][:,0]
ur_b3_s = b3_s[:,0][:,0]

# normalizing this is needed for dtw to work 
ur_b1_s = ur_b1_s / np.linalg.norm(ur_b1_s)
ur_b2_s = ur_b2_s / np.linalg.norm(ur_b2_s)
ur_b3_s = ur_b3_s / np.linalg.norm(ur_b3_s)

plt.plot(ur_b1_s)
plt.plot(ur_b2_s)
plt.plot(ur_b3_s)

# %% Using dtw to match, with only_distance flag on (no keep_internals)
a2 = dtw(ur_b1_s, ur_b2_s, keep_internals=True, distance_only=False)
a2 = dtw(ur_b1_s, ur_b3_s, keep_internals=True, distance_only=False)

# cannot display anything if distance_only is set!
ax = a2.plot(type="threeway")
a2.plot(type="twoway")
print(a2.distance)
print(a2.normalizedDistance)

# %%

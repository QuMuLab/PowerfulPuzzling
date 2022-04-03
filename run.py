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
img_matcher = Matcher(img, borders=borders, kmeans=False)

#%% Running matcher for two known matched pieces:
# (pieces 0 and 2 can connect on one side)
b1 = borders[0]
b2 = borders[2]

match_val, match_segs = img_matcher.get_matching_segments(b1[:,0], b2[:,0], mse_cutoff=5.0)
# displaying the border contours
border_ops.display_border(b1[:,0], color='b')
border_ops.display_border(b2[:,0], color='b')

# displaying the segment of the border contours:
border_ops.display_border(match_segs[0], c='y')
border_ops.display_border(match_segs[1], c='y')
plt.title("Match Score: "+str(match_val))
plt.show()

# %% Running for all borders:
matches = img_matcher.get_matching_pieces(display=False)

# %% displaying the matches:
for match_val, (i,j), match_segs in matches:
    # displaying the border contours
    border_ops.display_border(borders[i], color='b')
    border_ops.display_border(borders[j], color='b')

    # displaying the segment of the border contours:
    border_ops.display_border(match_segs[0], c='y')
    border_ops.display_border(match_segs[1], c='y')
    plt.title("Match Score: "+str(match_val))
    plt.show()
    

# %%

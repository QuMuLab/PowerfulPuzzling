"""This is where we will call the functions from the powerful pluzzling algo"""
#%%
from src.border_matching import Matcher
from src.segmentation.get_border import get_image_and_border
from src.utils import border_ops, display
import matplotlib.pyplot as plt
import numpy as np
import cv2 as cv

#%%
img, borders = get_image_and_border('dataset\\starry_night\\edge_case.jpg')

img_matcher = Matcher(img, borders=borders, kmeans=False)

#%% getting matches
matches = img_matcher.get_matches(weighting=[2.5,1])

# %% displaying top 5 matches on the original image:
# displaying the original image
plt.imshow(img)
n_display = 5

# displaying the border contours
for match_val, (i,j), match_segs in matches[:n_display]:
    display.display_border(borders[i], color='b')
    display.display_border(borders[j], color='b')


for match_val, (i,j), match_segs in matches[:n_display]:
    # displaying the segment of the border contours:
    display.display_border(match_segs[0], c='y')
    display.display_border(match_segs[1], c='y')
    
    
    # drawing a line between the two points:
    p1 = match_segs[0][0]
    p2 = match_segs[1][0]
    
    plt.plot([p1[0], p2[0]], [p1[1], p2[1]], c='r')
    
    # getting midpoint between p1 and p2:
    p3 = [(p1[0]+p2[0])/2, (p1[1]+p2[1])/2]
    
    # adding a label to the line:
    plt.text(p3[0], p3[1], str(round(match_val,3)), color='darkgreen')
    
plt.show()

# %%

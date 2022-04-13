"""This is where we will call the functions from the powerful pluzzling algo"""
#%%
from src.border_matching import Matcher
from src.segmentation.get_border import get_image_and_border
from src.utils import border_ops, display
import matplotlib.pyplot as plt
import numpy as np
import cv2 as cv
from time import time

#%%
start_1 = time()
img, borders = get_image_and_border('dataset\\starry_night\\edge_case.jpg')
print("Time to get image and borders: ", time() - start_1)

start = time()
img_matcher = Matcher(img, borders=borders, kmeans=False)
print("Time to perform border unrolling and lock identification: ", time() - start)
#%% getting matches
start = time()
matches = img_matcher.get_matches(weighting=[2,1])
print("Time to filter and get matches: ", time() - start)

print("total time: ", time() - start_1)

# # %% displaying top 5 matches on the original image:
# # displaying the original image
# plt.imshow(img)
# n_display = 5

# # displaying the border contours
# for match_val, (i,j), match_segs in matches[:n_display]:
#     display.display_border(borders[i], color='b')
#     display.display_border(borders[j], color='b')


# for match_val, (i,j), match_segs in matches[:n_display]:
#     # displaying the segment of the border contours:
#     display.display_border(match_segs[0], c='y')
#     display.display_border(match_segs[1], c='y')
    
    
#     # drawing a line between the two points:
#     p1 = match_segs[0][0]
#     p2 = match_segs[1][0]
    
#     plt.plot([p1[0], p2[0]], [p1[1], p2[1]], c='r')
    
#     # getting midpoint between p1 and p2:
#     p3 = [(p1[0]+p2[0])/2, (p1[1]+p2[1])/2]
    
#     # adding a label to the line:
#     plt.text(p3[0], p3[1], str(round(match_val,3)), color='darkgreen')
    
# plt.show()

##################################
# %% coloring in the matches by if they are correct or not:
plt.imshow(img)
n_display = 5

# for 2-1 weighting:
c = ['r','g','b','y','c','m','k']
count = 0
for match_val, (i,j), match_segs in matches[:n_display]:
    if count == 0: # Overlaping segment
        display.display_border(match_segs[1], s=2.5, c=c[count])
        display.display_border(match_segs[0], s=2.5, c=c[count])
    elif count == 1:
        l = len(match_segs[0])//10
        for x in range(0,10,2):
            display.display_border(match_segs[0][x*l:(x+1)*l], s=2.5, c=c[count])
        display.display_border(match_segs[1], s=2.5, c=c[count])
    else:
        # Displaying the segment of the border contours:
        display.display_border(match_segs[0], s=2.5, c=c[count])
        display.display_border(match_segs[1], s=2.5, c=c[count])
    
    
    # drawing a line between the two points:
    p1 = match_segs[0][0]
    p2 = match_segs[1][0]
    
    line_clr = 'darkgreen' if count in [1, 2, 4] else 'r'
    
    plt.plot([p1[0], p2[0]], [p1[1], p2[1]], c=line_clr)
    
    # getting midpoint between p1 and p2:
    p3 = [(p1[0]+p2[0])/2, (p1[1]+p2[1])/2]

    # adding a label to the line:
    plt.text(p3[0], p3[1], str(round(match_val,3)), color=line_clr, bbox=dict(facecolor='white', alpha=0.5))
    count+=1
    
plt.show()

# for 0-1 weighting:
# c = ['r','g','b','y','c','m','k']
# count = 0
# for match_val, (i,j), match_segs in matches[:n_display]:
#     if count in [2,]:
#         s = 0
#         l = len(match_segs[s])//10
#         for x in range(0,10,2):
#             display.display_border(match_segs[s][x*l:(x+1)*l], s=2.5, c=c[count])
#         display.display_border(match_segs[not s], s=2.5, c=c[count])
#     else:
#         # Displaying the segment of the border contours:
#         display.display_border(match_segs[0], s=2.5, c=c[count])
#         display.display_border(match_segs[1], s=2.5, c=c[count])
    
    
#     # drawing a line between the two points:
#     p1 = match_segs[0][0]
#     p2 = match_segs[1][0]
    
#     line_clr = 'darkgreen' if count in [] else 'r'
    
#     plt.plot([p1[0], p2[0]], [p1[1], p2[1]], c=line_clr)
    
#     # getting midpoint between p1 and p2:
#     p3 = [(p1[0]+p2[0])/2, (p1[1]+p2[1])/2]
    
#     # adding a label to the line:
#     plt.text(p3[0], p3[1], str(round(match_val,3)), color=line_clr, bbox=dict(facecolor='white', alpha=0.5))
#     count+=1
    
# plt.show()

# for 1-0 weighting:
# c = ['r','g','b','y','c','m','k']
# count = 0
# for match_val, (i,j), match_segs in matches[:n_display]:
#     if count in [2,4]:
#         l = len(match_segs[0])//10
#         for x in range(0,10,2):
#             display.display_border(match_segs[1][x*l:(x+1)*l], s=2.5, c=c[count])
#         display.display_border(match_segs[0], s=2.5, c=c[count])
#     else:
#         # Displaying the segment of the border contours:
#         display.display_border(match_segs[0], s=2.5, c=c[count])
#         display.display_border(match_segs[1], s=2.5, c=c[count])
    
    
#     # drawing a line between the two points:
#     p1 = match_segs[0][0]
#     p2 = match_segs[1][0]
    
#     line_clr = 'darkgreen' if count in [0] else 'r'
    
#     plt.plot([p1[0], p2[0]], [p1[1], p2[1]], c=line_clr)
    
#     # getting midpoint between p1 and p2:
#     p3 = [(p1[0]+p2[0])/2, (p1[1]+p2[1])/2]
    
#     # adding a label to the line:
#     plt.text(p3[0], p3[1], str(round(match_val,3)), color=line_clr, bbox=dict(facecolor='white', alpha=0.5))
#     count+=1
    
# plt.show()


# %%

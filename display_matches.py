"""This is where we will call the functions from the powerful pluzzling algo"""
#%%
from src.border_extraction.get_border import get_image_and_border
from src.border_matching import Matcher
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

weighting = [2,1]
matches_2_1 = img_matcher.get_matches(weighting=weighting)

weighting = [0,1]
matches_0_1 = img_matcher.get_matches(weighting=weighting)

weighting = [1,0]
matches_1_0 = img_matcher.get_matches(weighting=weighting)

#%% getting matches
plt.figure(figsize=(15,8))
# ax21 = plt.subplot(1,2,2)
plt.tick_params(axis='both', which='both', 
                bottom=False,top=False,
                left=False,labelleft=False,
                labelbottom=False) 
plt.title('2,1')
######################################
# for 2-1 weighting:
plt.imshow(img)
n_display = 5
c = ['r','g','b','y','c','m','k']
count = 0
for match_val, (i,j), match_segs in matches_2_1[:n_display]:
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
######################################
# for 0-1 weighting:
ax01 = plt.subplot(2,2,1)
plt.tick_params(axis='both', which='both', 
                bottom=False,top=False,
                left=False,labelleft=False,
                labelbottom=False) 
plt.title('0,1')
plt.imshow(img)
c = ['r','g','b','y','c','m','k']
count = 0
for match_val, (i,j), match_segs in matches_0_1[:n_display]:
    if count in [2,]:
        s = 0
        l = len(match_segs[s])//10
        for x in range(0,10,2):
            display.display_border(match_segs[s][x*l:(x+1)*l], s=2.5, c=c[count])
        display.display_border(match_segs[not s], s=2.5, c=c[count])
    else:
        # Displaying the segment of the border contours:
        display.display_border(match_segs[0], s=2.5, c=c[count])
        display.display_border(match_segs[1], s=2.5, c=c[count])
    
    
    # drawing a line between the two points:
    p1 = match_segs[0][0]
    p2 = match_segs[1][0]
    
    line_clr = 'darkgreen' if count in [] else 'r'
    
    plt.plot([p1[0], p2[0]], [p1[1], p2[1]], c=line_clr)
    
    # getting midpoint between p1 and p2:
    p3 = [(p1[0]+p2[0])/2, (p1[1]+p2[1])/2]
    
    # adding a label to the line:
    plt.text(p3[0], p3[1], str(round(match_val,3)), color=line_clr, bbox=dict(facecolor='white', alpha=0.5))
    count+=1


######################################
# for 1-0 weighting:
ax10 = plt.subplot(2,2,3, sharex=ax01)
plt.tick_params(axis='both', which='both', 
                bottom=False,top=False,
                left=False,labelleft=False,
                labelbottom=False) 
plt.title('1,0')
plt.imshow(img)
c = ['r','g','b','y','c','m','k']
count = 0
for match_val, (i,j), match_segs in matches_1_0[:n_display]:
    if count in [2,4]:
        l = len(match_segs[0])//10
        for x in range(0,10,2):
            display.display_border(match_segs[1][x*l:(x+1)*l], s=2.5, c=c[count])
        display.display_border(match_segs[0], s=2.5, c=c[count])
    else:
        # Displaying the segment of the border contours:
        display.display_border(match_segs[0], s=2.5, c=c[count])
        display.display_border(match_segs[1], s=2.5, c=c[count])
    
    
    # drawing a line between the two points:
    p1 = match_segs[0][0]
    p2 = match_segs[1][0]
    
    line_clr = 'darkgreen' if count in [0] else 'r'
    
    plt.plot([p1[0], p2[0]], [p1[1], p2[1]], c=line_clr)
    
    # getting midpoint between p1 and p2:
    p3 = [(p1[0]+p2[0])/2, (p1[1]+p2[1])/2]
    
    # adding a label to the line:
    plt.text(p3[0], p3[1], str(round(match_val,3)), color=line_clr, bbox=dict(facecolor='white', alpha=0.5))
    count+=1

ax21.set_aspect('equal')
ax01.set_aspect('equal')
ax10.set_aspect('equal')
plt.subplots_adjust(wspace=.01, hspace=.2)
plt.show()
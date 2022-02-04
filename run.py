"""This is where we will call the functions from the powerful pluzzling algo"""
#%%
from cmath import inf
from src.app import get_hint, complete_puzzle
from src.border_matching import Matcher
from src.segmentation.FIXME import get_image_and_border
import matplotlib.pyplot as plt
import numpy as np
import cv2 as cv

# %%
img, borders = get_image_and_border('dataset\\starry_night\\edge_case.jpg')
print(img.shape)
m = Matcher(img)
plt.imshow(img)

# %%
def display_border(border, **kwargs):
    n = border.shape[0]
    b = border.reshape(n, 2)
    plt.scatter(b[:,0], b[:,1], **kwargs)

#%% pieces 0 and 2 can connect on one side:
display_border(borders[0])
display_border(borders[2], c='r')

#%% Splitting up the border
# length of one piece is around 400-500 pixels
b1 = borders[0]
b2 = borders[2]

# x,y,w,h = cv.boundingRect(b1)
# plt.xlim(x,x+w)
# plt.ylim(y,y+h)
n=450
best_match_i = [0,0] # index for the best matching group
best_score = inf # the lower the score the better (best is 0)


for p1 in range(0,len(b1), n):
    plt.scatter(b1[:,0][:,0], b1[:,0][:,1], c='g')
    plt.scatter(b2[:,0][:,0], b2[:,0][:,1], c='g')
    b1_s = b1[p1:p1+n]
    for p2 in range(0, len(b2), n):
        b2_s = b2[p2:p2+n]
        score = cv.matchShapes(b1_s, b2_s, 2,0.0)
        if best_score > score:
            print("new best:", score)
            best_score = score
            best_match_i = [p1, p2]
            plt.scatter(b1_s[:,0][:,0], b1_s[:,0][:,1], c='r')
            plt.scatter(b2_s[:,0][:,0], b2_s[:,0][:,1], c='r')
            plt.show()
            plt.scatter(b1[:,0][:,0], b1[:,0][:,1], c='g')
            plt.scatter(b2[:,0][:,0], b2[:,0][:,1], c='g')
        
    
# score = cv.matchShapes(b1_s[0], b1_s[0])


 # %%
p1,p2 = best_match_i
plt.scatter(b1[:,0][:,0], b1[:,0][:,1])
plt.scatter(b2[:,0][:,0], b2[:,0][:,1])

# %%
# Matching segment is at (index positions):
#   b1: 1420-1870
#   b2: 2320-2770
p1 = 1420
p2 = 2320
n = 450
b1_s = b1[p1:p1+n]
b2_s = b2[p2:p2+n]
score = cv.matchShapes(b1_s, b2_s, 1, None)
print('score is', score)
plt.scatter(b1[:,0][:,0], b1[:,0][:,1], c='g')
plt.scatter(b2[:,0][:,0], b2[:,0][:,1], c='g')
plt.scatter(b1_s[:,0][:,0], b1_s[:,0][:,1], c='r')
plt.scatter(b2_s[:,0][:,0], b2_s[:,0][:,1], c='r')
# %% overlaying the two segements
x1,y1,w,h = cv.boundingRect(b1_s)
b1_s0 = np.array([[p[0]-x1, p[1]-y1] for p in b1_s[:,0]])
x2,y2,w,h = cv.boundingRect(b2_s)
b2_s0 = np.array([[p[0]-x2, p[1]-y2] for p in b2_s[:,0]])

plt.scatter(b1_s0[:,0], b1_s0[:,1], c='g')
plt.scatter(b2_s0[:,0], b2_s0[:,1], c='r')
# %% getting score for zeroed border
score = cv.matchShapes(b1_s0, b2_s0, 1, None)
print('score is', score)

# %%

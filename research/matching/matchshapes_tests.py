#%%
from cmath import inf
from src.border_matching import Matcher
from src.border_extraction.get_border import get_image_and_border
import matplotlib.pyplot as plt
import numpy as np
import cv2 as cv

# %%
img, borders = get_image_and_border('dataset\\starry_night\\edge_case.jpg')
print(img.shape)
m = Matcher(img, borders)
# plt.imshow(img)

# %%
def display_border(border, **kwargs):
    n = border.shape[0]
    b = border.reshape(n, 2)
    plt.scatter(b[:,0], b[:,1], **kwargs)

#%% pieces 0 and 2 can connect on one side:
b1 = borders[0]
b2 = borders[2]
# display_border(b1)
# display_border(b2, c='r')

# %%
# Matching segments is at (index positions):
#   b1: 1420-1870
#   b2: 2320-2770
p1 = 1420
p2 = 2320
n = 450
b1_s = b1[p1:p1+n]
b2_s = b2[p2:p2+n]
score = cv.matchShapes(b1_s, b2_s, 1, None)
print('score is', score)
# display_border(b1, c='g')
# display_border(b2, c='g')
# display_border(b1_s, c='r')
# display_border(b2_s, c='r')

# %% Overlaying the two segements by zeroing them out
x1,y1,w,h = cv.boundingRect(b1_s)
b1_s0 = np.array([[p[0]-x1, p[1]-y1] for p in b1_s[:,0]])
x2,y2,w,h = cv.boundingRect(b2_s)
b2_s0 = np.array([[p[0]-x2, p[1]-y2] for p in b2_s[:,0]])

score = cv.matchShapes(b1_s0, b2_s0, 1, None)
print('score for zeroed is', score)
# display_border(b1_s0, c='g')
# display_border(b2_s0, c='r')

# %% Visualizing Hu moments with all combinations of pieces with the b1_s piece
# Getting Hu moments for segments with this piece
p1 = b1_s
# display_border(b1, c='g')
# display_border(p1, c='r')
# plt.show()

# Looping through all n sized segments to get their hu moments
hu = np.zeros((b2.shape[0]))
for j in range(0, 8):
    p1 = b1_s[j*25:-j*25] if j != 0 else b1_s
    # display_border(p1)
    for i in range(0, len(b2), len(p1)):
        p2 = b2[i:i+n]
        score = cv.matchShapes(p1, p2, 1, None)
        hu[i:i+len(p1)] += score
        # display_border(p2)

# plt.show()
display_border(b1_s, c='y', s=100)
hu /= 5
hu_norm = hu / np.linalg.norm(hu)

plt.scatter(b2[:,0][:,0],b2[:,0][:,1], c=hu, cmap='cool')
plt.show()

# Approx
# b1_aprx = cv.approxPolyDP(b1, 1, True)
# b2_aprx = cv.approxPolyDP(b2, 1, True)
# display_border(b1_aprx)
# display_border(b2_aprx)
# from https://towardsdatascience.com/jigsaw-puzzle-ai-from-a-to-z-b4bdb53d8686
#%%
from scipy.ndimage import filters
from PIL import Image, ImageChops
import matplotlib.pyplot as plt
import matplotlib.patches as patches
import numpy as np
import cv2

#%% opening image and applying adaptive threshold
puzzle = np.array(Image.open('dataset\\starry_night\\edge_case.jpg').convert('RGBA'))

blocksize=11
c=13
thr = cv2.cvtColor(puzzle, cv2.COLOR_RGBA2GRAY) # grayscaling
thr = cv2.adaptiveThreshold(thr, 255, 0, 1, blocksize, c)
thr = cv2.GaussianBlur(thr, (5,5), 1)


#%% Finding the border of thresholded image:
cntrs, _ = cv2.findContours(thr, 0, 1)
srt = sorted([[cnt.shape[0], i] for i, cnt in enumerate(cntrs)], reverse=True)[:15]
biggest = [cntrs[s[1]] for s in srt]
fill = cv2.drawContours(np.zeros(puzzle.shape[:2]), biggest, -1, 255, thickness=cv2.FILLED)


#%% Smoothing out the edges of each puzzle piece by drawing a black (color=0) contour around each piece
smooth = filters.median_filter(fill.astype('uint8'), size=10)
trimmed, _ = cv2.findContours(smooth, 0, 1)
cv2.drawContours(smooth, trimmed, -1, color=0, thickness=15)

#%% Updating contours after smoothing
contours, _ = cv2.findContours(smooth, 0, 1)

#%% Matching the smoothed contours with original image
tiles, tile_centers = [], []
s_pos = [] # keeps track of how many tiles were successfully captured
s_dims = []
f_pos = [] # failed to capture
f_dims = []
window = (2000, 2500)
for i in range(len(contours)):
    try:
        x, y, w, h = cv2.boundingRect(contours[i])
        shape, tile = np.zeros(puzzle.shape[:2]), np.zeros((h, w,4), 'uint8')

        cv2.drawContours(shape, [contours[i]], -1, color=1, thickness=-1)
        shape = (puzzle * shape[:,:,None])[y:y+h, x:x+w, :]

        tile[:,:] = shape
        tiles.append(tile)
        tile_centers.append((h//2+y, w//2+x))

        print('Success: ({}, {}) ({}, {})'.format(x, y, w, h))
        s_pos.append([x, y])
        s_dims.append([w, h])
    except Exception:
        print('Failed: ({}, {}) ({}, {})'.format(x, y, w, h))
        f_pos.append([x, y])
        f_dims.append([w, h])

s_pos = np.array(s_pos)
s_dims = np.array(s_dims)
f_pos = np.array(f_pos)
f_dims = np.array(f_dims)

#%% Create figure and axes to display mask with bounding box
fig, ax = plt.subplots()

# Display the image
print(smooth.shape)
for point in contours[0]:
    x, y = point[0]
    smooth[y, x] = 0.5
ax.imshow(smooth, cmap='gray')

# Create a Rectangle patch
for pos, dim in zip(f_pos, f_dims):
    rect = patches.Rectangle(pos, dim[0], dim[1], linewidth=1, edgecolor='r', facecolor='none') # red for failed tiles
    ax.add_patch(rect)

for pos, dim in zip(s_pos, s_dims):
    rect = patches.Rectangle(pos, dim[0], dim[1], linewidth=1, edgecolor='g', facecolor='none')
    ax.add_patch(rect)
plt.show()

#%% Plotting the tiles individually:
fig, ax = plt.subplots(2,4, dpi=80)
ax[0,0].imshow(tiles[0])
ax[0,1].imshow(tiles[1])
ax[0,2].imshow(tiles[2])
ax[0,3].imshow(tiles[3])

[axi.set_axis_off() for axi in ax.ravel()]
plt.show()

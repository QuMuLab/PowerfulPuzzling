# from https://towardsdatascience.com/jigsaw-puzzle-ai-from-a-to-z-b4bdb53d8686
from scipy.ndimage import filters
from PIL import Image, ImageChops
import matplotlib.pyplot as plt
import numpy as np
import cv2

img = np.array(Image.open('C:\\Users\\Jean\\Desktop\\Undergrad\\2022 Winter\\CISC 499\\PowerfulPuzzling\\dataset\\starry_night\\edge_case.JPG'
        ).convert('RGBA'))
img = cv2.cvtColor(img, cv2.COLOR_RGBA2GRAY) # grayscaling

c=-10
blocksize=5
thr = cv2.adaptiveThreshold(img, 255, cv2.ADAPTIVE_THRESH_MEAN_C, 
                            cv2.THRESH_BINARY, blocksize, c)
blur = cv2.GaussianBlur(thr, (5,5), 1)
cntrs, _ = cv2.findContours(blur, 0, 1)
srt = sorted([[cnt.shape[0], i] for i, cnt in enumerate(cntrs)], reverse=True)[:15]
biggest = [cntrs[s[1]] for s in srt]  
fill = cv2.drawContours(np.zeros(img.shape[:2]), biggest, -1, 255, thickness=cv2.FILLED)

smooth = filters.median_filter(fill.astype('uint8'), size=10) 
trim_contours, _ = cv2.findContours(smooth, 0, 1) 
cv2.drawContours(smooth, trim_contours, -1, color=0, thickness=3) 

plt.imshow(thr, cmap="gray")
plt.suptitle("thresh")

plt.figure()
plt.imshow(fill, cmap="gray")
plt.suptitle("block: {}, c: {}".format(blocksize, c))

plt.figure()
plt.imshow(smooth, cmap="gray")
plt.suptitle("smooth")
plt.show()
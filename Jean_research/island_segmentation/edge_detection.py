# from https://towardsdatascience.com/jigsaw-puzzle-ai-from-a-to-z-b4bdb53d8686
from scipy.ndimage import filters
from PIL import Image, ImageChops
import matplotlib.pyplot as plt
import numpy as np
import cv2

img = np.array(Image.open('Mu_p.jpg').convert('RGBA'))
img = cv2.cvtColor(img, cv2.COLOR_RGBA2GRAY) # grayscaling

c=-3
blocksize=3

thr = cv2.adaptiveThreshold(img, 255, cv2.ADAPTIVE_THRESH_MEAN_C, 
                            cv2.THRESH_BINARY, blocksize, c)
# thr = cv2.GaussianBlur(thr, (blocksize,blocksize), 1)
cntrs, _ = cv2.findContours(thr, 0, 1)
srt = sorted([[cnt.shape[0], i] for i, cnt in enumerate(cntrs)], reverse=True)[:15]
biggest = [cntrs[s[1]] for s in srt]  
fill = cv2.drawContours(np.zeros(img.shape[:2]), biggest, -1, 255, thickness=cv2.FILLED)

plt.imshow(fill, cmap="gray")
plt.suptitle("block: {}, c: {}".format(blocksize, c))
plt.show()
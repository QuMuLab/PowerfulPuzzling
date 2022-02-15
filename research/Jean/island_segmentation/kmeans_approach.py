#%% from this: https://towardsdatascience.com/image-segmentation-with-clustering-b4bbc98f2ee6
from sklearn.cluster import KMeans
from sklearn.datasets import make_blobs
from scipy.ndimage import filters
import numpy as np
from matplotlib import pyplot as plt
from PIL import Image
import cv2
path_to_image = 'C:\\Users\\Jean\\Desktop\\Undergrad\\2022 Winter\\CISC 499\\PowerfulPuzzling\\dataset\\starry_night\\edge_case.JPG'

# %%
img = np.array(Image.open(path_to_image).convert('RGB'))
vectorized = img.reshape((-1,3))
kmeans = KMeans(n_clusters=2).fit(vectorized)
centers = np.uint8(kmeans.cluster_centers_)
segmented_data = centers[kmeans.labels_.flatten()]
 
# %%
segmented_image = segmented_data.reshape((img.shape))
plt.imshow(segmented_image)
plt.suptitle("segmented")
plt.figure()
#%%

img = cv2.cvtColor(segmented_image, cv2.COLOR_RGBA2GRAY) # grayscaling

def find_cntrs(img, blur_amt=None):
    if blur_amt:
        blur = cv2.GaussianBlur(img, (blur_amt, blur_amt), 1)
    cntrs, _ = cv2.findContours(blur, 0, 1)
    srt = sorted([[cnt.shape[0], i] for i, cnt in enumerate(cntrs)], reverse=True)[:15]
    biggest = [cntrs[s[1]] for s in srt]  
    fill = cv2.drawContours(np.zeros(blur.shape[:2]), biggest, -1, 255, thickness=cv2.FILLED)
    return fill

def smooth_edges(img, thickness=3):
    smooth = filters.median_filter(img.astype('uint8'), size=10) 
    trim_contours, _ = cv2.findContours(smooth, 0, 1) 
    cv2.drawContours(smooth, trim_contours, -1, color=0, thickness=thickness)
    return smooth

# c=-10
# blocksize=5
# thr = cv2.adaptiveThreshold(img, 255, cv2.ADAPTIVE_THRESH_MEAN_C, 
#                             cv2.THRESH_BINARY, blocksize, c)

# plt.imshow(img, cmap='gray')
# plt.suptitle("grayscaled")
# plt.figure()

# fill = find_cntrs(thr, 5)

# plt.imshow(fill, cmap="gray")
# plt.suptitle("block: {}, c: {}".format(blocksize, c))

# smoothed = smooth_edges(fill, 5)

# plt.imshow(smoothed, cmap='gray')
# plt.suptitle("smoothed")
# plt.figure()
plt.show()
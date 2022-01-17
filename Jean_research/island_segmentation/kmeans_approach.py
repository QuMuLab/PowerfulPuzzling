# from this: https://towardsdatascience.com/image-segmentation-with-clustering-b4bbc98f2ee6
from sklearn.cluster import KMeans
from sklearn.datasets import make_blobs
import numpy as np
from matplotlib import pyplot as plt
import cv2

img = cv2.imread('our_p.png', cv2.IMREAD_UNCHANGED)
vectorized = img.reshape((-1,3))
kmeans = KMeans(n_clusters=2, n_init=10, max_iter=1000).fit(vectorized)
centers = np.uint8(kmeans.cluster_centers_)
segmented_data = centers[kmeans.labels_.flatten()]
 
segmented_image = segmented_data.reshape((img.shape))
plt.imshow(segmented_image)
plt.suptitle("segmented")
plt.figure()

plt.imshow(img)
plt.show()
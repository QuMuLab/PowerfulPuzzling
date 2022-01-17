# from this https://github.com/omadson/fuzzy-c-means 
from sklearn.cluster import KMeans
from sklearn.datasets import make_blobs
import numpy as np
from matplotlib import pyplot as plt
import cv2

from fcmeans import FCM

img = cv2.imread('mu_p.jpg', cv2.IMREAD_UNCHANGED)
vectorized = img.reshape((-1,3))

fcm = FCM(n_clusters=2, m=2) # m determines tolerance for how fuzzy
fcm.fit(vectorized)
centers = np.uint8(fcm.centers)
labels = centers[fcm.predict(vectorized)]

segmented_image = labels.reshape((img.shape))
plt.imshow(segmented_image)
plt.suptitle("segmented")
plt.figure()

plt.imshow(img)
plt.show()
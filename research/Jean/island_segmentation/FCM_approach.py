# from this https://github.com/omadson/fuzzy-c-means 
from sklearn.cluster import KMeans
from sklearn.datasets import make_blobs
import numpy as np
from matplotlib import pyplot as plt
import cv2 

from fcmeans import FCM

img = cv2.imread('C:\\Users\\Jean\\Desktop\\Undergrad\\2022 Winter\\CISC 499\\PowerfulPuzzling\\dataset\\starry_night\\edge_case.JPG', 
        cv2.IMREAD_UNCHANGED)
vectorized = img.reshape((-1,3))

fcm = FCM(n_clusters=2, m=2) # m determines tolerance for how fuzzy
fcm.fit(vectorized)
centers = np.uint8(fcm.centers)
labels = centers[fcm.predict(vectorized)]

segmented_image = labels.reshape((img.shape))
plt.imshow(segmented_image)
plt.suptitle("segmented")
plt.figure()

img = cv2.cvtColor(segmented_image, cv2.COLOR_RGBA2GRAY) # grayscaling

c=-10
blocksize=5
thr = cv2.adaptiveThreshold(img, 255, cv2.ADAPTIVE_THRESH_MEAN_C, 
                            cv2.THRESH_BINARY, blocksize, c)
blur = cv2.GaussianBlur(thr, (5,5), 1)
cntrs, _ = cv2.findContours(blur, 0, 1)
srt = sorted([[cnt.shape[0], i] for i, cnt in enumerate(cntrs)], reverse=True)[:15]
biggest = [cntrs[s[1]] for s in srt]  
fill = cv2.drawContours(np.zeros(img.shape[:2]), biggest, -1, 255, thickness=cv2.FILLED)

plt.imshow(img, cmap='gray')
plt.suptitle("grayscaled")

plt.figure()
plt.imshow(fill, cmap="gray")
plt.suptitle("block: {}, c: {}".format(blocksize, c))
plt.show()
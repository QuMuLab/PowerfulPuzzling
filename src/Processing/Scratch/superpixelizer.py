# import the necessary packages
from skimage.segmentation import slic, felzenszwalb
from skimage.segmentation import mark_boundaries
from skimage.util import img_as_float
from skimage import io
import matplotlib.pyplot as plt
import numpy as np
import random
import cv2

# load the image and convert it to a floating point data type
image = img_as_float(io.imread("rawr.png"))
image = image[:,:,:3]
mean_colors = []

# loop over the number of segments
for numSegments in (10,):
    # apply SLIC and extract (approximately) the supplied number
    # of segments
    segments = slic(image,
                    n_segments = numSegments,
                    sigma = 3,
                    compactness=20,
                    max_num_iter=50,
                    channel_axis=2,
                    convert2lab=True,
                    )
    segments_ids = np.unique(segments)
    print(len(segments.flatten()))
    print(len(image.flatten()))

    # # loop over the unique segment values
    for (i, segVal) in enumerate(np.unique(segments)):

        # construct a mask for the segment
        where = segments == segVal
        if i == 0:
            where = np.logical_or(segments == 1, segments == 2)


        seg = image[where]
        mean_color = 0
        for pixel in seg:
            mean_color += pixel
        mean_color /= len(seg)

        # print(len(where[0]) * len(where))
        # print(segVal)
        # exit()

        if i == 0:
            image[where] = np.array([255,0,0])
        mean_colors.append(mean_color)

    # show the output of SLIC
    fig = plt.figure("Superpixels -- %d segments" % (numSegments))
    ax = fig.add_subplot(1, 1, 1)
    ax.imshow(mark_boundaries(image, segments))
    plt.axis("off")


# Cluster based on mean superpixel color
from sklearn.cluster import KMeans, SpectralClustering, DBSCAN, OPTICS
from sklearn import preprocessing
import numpy as np

mean_colors = np.array(mean_colors)
scaler = preprocessing.StandardScaler().fit(mean_colors)
clusterer = SpectralClustering(n_clusters=4).fit(scaler.transform(mean_colors))

# Create 3D plot of mean colors of super pixels
import matplotlib.pyplot as plt

fig = plt.figure(figsize=(12, 12))
ax = fig.add_subplot(projection='3d')

sequence_containing_x_vals = mean_colors[:, 0]
sequence_containing_y_vals = mean_colors[:, 1]
sequence_containing_z_vals = mean_colors[:, 2]
ax.scatter(sequence_containing_x_vals, sequence_containing_y_vals, sequence_containing_z_vals, c=clusterer.labels_)


# # loop over the unique segment values
for (i, segVal) in enumerate(np.unique(segments)):
    # construct a mask for the segment
    seg = image[segments == segVal]
    label = clusterer.labels_[i]
    if label == 0:
        c = [0, 0, 0]
    if label == 1:
        c = [0, 255, 255]
    if label == 2:
        c = [255, 0, 255]
    if label == 3:
        c = [0, 255, 0]
    if label == 4:
        c = [255, 255, 255]
    if label == 5:
        c = [255, 255, 0]
    if label == 6:
        c = [255, 0, 0]
    if label == 7:
        c = [255, 255, 0]
    if label == 8:
        c = [255, 0, 0]

    c = np.array(c)
    image[segments == segVal] = c

# show the output of SLIC
fig = plt.figure("Superpixels -- clusters")
ax = fig.add_subplot(1, 1, 1)
ax.imshow(mark_boundaries(image, segments))
plt.axis("off")

# show the plots
plt.show()
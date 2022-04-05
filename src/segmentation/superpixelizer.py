# import the necessary packages
from statistics import mode
from skimage.segmentation import slic, felzenszwalb
from skimage.segmentation import mark_boundaries
from skimage.util import img_as_float
from skimage import io
import matplotlib.pyplot as plt
import numpy as np

from sklearn.cluster import KMeans, SpectralClustering, DBSCAN, OPTICS
from sklearn import preprocessing
import numpy as np


class SuperPixelizer(object):
    def __init__(self, n_segments=1000, sigma=3, compactness=20, max_num_iter=50, channel_axis=2, scale=1):
        """[summary]

        Args:
            n_segments (int, optional): [description]. Defaults to 1000.
            sigma (int, optional): [description]. Defaults to 3.
            compactness (int, optional): [description]. Defaults to 20.
            max_num_iter (int, optional): [description]. Defaults to 50.
            channel_axis (int, optional): [description]. Defaults to 2.
            scale (int, optional): [description]. Defaults to 1.
        """
        # Setup our pixelizer
        self.n_segments = n_segments
        self.sigma=sigma
        self.compactness=compactness
        self.max_num_iter=max_num_iter
        self.channel_axis=channel_axis
        self.scale = scale

    def __load_image(self, image_path):
        """[summary]

        Args:
            image_path ([type]): [description]
        Returns:
            [type]: [description]
        """
        # Load up the image and remove the alpha channel
        from skimage.transform import rescale, resize, downscale_local_mean
        image = img_as_float(io.imread(image_path))
        image = rescale(image, self.scale, anti_aliasing=False)
        if(image.shape[-1] == 4):
            image = image[:,:,:3]

        return image

    def extract_superpixels(self, image_path: str) -> np.array:
        """[summary]

        Args:
            image_path (str): [description]
        """
        # Run SLIC & Return the segments
        image = self.__load_image(image_path)
        return slic(image,n_segments=self.n_segments,
                        sigma=self.sigma,
                        compactness=self.compactness)
                        # max_num_iter=self.max_num_iter,
                        # channel_axis=self.channel_axis,
                        # convert2lab=True)

    def combine_superpixels(self, segments, label_a, label_b) -> np.array:
        """
        Combines superpixel a and b. Replaces label a with b

        Args:
            segments ([type]): [description]
            label_a ([type]): [description]
            label_b ([type]): [description]

        Returns:
            np.array: [description]
        """
        segments[segments == label_a] = label_b
        return segments

    def plot_segments(self, image, segments):
        """[summary]

        Args:
            image ([type]): [description]
            segments ([type]): [description]
        """

        # show the output of SLIC
        image = self.__load_image(image)
        fig = plt.figure("Superpixels")
        ax = fig.add_subplot(1, 1, 1)
        ax.imshow(mark_boundaries(image, segments))
        plt.axis("off")

    def cluster(self, image, segments, n_clusters=4, plot=False):
        # Load the image
        image = self.__load_image(image)

        # Calculate mean color
        mean_colors = []
        for (i, segVal) in enumerate(np.unique(segments)):

            # construct a mask for the segment
            where = segments == segVal
            seg = image[where]
            mean_color = 0
            for pixel in seg:
                mean_color += pixel
            mean_color /= len(seg)
            mean_colors.append(mean_color)

        # Cluster based on the superpixels mean color
        mean_colors = np.array(mean_colors)
        scaler = preprocessing.StandardScaler().fit(mean_colors)
        clusterer = SpectralClustering(n_clusters=n_clusters).fit(scaler.transform(mean_colors))


        # Create 3D plot of mean colors of super pixels
        if plot:
            # Creat colors for each cluster
            label_colors = np.random.rand(n_clusters, 3)

            # loop over the unique segment values
            for (i, segVal) in enumerate(np.unique(segments)):
                # construct a mask for the segment
                seg = image[segments == segVal]
                label = clusterer.labels_[i]
                c = label_colors[label]
                image[segments == segVal] = c

            # Show scatter
            fig = plt.figure("Scatter", figsize=(12, 12))
            ax = fig.add_subplot(projection='3d')
            sequence_containing_x_vals = mean_colors[:, 0]
            sequence_containing_y_vals = mean_colors[:, 1]
            sequence_containing_z_vals = mean_colors[:, 2]
            ax.scatter(sequence_containing_x_vals, sequence_containing_y_vals, sequence_containing_z_vals, c=clusterer.labels_)

            # show the output of SLIC
            fig2 = plt.figure("Clusters")
            ax2 = fig2.add_subplot(1, 1, 1)
            ax2.imshow(image)
            plt.axis("off")

        return clusterer.labels_

    def plot_graph(self, segments, image_path):
        """


        Args:
            segments ([type]): [description]
            image_path ([type]): [description]
        """
        # Remap segments between 0 and 1
        mapping = {}
        v = 0
        for x in unique:
            mapping[x] = v
            v += 1
        for key in mapping:
            segs[segs == key] = mapping[key]

        # centers
        segments_ids = np.unique(segs)
        segments = segs
        centers = np.array([np.mean(np.nonzero(segments==i),axis=1) for i in segments_ids])

        vs_right = np.vstack([segments[:,:-1].ravel(), segments[:,1:].ravel()])
        vs_below = np.vstack([segments[:-1,:].ravel(), segments[1:,:].ravel()])
        bneighbors = np.unique(np.hstack([vs_right, vs_below]), axis=1)
        from matplotlib.lines import Line2D

        img = self.__load_image(image_path)
        fig = plt.figure(figsize=(10,10))
        ax = fig.add_subplot(111)
        plt.imshow(mark_boundaries(img, segments))
        plt.scatter(centers[:,1],centers[:,0], c='y')

        for i in range(bneighbors.shape[1]):
            y0,x0 = centers[bneighbors[0,i]]
            y1,x1 = centers[bneighbors[1,i]]

            l = Line2D([x0,x1],[y0,y1], alpha=0.5)
            ax.add_line(l)


import time
impath = "dataset/starry_night/4_fc.JPG"
s = SuperPixelizer(100, max_num_iter=100, scale=0.5)
start_time = time.time()
segs = s.extract_superpixels(impath)
print(time.time() - start_time)
start_time = time.time()
labels = s.cluster(impath, segs, n_clusters=2, plot=False)
print(time.time() - start_time)
start_time = time.time()
# loop over the unique segment values
# Melt background pixel
background = mode(labels)
background_segment_label = 0
labels = labels.tolist()
for (i, segVal) in enumerate(np.unique(segs)):
    label = labels[i]
    if background == label:
        segs = s.combine_superpixels(segs, segVal, background_segment_label)

labels = [0] + [x for x in labels if x > 0]
unique = np.unique(segs)
print(time.time() - start_time)
# s.plot_graph(segs, impath)

s.plot_segments(impath, segs)
plt.show()
from os import stat
from typing import Tuple
from cmath import inf
from xmlrpc.client import FastMarshaller
from matplotlib import pyplot as plt

from sklearn.cluster import KMeans
from dtw import dtw
import numpy as np
import cv2 as cv
from src.segmentation import segment_border

from src.utils import border_ops, display

class Matcher:
    def __init__(self, original_image: np.array, borders, ksize=31, kmeans=False, n_clusters=5) -> None:
        """
          This class is in charge of finding the best matching pieces in a puzzle.

        Args:
            original_image (np.array): RGB picture of the original image (used to extract
                color data for validating matches)
            borders (list[np.array]): list of border contours for each piece in the puzzle.

            ksize (int, optional): The kernal size for median blur on the original image. Defaults to 61.
            kmeans (bool, optional): Whether or not to use kmeans clustering for denoising of color data. Defaults to False.
            n_clusters (int, optional): The number of clusters to use for kmeans clustering. Defaults to 5.
        """
        self.puzzle = original_image

        # converting borders to shape of (n,2)
        self.border_contours = [border.reshape(-1,2) for border in borders]
        self.border_angles = [border_ops.unroll_border(border) for border in self.border_contours]
        # get_border_segments returns a list of tuples containing the unrolled segment values and the corresponding y,x values
        # for each segment (from the original image)
        self.border_segments = [segment_border.get_border_segments(b_angles, b) for b_angles, b in zip(self.border_angles, self.border_contours)]

        if kmeans:
            assert n_clusters > 0, "ERROR: n_clusters must be greater than 0."
            km_model = KMeans(n_clusters=n_clusters).fit(original_image.reshape(-1, 3))
            centers = np.uint8(km_model.cluster_centers_)
            km_data = centers[km_model.labels_]
            self.denoised_puzzle = km_data.reshape((original_image.shape))
        else: # simple blur instead
            self.denoised_puzzle = cv.medianBlur(original_image, ksize=ksize) # blurred to reduce noise

        self.hsv_puzzle = cv.cvtColor(self.denoised_puzzle, cv.COLOR_RGB2HSV) # for color matching with DTWi

    def get_matches(self, weighting=[1,1], display_borders=False):
        """
        Gets the best matching segments b/t each border and returns a sorted list of tuples containing
        the match score, the piece index, and the piece's contour (coordinate values).

        Args:
            weighting (list[float], optional): The weighting for shape and color matching respectively. So if one of
                    them is set to zero then we just ignore that distance score. Defaults to [1,1] (both equally weighted).
            display_borders (bool, optional): whether or not to display the matched contours. Defaults to False.

        Returns:
            list[float, Tuple[int, int], Tuple[np.array, np.array]]: a list of tuples containing the
                distance score, the piece index, and the pixel positions for their matching segments.
                Sorted by score.
        """
        contours = self.border_contours
        n = len(contours) # Number of pieces
        matches = [] # Sorted list of match_val, border indexes, and match_pixels
        # TODO: Use the folowing to keep track of the best match score for each piece and
        # prevent duplicate pairs that have a worse score.
        # Something like the following format for it would be needed and some recursion to recover
        # previous matches that were overwritten: # REVIEW: is this an NP-Hard problem?
        # segment_best_match_vals = {} # Dictionary of possible matches for each segment
        # {
        #     "border_i - segment_i": {
        #           "match_val": float,
        #           "segment_key": "border_i - segment_i",
        #      }
        # }
        # before setting as

        for i in range(n):
            for j in range(i+1, n): # +1 to prevent match with self
                _, seg_match_val, seg_match_points = self.get_matching_segments(self.border_segments[i],
                                                                                    self.border_segments[j], weighting=weighting)
                if display_borders:
                    # displaying the border contours
                    display.display_border(contours[i], c='b')
                    display.display_border(contours[j], c='b')
                    # displaying the segment of the border contours:
                    display.display_border(seg_match_points[0], c='y')
                    display.display_border(seg_match_points[1], c='y')
                    plt.title("Score: "+str(seg_match_val))
                    plt.show()

                matches.append((seg_match_val, (i,j), seg_match_points))

        matches.sort(key=lambda x: x[0]) # Sort by match_val
        return matches

    def get_matching_segments(self, b1_info:tuple, b2_info:tuple, mse_cutoff=5.0, weighting=[1,1]) -> Tuple[Tuple[int,int], float, Tuple[np.array, np.array]]:
        """
        Gets the best matching segments from two contours. This is done by shape and then
        validated with color.

        Args:
            b1_info (tuple): The list of tuples containing the unrolled segment values and the corresponding
                    y,x values returned from get_border_segments.
            b2_info (tuple): Same as b1_info but for the second border.

            mse_cutoff (float, optional): The MSE cutoff that determines if a segment is a line or not.
                    Defaults to 5.0.
            weighting (list[float], optional): The weighting for shape and color matching respectively. So if one of them
                    is set to zero then we just ignore that distance score. Defaults to [1,1] (both equally weighted).

        Returns:
            Tuple[Tuple[int,int], float]: A tuple containing the match indicies for b1 and b2 respectively
                    and the match value for the best match.
        """
        # Getting the locations of where the jigsaw segments are:
        seg_vals1, seg_points1 = b1_info
        seg_vals2, seg_points2 = b2_info
        # getting poly shape and MSE beforehand to speed up matching by avoiding redundant computations
        # Value from polyshape will be +1 or -1 value depending on if concave or convex
        seg_shapes1 = [border_ops.get_poly_shape(s1, cutoff=0.0)[0] for s1 in seg_vals1] # cutoff is zero because MSE is better at determing linearity
        seg_shapes2 = [border_ops.get_poly_shape(s2, cutoff=0.0)[0] for s2 in seg_vals2]

        seg_mse1 = [border_ops.get_mse(s1) for s1 in seg_points1]
        seg_mse2 = [border_ops.get_mse(s2) for s2 in seg_points2]
        # Getting the best matching segments from the two borders:
        # matches = []
        best_match_val = inf
        best_match_i = (-1,-1)
        for seg1_i, seg1 in enumerate(seg_vals1): # seg_vals is the angles
            shape1 = seg_shapes1[seg1_i]
            mse1 = seg_mse1[seg1_i]
            for seg2_i, seg2 in enumerate(seg_vals2):
                shape2 = seg_shapes2[seg2_i]
                mse2 = seg_mse2[seg2_i]
                # Check to make sure it is not linear and are inverted shapes (convex matching with concave)
                if mse1 > mse_cutoff and mse2 > mse_cutoff and shape1 == -shape2:
                    # Low level shape match first:
                    _, shape_dist_norm = self.match_shape_distance(seg1, -seg2) # Negative to flip the curve so they overlap

                    # Then Low level color match:
                    _, color_dist_norm = self.match_color_distance(seg_points1[seg1_i], seg_points2[seg2_i])

                    # Weighted sum of the two distances:
                    weighted_dist = (shape_dist_norm * weighting[0]) + (color_dist_norm * weighting[1])

                    # matches.append(((seg1_i, seg2_i), weighted_dist)) # the distance and the index of the matching segments

                    if weighted_dist < best_match_val:
                        best_match_i = (seg1_i, seg2_i)
                        best_match_val = weighted_dist

        assert best_match_i != (-1,-1),  "ERROR: no best matching found."
        # matches.sort(key=lambda x: x[1]) # Sort by distance

        return best_match_i, best_match_val, (seg_points1[best_match_i[0]], seg_points2[best_match_i[1]])

    def match_color_distance(self, seg1:np.array, seg2:np.array, step_pattern="symmetric2",
                         distance_only=True, display=False) -> Tuple[float, float]:
        """
        Matching validation based on colors along the border segment.
        The method used here is a cummulative DTW approach (DTWi from
        cs.ucr.edu/~eamonn/Multi-Dimensional_DTW_Journal.pdf).

        A good match with have a normalized distance value of <20

        Args:
            seg1 (np.array): The pixel positions of colors to use (n,2) where y is first and x is second.
            seg2 (np.array): pixel positions of the segment to match with.
            step_pattern (str, optional): The step pattern to use when applying DTW
                (see dtw-python docs for more info). Defaults to "symmetric2".
            distance_only (bool, optional): Only calculate the distance (no backtracking). Defaults to True.
            display (bool, optional): Display threeway and twoway plots. Defaults to False.

        Returns:
            Tuple[float, float]: distance and normalized distance value from DTW, respectively.
        """
        assert not (distance_only and display), 'Cannot display anything if distance_only is also set.'
        assert seg1.shape[-1] == 2 and \
                seg2.shape[-1] == 2, "Passed in segments must be pixel positions for the colors!"
        assert len(seg1.shape) == 2 and len(seg2.shape) == 2, f"Segment shapes must be (n, 2)! Got {seg1.shape} and {seg2.shape}."

        # Extracting the HSV values
        hsv1, _ = border_ops.get_orthoganol_colors(self.hsv_puzzle, seg1) # second return is the yx values themselves
        hsv2, _ = border_ops.get_orthoganol_colors(self.hsv_puzzle, seg2)

        # converting hsv values to normalized form:
        # "For HSV, hue range is [0,179], saturation range is [0,255], and value range is [0,255]" (https://docs.opencv.org/4.x/df/d9d/tutorial_py_colorspaces.html)
        hsv1 = np.array([[h/179, s/255, v/255]for h,s,v in hsv1])
        hsv2 = np.array([[h/179, s/255, v/255]for h,s,v in hsv2])

        # Running DTW on each individual color channel (H, S, and V)
        DTW_h = dtw(hsv1[:,0], hsv2[:,0], step_pattern=step_pattern, keep_internals=display, distance_only=distance_only)
        DTW_s = dtw(hsv1[:,1], hsv2[:,1], step_pattern=step_pattern, keep_internals=display, distance_only=distance_only)
        DTW_v = dtw(hsv1[:,2], hsv2[:,2], step_pattern=step_pattern, keep_internals=display, distance_only=distance_only)

        # Summing all to get average value
        dist = (DTW_h.distance + DTW_s.distance + DTW_v.distance) / 3
        norm_dist = (DTW_h.normalizedDistance + DTW_s.normalizedDistance + DTW_v.normalizedDistance) / 3

        # Displaying all three:
        if display:
            print('Hue')
            DTW_h.plot(type="threeway")
            DTW_h.plot(type="twoway")
            print('Saturation')
            DTW_s.plot(type="threeway")
            DTW_s.plot(type="twoway")

            print('Value')
            DTW_v.plot(type="threeway")
            DTW_v.plot(type="twoway")

        return dist, norm_dist

    @staticmethod
    def match_shape_distance(seg1:np.array, seg2:np.array, step_pattern="symmetric2",
                         distance_only=True, display=False) -> Tuple[float, float]:
        """
        This uses Dynamic Time Warping (DTW) and returns the normalized distance
        value, to determine how well two segments fit with each other.

        A good match here will have a distance value of <0.05

        Note that in this case the normalized distance won't mean much as the values
        are already normalized before dtw.

        Args:
            seg1 (np.array): The unrolled border segment (n,).
            seg2 (np.array): The unrolled border segment to match with.

            step_pattern (str, optional): The step pattern to use when applying DTW
                (see dtw-python docs for more info). Defaults to "symmetric2".
            distance_only (bool, optional): Only calculate the distance (no backtracking). Defaults to True.
            display (bool, optional): Display threeway and twoway plots. Defaults to False.

        Returns:
            Tuple[float, float]: distance and normalized distance value from DTW, respectively.
        """
        assert not (distance_only and display), 'Cannot display anything if distance_only is also set.'
        # assert seg1.shape[0] == seg2.shape[0], 'Segment shapes are not the same'

        # normalizing is needed for DTW to work
        seg1_n = seg1 / np.linalg.norm(seg1)
        seg2_n = seg2 / np.linalg.norm(seg2)

        aligned = dtw(seg1_n, seg2_n,
                      step_pattern=step_pattern,
                      keep_internals=display, # keep internals is needed in order to display
                      distance_only=distance_only)

        if display:
            aligned.plot(type="threeway")
            aligned.plot(type="twoway")
        return aligned.distance, aligned.normalizedDistance

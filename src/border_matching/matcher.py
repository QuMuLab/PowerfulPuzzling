from os import stat
from typing import Tuple
from cmath import inf
from xmlrpc.client import FastMarshaller

from sklearn.cluster import KMeans
from dtw import dtw
import numpy as np
import cv2 as cv
from src.segmentation import segment_border

from src.utils.border_ops import rotate_points, unroll_border, get_poly_shape, get_mse

class Matcher:
    def __init__(self, original_image: np.array, piece_size=400, ksize=61, kmeans=False, n_clusters=5) -> None:
        """
          This class is in charge of finding the best matching pieces in a puzzle.

        Args:
            original_image (np.array): RGB picture of the original image (used to extract 
                color data for validating matches)
            ksize (int, optional): The kernal size for median blur on the original image. Defaults to 61.
            kmeans (bool, optional): Whether or not to use kmeans clustering for denoising of color data. Defaults to False.
            n_clusters (int, optional): The number of clusters to use for kmeans clustering. Defaults to 5.
        """
        self.puzzle = original_image
        # self.clustered_puzzle = original_image # REVIEW: apply clustering for high level color classification?
        
        self.piece_size = piece_size #TODO: how can we dynamically determine this?
        
        if kmeans:
            assert n_clusters > 0, "ERROR: n_clusters must be greater than 0."
            km_model = KMeans(n_clusters=n_clusters).fit(original_image.reshape(-1, 3))
            centers = np.uint8(km_model.cluster_centers_)
            km_data = centers[km_model.labels_]
            self.denoised_puzzle = km_data.reshape((original_image.shape))
        else: # simple blur instead
            self.denoised_puzzle = cv.medianBlur(original_image, ksize=ksize) # blurred to reduce noise
            
        self.hsv_puzzle = cv.cvtColor(self.denoised_puzzle, cv.COLOR_RGB2HSV) # for color matching with DTWi       
        
    def get_matching_pieces(self, contours: np.array) -> list[float, Tuple[int,int], Tuple[np.array, np.array]]:
        """
        Ranks the pieces by how well they match and return their best matching segment.

        Args:
            contours (np.array): the contours for all the borders of each puzzle piece.

        Returns:
            list[float, Tuple[int, int], Tuple[np.array, np.array]]: a list of tuples containing the
                distance score, the piece index, and the pixel positions for their matching segments. 
                Sorted by score.
        """
        n = len(contours) # Number of pieces
        matches = [] # Sorted list of match_val, border indexes, and match_pixels
        for i in range(n):
            for j in range(i+1, n): # +1 to prevent match with self 
                match_val, match_pixels = self.get_matching_segments(contours[i], contours[j])
                matches.append((match_val, (i,j), match_pixels))
                
        matches.sort(key=lambda x: x[0]) # Sort by match_val
        return matches
    
    def get_matching_segments(self, b1:np.array, b2:np.array, mse_cutoff=5.0) -> Tuple[float, Tuple[np.array, np.array]]:
        """
        Gets the best matching segments from two contours. This is done by shape and then 
        validated with color.

        Args:
            b1 (np.array): A border/contour.
            b2 (np.array): The border/contour to match with.
            mse_cutoff (float, optional): The MSE cutoff that determines if a segment is a line or not. 
                    Defaults to 5.0.

        Returns:
            Tuple[float, Tuple[np.array, np.array]]: The match value and the pixel locations for 
                    the matching segments.
        """
        # Unrolling the border by sampling for angles
        b1_angles = unroll_border(b1)
        b2_angles = unroll_border(b2)
        
        # Getting the locations of where the jigsaw segments are:
        seg_is1, seg_vals1, seg_points1 = segment_border.get_border_segments(b1_angles, b1, display_borders=False)
        seg_is2, seg_vals2, seg_points2 = segment_border.get_border_segments(b2_angles, b2, display_borders=False)
        
        # getting poly shape and MSE beforehand to speed up matching by avoiding redundant computations
        # Value from polyshape will be +1 or -1 value depending on if concave or convex
        seg_shapes1 = [get_poly_shape(s1, cutoff=0.0)[0] for s1 in seg_vals1] # cutoff is zero because MSE is better at determing linearity
        seg_shapes2 = [get_poly_shape(s2, cutoff=0.0)[0] for s2 in seg_vals2]

        seg_mse1 = [get_mse(s1) for s1 in seg_points1]
        seg_mse2 = [get_mse(s2) for s2 in seg_points2]
        
        # Getting the best matching segments from the two borders:
        #TODO: expand to include color matching
        best_match_i = (-1, -1) # best match index for left and right border segments
        best_match_val = inf # the distance value
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
                    if shape_dist_norm < best_match_val:
                        best_match_val = shape_dist_norm
                        best_match_i = (seg1_i, seg2_i)
                        
        assert best_match_i != (-1, -1), "ERROR: no best matching found."
        
        # Returning the pixel position of each segment so that it can be highlighted in the image
        best_match_points = (seg_points1[best_match_i[0]], seg_points2[best_match_i[1]])
        
        return best_match_val, best_match_points

    def match_color_distance(self, seg1:np.array, seg2:np.array, step_pattern="symmetric2",
                         distance_only=True, display=False, y_first=True) -> Tuple[float, float]: # TODO: complete this function
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
            y_first (bool, optional): y is the first value in the pixel position. Defaults to True

        Returns:
            Tuple[float, float]: distance and normalized distance value from DTW, respectively.
        """
        assert not (distance_only and display), 'Cannot display anything if distance_only is also set.'
        assert seg1.shape[-1] == 2 and \
                seg2.shape[-1] == 2, "Passed in segments must be pixel positions for the colors!"
        assert len(seg1.shape) == 2 and len(seg2.shape) == 2, f"Segment shapes must be (n, 2)! Got {seg1.shape} and {seg2.shape}."
        
        # Extracting the HSV values
        hsv1 = self.hsv_puzzle[seg1[:, int(y_first)], seg1[:, int(not y_first)]]
        hsv2 = self.hsv_puzzle[seg2[:, int(y_first)], seg2[:, int(not y_first)]]
        
        # Running DTW on each individual color format (H, S, and V)
        # NOTE: unlike shape DTW we don't need to normalize because they will all be along the same scale.
        DTW_h = dtw(hsv1[:,0], hsv2[:,0], step_pattern=step_pattern, keep_internals=display, distance_only=distance_only)
        DTW_s = dtw(hsv1[:,1], hsv2[:,1], step_pattern=step_pattern, keep_internals=display, distance_only=distance_only)
        DTW_v = dtw(hsv1[:,2], hsv2[:,2], step_pattern=step_pattern, keep_internals=display, distance_only=distance_only)
        
        # Summing all to get cumulative value        
        dist = DTW_h.distance + DTW_s.distance + DTW_v.distance
        norm_dist = DTW_h.normalizedDistance + DTW_s.normalizedDistance + DTW_v.normalizedDistance
        
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
            distance_only (bool)

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
        
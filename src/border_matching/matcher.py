from os import stat
from typing import Tuple
from cmath import inf

from sklearn.cluster import KMeans
from dtw import dtw
import numpy as np
import cv2 as cv

from src.utils.border_ops import rotate_points, unroll_border, get_poly_shape

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
        
    def get_matching_pieces(self, contours: np.array) -> Tuple[Tuple[int,int], Tuple[float, float]]:
        """
        Finds two pieces that match with each other given their borders.

        Args:
            contours (np.array): the contours for all the borders of each puzzle piece.

        Returns:
            Tuple[Tuple[int, int], Tuple[float, float]]: The index for the two matching 
                borders, and what rotation (in degrees) needs to be applied for them to 
                match.
        """
        n = len(contours) # number of pieces
        best_match = inf
        best_i = (-1,-1)
        best_rot = (-1.0, -1.0)
        for i in range(n):
            for j in range(i+1, n):
                match_val, match_rot = self.get_matching_segments(contours[i], contours[j])
                
                if best_match < match_val:
                    best_match = match_val
                    best_i = (i, j)
                    best_rot = match_rot
        
        assert best_i != (-1,-1), "ERROR: no best matching found."
        
        return best_i, best_rot
    
    def get_matching_segments(self, b1:np.array, b2:np.array) -> Tuple[float, Tuple[float, float]]:
        """
        Gets the best matching segments from two contours. This is done by shape and then 
        validated with color.

        Args:
            b1 (np.array): A border/contour.
            b2 (np.array): The border/contour to match with.

        Returns:
            Tuple[float, Tuple[float, float]]: The match value and the rotation applied for that 
            optimal match.
        """
        # TODO: iterate through each border by "unrolling"
        # Checking high level features
        #   concave vs convex vs linear
        #   General matching clusters of colors
        # if passed check lower level features (more computational expensive)
        # Unrolling the border by sampling for angles
        b1_angles = unroll_border(b1)
        b2_angles = unroll_border(b2)
        for p1 in range(b1.shape[0]):
            for p2 in range(b2.shape[0]):
                seg1 = b1[p1:p1+self.piece_size]
                seg2 = b2[p2:p2+self.piece_size]
                
                # high level matching by concavity
                shape1 = get_poly_shape(b1_angles[p1:p1+self.piece_size])
                shape2 = get_poly_shape(b2_angles[p2:p2+self.piece_size])
                
                if ((shape1 != 0 and shape2 != 0) and # making sure that neither are flat segments
                    shape1 == -shape2): # making sure that they are inverted shapes (convex matching with concave)
                    # matching shape:
                    # matching color
                    pass
                

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
            # TODO: figure out how to title these (set_title doesn't work...)
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
        
    def determine_colors(self, border_segment:np.array) -> np.array:  # REVIEW: is this necessary?
        """
        High level identification of the colors in the border segment.

        Args:
            border_segment (np.array): [description]

        Returns:
            np.array: [description]
        """
        pass
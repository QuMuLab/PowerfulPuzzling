from typing import Tuple
from cmath import inf

from sklearn.cluster import KMeans
from dtw import dtw
import numpy as np
import cv2 as cv

class Matcher:
    def __init__(self, original_image: np.array, ksize=61) -> None:
        """This class is in charge of 

        Args:
            original_image (np.array): RGB picture of the original image (used to extract 
                color data for validating matches)
            ksize (int, optional): The kernal size for median blur on the original image. Defaults to 61.
        """
        self.puzzle = original_image
        # self.clustered_puzzle = original_image # TODO: apply clustering for high level color classification?
        self.blured_puzzle = cv.medianBlur(original_image, ksize=ksize)
        self.hsv_puzzle = cv.cvtColor(self.blured_puzzle, cv.COLOR_RGB2HSV) # for color matching with DTWi
        
        
    def get_matching_pieces(self, contours: np.array) -> Tuple[Tuple[int,int], Tuple[float, float]]:
        """Finds two pieces that match with each other given their borders.

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
        for i in  range(n):
            for j in range(i+1, n):
                match_val, match_rot = self.get_matching_segments(contours[i], contours[j])
                
                if best_match < match_val:
                    best_match = match_val
                    best_i = (i, j)
                    best_rot = match_rot
        
        assert best_i != (-1,-1), "Best index cannot be negative"
        
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
        assert len(seg1.shape) == 2 and len(seg2.shape) == 2, "Segment shape must be (n, 2)!"
        
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

    def match_shape_distance(self, seg1:np.array, seg2:np.array, step_pattern="symmetric2", 
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
    
    def determine_shape(border_segment:np.array, cutoff=0.01) -> Tuple[int, Tuple[float]]:
        """
        High-level determination of the shape of an unrolled border segment using np.polyfit.
        Possible shapes are:
             1) Concave (\\\/)\n
             0) Linear (--)\n
            -1) Convex (/\\\)\n
        
        This is determined by looking at the constant in a 2nd order polynomial fitted to the 
        points and seeing if it is - (convex), + (concave), or ~0 (linear).

        Args:
            border_segment (np.array): The unrolled border segment shape must be (x,) 
                    where x is the number of points making up the border.
            cutoff (float, optional): The cutoff for classification (e.g.: a cutoff of 1 
                    means linear is anything between -1 and 1 coeff). Defaults to 0.0 
                    (no linear aspect).
            
        Returns:
            Tuple[int, Tuple[float]]: The determined shape (0-2) and the coefficents for the 
                    polynomial.
        
        References:
            - np.polyFit: https://numpy.org/doc/stable/reference/generated/numpy.polyfit.html
        """
        # poly is a 3-tuple of the coeffs a,b, and c: (a*x^2 + b*x + c)
        poly = np.polyfit(x=border_segment, y=list(range(border_segment.shape[0]), deg=2))
             
        if poly[0] > cutoff:
            shape = 1
        elif poly[0] < cutoff:
            shape = -1
        else:
            shape = 0
        
        return shape, poly
    
    def determine_colors(self, border_segment:np.array) -> np.array:  # REVIEW: is this necessary?
        """
        High level identification of the colors in the border segment.

        Args:
            border_segment (np.array): [description]

        Returns:
            np.array: [description]
        """
        pass
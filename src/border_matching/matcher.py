from typing import Tuple
import numpy as np

class Matcher:
    def __init__(self, original_image: np.array) -> None:
        """This class is in charge of 

        Args:
            original_image (np.array): RGB picture of the original image (used to extract 
                color data for validating matches)
        """
        self.puzzle = original_image
        
    def find_matching(self, contours: np.array) -> tuple[int, int, float, float]:
        """Finds two pieces that match with each other given their borders.

        Args:
            contours (np.array): the contours for all the borders of each piece

        Returns:
            tuple[int, int, float, float]: The index for the two matching borders, and 
                what rotation (in degrees) needs to be applied for them to match.
        """
        n = len(contours) # number of pieces
        probable_matches = np.empty((n, n, 1)) # only half will be filled (symetrical)
        for i in  range(n):
            for j in range(i+1, n):
                probable_matches[i,j] = self.match_likelihood(contours[i], contours[j])                

    def __match_distance(self, seg1:np.array, seg2:np.array, step_pattern="symmetric2") -> float:
        """
        This uses Dynamic Time Warping (DTW) and returns the normalized distance 
        value, to determine how well two segments fit with each other.
        
        Args:
            seg1 (np.array): The border segment.
            seg2 (np.array): The border segment to match with.
            step_pattern (str, optional): The step pattern to use when applying DTW 
                (see dtw-python docs for more info). Defaults to "symmetric2".

        Returns:
            float: Distance value from DTW.
        """
        pass
    
    def __determine_shape(border_segment:np.array) -> tuple(int, [float]):
        """
        High-level determination of the shape of a border segment using np.polyfit.
        Possible shapes are:
            - Concave (\\\/)
            - Convex (/\\\)
            - Linear (--)
        
        This is determined by looking at the constant in a 2nd order polygon fitted to the 
        points and seeing if it is - (convex), + (concave), or ~0 (linear).

        Args:
            border_segment ([type]): The segment to classify.
            
        Returns:
            (int, [float]): The coefficeints for the polygon 
        
        References:
            - np.polyFit: https://numpy.org/doc/stable/reference/generated/numpy.polyfit.html#numpy-polyfit
        """
        
    
    def __get_line(self) -> np.array:
        pass
    def __get_MSE(self) -> float:
        pass
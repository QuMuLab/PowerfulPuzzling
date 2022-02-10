from typing import Tuple, Iterable
import numpy as np
from dtw import dtw
from sklearn.utils import compute_sample_weight

class Matcher:
    def __init__(self, original_image: np.array) -> None:
        """This class is in charge of 

        Args:
            original_image (np.array): RGB picture of the original image (used to extract 
                color data for validating matches)
        """
        self.puzzle = original_image
        
    def find_matching(self, contours: np.array) -> Tuple[int, int, float, float]:
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
            float: Normalized distance value from DTW.
        """
        pass
    
    def __determine_shape(border_segment:np.array, cutoff=0.01) -> Tuple[int, Tuple[float]]:
        """
        High-level determination of the shape of an unrolled border segment using np.polyfit.
        Possible shapes are:            
            0 - Concave (\\\/)\n
            1 - Convex (/\\\)\n
            2 - Linear (--)
        
        This is determined by looking at the constant in a 2nd order polynomial fitted to the 
        points and seeing if it is - (convex), + (concave), or ~0 (linear).

        Args:
            border_segment (np.array): The unrolled border segment shape must be (x,) 
                    where x is the number of points.
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
            shape = 0
        elif poly[0] < cutoff:
            shape = 1
        else:
            shape = 2
        
        return shape, poly
    
    def __get_line(self, coeff:Tuple[float], a:int, b:int, steps=1) -> np.array:
        """
        Returns a list of points representing the polynomial function by the coefficients 
        passed in.

        Args:
            coeff (Tuple[float]): The coefficients of the polynomial.
            a (int): Starting range.
            b (int): End range.
            steps (int, optional): Steps for iterating through the range.

        Returns:
            np.array: The list of values from a to b outputted by the polynomial function.
        """
        out = np.array([])
        order = len(coeff) - 1 # the polynomial order
        for x in range(a, b, steps):
            y = 0
            for i, c in enumerate(coeff):
                y += c*x**(order - i)
            out.append(y)
            
        return out
    
    
    def __rotate_points(points:np.array, n=1, inplace=True) -> np.array:
        """
        Rotates 2D lists of points by n degrees using a rotation matrix.

        Args:
            points (np.array): list of 2D points to be rotated.
            n (int, optional): How many degrees to rotate points by. Defaults to 1.
            inplace (bool, optional): Whether or not to rotate around points center 
                    to maintain position instead of around origin. Defaults to True.

        Returns:
            np.array: The new list of points rotated by n degrees
            
        Reference:
            https://en.wikipedia.org/wiki/Rotation_matrix
        """
        # creating rotation matrix
        rad = np.radians(n) # needed because np.cos only takes radians as inputs
        cos_0 = np.cos(rad)
        sin_0 = np.sin(rad)
        rot_mat = np.array([[cos_0, -sin_0],
                            [sin_0,  cos_0]])
        
        if inplace:
            # getting centre point
            max_x, min_x = max(points[:,0]), min(points[:,0])
            max_y, min_y = max(points[:,1]), min(points[:,1])
            center = [min_x + ((max_x - min_x) / 2),
                      min_y + ((max_y - min_y) / 2)]
            
            centered = points - center # translate to origin
            rotated = centered@rot_mat # performing rotation
            rotated += center # translate back
        else:
            rotated = points@rot_mat
        return rotated
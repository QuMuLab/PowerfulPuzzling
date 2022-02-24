"""
This script just contains helper functions that might be useful for border operations
    - get_line
    - rotate_points
"""
from typing import Tuple
import numpy as np

def get_line(coeff:Tuple[float], a:int, b:int, steps=1) -> np.array:
    """
    Returns a list of points representing the n order polynomial function by the n+1
    coefficients passed in.

    Args:
        `coeff` (Tuple[float]): The coefficients of the polynomial.
        `a` (int): Starting range.
        `b` (int): End range.
        `steps` (int, optional): Steps for iterating through the range.

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

def points2img(points:np.array) -> np.array:
    """
    Converts a 2d list of points to a B&W image indicating locations of 
    points with the value 1 (True).

    Args:
        points (np.array): The 2D list of points shape=(n,2).

    Returns:
        np.array: The image representing the points (0=no point, 1=point).
    """
    # getting bounding rect:
    max_x, min_x = max(points[:,0]), min(points[:,0])
    max_y, min_y = max(points[:,1]), min(points[:,1])
    h, w = max_y - min_y, max_x - min_x
    
    # creating np.array to store image:
    img = np.zeros((w+1,h+1,), dtype=bool)
    for p in points:
        x = p[0] - min_x
        y = p[1] - min_y
        img[x,y] = 1
    return img

def rotate_points(points:np.array, deg=1, inplace=True) -> np.array:
    """
    Rotates 2D lists of points by `deg` degrees using a rotation matrix.

    Args:
        `points` (np.array): list of 2D points to be rotated.
        `deg` (int, optional): How many degrees to rotate points by. Defaults to 1.
        `inplace` (bool, optional): Whether or not to rotate around points center
                to maintain position instead of around origin. Defaults to True.

    Returns:
        np.array: The new list of points rotated by `deg` degrees
        
    Reference:
        https://en.wikipedia.org/wiki/Rotation_matrix
    """
    if deg == 0 or deg%360 == 0: return points
    
    # Creating rotation matrix
    rad = np.radians(deg) # needed because np.cos only takes radians as inputs
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
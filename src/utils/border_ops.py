"""
This script just contains helper functions that might be useful for border operations
    - get_line
    - rotate_points
"""
from typing import Tuple
import numpy as np
from cmath import inf
import matplotlib.pyplot as plt

def display_border(border, **kwargs):
    n = border.shape[0]
    b = border.reshape(n, 2)
    plt.scatter(b[:,0], b[:,1], **kwargs)
    
def display_std_ur_border(ur_b, std_multiplier=0.25):
    """
    This function displays the unrolled border with the following:
        standard deviation: red
        standard deviation * std_multiplier: yellow
        mean: blue
        min: green
        max: green

    Args:
        ur_b (np.array): The unrolled border.
        std_multiplier (float, optional): The threshold for the standard deviation. 
                Defaults to 0.25.
    """
    plt.figure(figsize=(20,3))
    # gettin min mean max and std:
    mean = np.mean(ur_b)
    std = np.std(ur_b)
    max = np.max(ur_b)
    min = np.min(ur_b)
    std_multiplied = std*std_multiplier
    
    print("std threshold:", std_multiplied)
    print("mean+std:", mean + std_multiplied)
    
    plt.plot(ur_b)
    plt.plot((0, len(ur_b)), (mean + std, mean + std), c='r')
    plt.plot((0, len(ur_b)), (mean - std, mean - std), c='r')

    plt.plot((0, len(ur_b)), (mean + std_multiplied, mean + std_multiplied), c='y')
    plt.plot((0, len(ur_b)), (mean - std_multiplied, mean - std_multiplied), c='y')

    plt.plot((0, len(ur_b)), (mean,mean), c='b')

    plt.plot((0, len(ur_b)), (max,max), c='g')
    plt.plot((0, len(ur_b)), (min,min), c='g')
    plt.xticks(np.arange(0, len(ur_b), 5))

def get_poly_shape(border_segment:np.array, cutoff=0.015) -> Tuple[int, Tuple[float]]:
    """
    High-level determination of the shape of an border segment using np.polyfit.
    
    NOTE: The border must be the unrolled border
    
    Possible shapes are:
            1) Concave (\\\/)\n
            0) Linear (--)\n
           -1) Convex (/\\\)\n
    
    This is determined by looking at the constant in a 2nd order polynomial fitted to the 
    points and seeing if it is - (convex), + (concave), or ~0 (linear).
    
    The cutoff is used to determine if the shape is linear or not. Its default is 0.01 
    which was determined to work with a sampling rate of 50 (from the unrolling function).

    Args:
        border_segment (np.array): The border segment shape must be (x,) 
                where x is the number of points making up the border.
        cutoff (float, optional): The cutoff for classification (e.g.: a cutoff of 1 
                means linear is anything between -1 and 1 coeff). Defaults to 0.0 
                (no linear aspect).
        
    Returns:
        Tuple[int, Tuple[float]]: The determined shape (1,0,-1) and the coefficents for the 
                polynomial.
    
    References:
        - np.polyFit: https://numpy.org/doc/stable/reference/generated/numpy.polyfit.html
    """
    assert len(border_segment.shape) == 1, "Passed in border must be unrolled border!"
    
    # poly is a 3-tuple of the coeffs a,b, and c: (a*x^2 + b*x + c)
    poly = np.polyfit(x=list(range(border_segment.shape[0])), y=border_segment, deg=2)
    
    if abs(poly[0]) < cutoff:
        shape = 0
    elif poly[0] <= -cutoff:
        shape = -1
    else: # poly[0] > cutoff
        shape = 1
    
    return shape, poly

def unroll_border(brdr:np.array, sampling_rate=25) -> np.array:
    """
    Function to unroll a border's geometry by sampling points on the border and determining 
    the angle of deviation.
    
        Angle determination is done by utilizing the Law of cosines for SSS case to determine angle 0'
        Then using slopes of lines formed by P1-P2 and P3-P2 to determine direction.
            a
        P1 - - - P2 - - - -
                θ  \  θ'  b
            c       \
                    P3
        Angle θ is:
            cos^-1((a^2 + b^2 - c^2) / 2ab)
        Which we use to get θ' (the deviation from main line/heading):
            θ' = 180 - θ
        
        We also need an adjustment term for the next step of determining direction.
        This is because by the nature of arccos, if angle is greater than 90 deg 
        then the sign will flip so this ensures that it stays the same sign:
            adj = 90 - θ'
            90 - adj = 180 - θ
            adj = θ - 90
        
        Now we can determine if we are going left or right with the slope of the 
        lines of P1-P2 and P2-P3 and the adj term:
            sign(((m1 - m2) / (1 + m1*m2)) * adj)
        
        See more detail and example here: https://www.desmos.com/calculator/uo4dk85igo

    Args:
        brdr (np.array): The border to unroll
        sampling_rate (int, optional): How often to sample points for angle. Defaults to 25.

    Returns:
        np.array: the Array of angles representing the unrolled border.
    """
    assert brdr.shape[-1] == 2, "Passed in border must be pixel positions!"
    assert len(brdr.shape) == 2, f"Segment shapes must be (n, 2)! Got {brdr.shape}."
    
    angles = [] #TODO: optimize this by preallocating
    with np.errstate(divide='ignore', invalid='ignore'):
        for i in range(0, brdr.shape[0]-sampling_rate, sampling_rate): # TODO: overlapping?
            p1 = brdr[i]
            p2 = brdr[i+sampling_rate//2]
            p3 = brdr[i+sampling_rate]
            
            # Calculating euclidian distances (L2 norm):
            a = np.linalg.norm(p1-p2)
            b = np.linalg.norm(p2-p3)
            c = np.linalg.norm(p3-p1)
            
            # Using law of cosines to get angle θ in radians
            angle = np.arccos((a**2 + b**2 - c**2) / (-2*a*b)) 
            
            # Determining if right or left turn (assuming clockwise rotation):
            m1 = (p2[1] - p1[1]) / (p2[0] - p1[0])
            m2 = (p3[1] - p2[1]) / (p3[0] - p2[0])
            
            if abs(m1)!=inf and abs(m2)!=inf and m1!=0 and m2!=0: # ignoring sign adjustment when perfectly horizontal or vertical
                # 1.57079632679 ~ π/2 = 90 deg
                adj = angle - np.pi/2
                # Theoretically 0 will never happen (b/c pi is irrational) but just to make sure:
                if adj == 0 : adj = 1
                sgn = np.sign(((m1 - m2) / (1 + m1*m2)) * adj)
                angle *= sgn
            angles.append(angle)
    return np.array(angles)

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
    out = []
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

#Alternate border unrolling: # TODO: delete when testing is done.

# rot = rotate_points(b3[:,0])
# obs = b3[:,0][:,0]

# # %%
# bimg = points2img(b3[:,0])

#border unrolling

# # n = num of observations:
# n = 4 # max is 360 -> observe for each 1 deg rotation
# step = 360//n
# sides = []
# for i in range(0, 360, step):
#     pts = np.array(rotate_points(b3[:,0], deg=i), dtype=int)
#     pt_img = points2img(pts)
#     unrolled = []
#     for j in range(pt_img.shape[0]):
#         obs_ps = np.where(pt_img[j] == 1)[0]
#         if obs_ps.shape[0] > 0:
#             unrolled.append(obs_ps[0])
#     sides.append(unrolled)
    
# # %% displaying each side:
# curr = 0
# for i in range(n):
#     l = len(sides[i])
#     plt.scatter(list(range(curr, l+curr)), sides[i])
#     curr += l
    
# plt.show()
# # %%
# brdr = []
# for i in sides:
#     for j in i:
#         brdr.append(j)
# plt.plot(brdr)
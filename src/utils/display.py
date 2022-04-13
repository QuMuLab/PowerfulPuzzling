from typing import Tuple
from matplotlib.style import use
import numpy as np
from cmath import inf
import matplotlib.pyplot as plt

def display_border(border, **kwargs):
    if len(border.shape) != 2:
        n = border.shape[0]
        b = border.reshape(n, 2)
    else:
        b = border
    plt.scatter(b[:,0], b[:,1], **kwargs)

def display_std_ur_border(ur_b, std_multiplier=0.25, use_threshold=True, threshold=0.1040115024073753):
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
        use_threshold (bool, optional): Whether to use the threshold. Defaults to True.
        threshold (float, optional): The threshold for what determines a line point.
    """
    plt.figure(figsize=(20,3))
    # gettin min mean max and std:
    mean = np.mean(ur_b)
    std = np.std(ur_b)
    max = np.max(ur_b)
    min = np.min(ur_b)
    if use_threshold:
        std_multiplied = threshold
        mean = 0
    else:
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
    
def display_border_points(b, ur_b, sampling_rate=25, threshold=0.1040115024073753):
    display_border(b)
    
    for i in range(len(b)):
        p = b[i]
        
        ur_i = i // sampling_rate
        if i % sampling_rate == 0:        
            ur_p = ur_b[ur_i-1]
            if ur_p > threshold:
                plt.scatter(p[0], p[1], c='y')
            elif ur_p < -threshold:
                plt.scatter(p[0], p[1], c='y')
            else:
                plt.scatter(p[0], p[1], c='r')  
            
            if ur_i % 10 == 0:
                plt.text(p[0], p[1], str(ur_i))

def display_border_segments(b, ur_b, segment_indices, sampling_rate=25):
    for l_i, r_i in segment_indices:
        i = r_i * sampling_rate # should already be within the bounds of a border
        r_p = b[i]
        
        i = l_i * sampling_rate
        l_p = b[i]
        
        # Drawing the segment b/t the left and right line points:
        if l_i >= r_i: # should always be true unless at the edge of the array
            for i in range(r_i, l_i+1):
                i = i * sampling_rate
                p = b[i]
                plt.scatter(p[0], p[1], 70, c='g', marker='o', alpha=0.7)
        else: # if l_i < r_i then we have to wrap around the array
            for i in range(r_i, len(ur_b)):
                i = i * sampling_rate
                p = b[i]
                plt.scatter(p[0], p[1], 70, c='g', marker='o', alpha=0.7)
                
            for i in range(0, l_i):
                i = i * sampling_rate
                p = b[i]
                plt.scatter(p[0], p[1], 70, c='g', marker='o', alpha=0.7)
        
        plt.scatter(l_p[0], l_p[1], 500, c='b', marker='x')
        plt.scatter(r_p[0], r_p[1], 500, c='r', marker='+')

"""
This script contains all necessary functions to find the border segments that contain actual 
jigsaw parts.

"""

from typing import Tuple
from src.utils import border_ops
import matplotlib.pyplot as plt
import numpy as np
from scipy.signal import find_peaks_cwt

def get_border_segments(ur_b:np.array, b=None, sampling_rate=25, display_borders=False,
                        threshold=0.1040115024073753, gamma=0.75, peak_width=2) -> Tuple[list, list]:
    """
    This function finds the border segments that contain the jigsaw portions. This is done 
    by iterating through the unrolled border and keeping track of the ratio of line points 
    (~0 deg angles) to non-line points.
    
    The resulting array of ratios will have peaks right at the points of the jigsaw and is 
    where a cut can be made at the nearest line points to the left and right of it.
    
    Args:
        ur_b (np.array): The unrolled border.
        sampling_rate (int, optional): The sampling rate for the unrolling. Defaults to 25.
        
        b (np.array, optional): The true border as a list of x,y points (used for display 
                purposes). Defaults to None.
        display_borders (bool, optional): Whether or not to display the border with its 
                segments and the plots for the unrolled border line/non-line classification 
                and ratios. Defaults to False.
        
        threshold (float, optional): The threshold value (in radians to use to classify lines 
                from non lines. Defaults to 0.1040115024073753.
        gamma (float, optional): The gamma value to use for the ratio function. This is the 
                forgetting factor as we travel along the unrolled border, so the higher this 
                is the more points that are further away impact the ratio (will be more 
                stable if higher). Must be less than 1.0. Defaults to 0.75.
                
        peak_width (int, optional): The width of the peaks to identify for the ratio plot. 
                Defaults to 2.
                
    Returns:
        list(tuple(int,int)): A list of tuples of the start and end index positions for the segments.
        list(np.array): The actual unrolled border values for each segment.
    """
    # If display is set then there must be a border passed in:
    assert not(display_borders and b is None), "display_borders is set to True but no border is passed in."
    # Getting ratios:
    ratios = get_ratios(ur_b, threshold=threshold, gamma=gamma)
    
    # Finding peaks of the ratios plot using the scipy find_peaks_cwt function
    peaks = find_peaks_cwt(ratios, widths=np.ones(len(ratios))*peak_width)
    
    segment_indices, segment_values = get_segment_indices(ur_b, peaks, threshold=threshold, extra_width=2)
        
    if display_borders:
        # Displaying the border with the segments:
        display_border_points(b, ur_b, sampling_rate=sampling_rate, threshold=threshold)
        display_border_segments(b, ur_b, segment_indices, sampling_rate=sampling_rate)
        
        # Displaying the ratios plot:
        plt.figure(figsize=(10,4))
        plt.plot(ratios)
        plt.title('RATIOS')
        plt.plot(peaks, ratios[peaks], 'x')
        plt.xticks(np.arange(0, len(ur_b), 5))
        plt.show()
    
    return segment_indices, segment_values
 
def get_ratios(ur_b:np.array,threshold=0.104, gamma=0.75) -> np.array:
    """
    Gets the ratios along the unrolled border. This is done by iterating through the unrolled 
    border and applying the following ratio formula:

        ratio = (num_new_line_points + num_old_line_points * gamma) / 
                (num_new_non_line_points + num_old_non_line_points * gamma)
                
        Where `gamma` is our forgetting factor, and line_points are points in the unrolled 
        border that are close enough to zero (as determined by the threshold).
    

    Args:
        ur_b (np.array): The unrolled border.
        threshold (float, optional): Threshold for what determines a line point. Defaults to 
                0.104.
        gamma (float, optional): The gamma value to use for the ratio function. This is the 
                forgetting factor as we travel along the unrolled border, so the higher this 
                is the more points that are further away impact the ratio (will be more 
                stable if higher). Must be less than 1.0. Defaults to 0.75.

    Returns:
        np.array: A 1D array containing the ratios for each iteration along the unrolled border.
    """
    ur_len = len(ur_b)
    num_line_points = 0
    num_non_line_points = 0
    ratios = []
    
    for ur_i in range(ur_len + 10): # +10 to get any segments at the start and end
        # if larger than ur_len then we use modulo to get the correct index:
        if ur_i >= ur_len: ur_i = ur_i % ur_len
        p = ur_b[ur_i]
        
        # Checking to see if the current point is a line segment:
        if (p < threshold) and (p > -threshold): # if within the threshold then it is a line point
            num_line_points = 1 + num_line_points*gamma
            num_non_line_points *= gamma
        else:
            num_non_line_points = 1 + num_non_line_points*gamma
            num_line_points *= gamma
        
        # if any number is zero then just ignore and continue to avoid division by zero:
        # this will usually only happen at the start.
        if num_non_line_points == 0 or num_line_points == 0: continue
        
        # calculating the ratio and adding to array:
        ratios.append(num_non_line_points / num_line_points)
    
    return np.array(ratios)

def get_segment_indices(ur_b:np.array, peaks:np.array, threshold=0.104, extra_width=2) -> Tuple[list, list]:
    """
    Gets the start and end of the segments along the unrolled border given the peaks.

    Args:
        ur_b (np.array): The unrolled border.
        peaks (np.array): The peaks from the ratios along the unrolled border.
        
        threshold (float, optional): The threshold used to classify line vs nonline points. 
                Defaults to 0.104.
        extra_width (int, optional): Extra padding for the segment to make it larger. 
                Defaults to 2.
                
    Returns:
        list(tuple(int,int)): A list of tuples of the start and end index positions for the segments.
        list(np.array): The actual unrolled border values for each segment.
    """
    # Getting the corresponding left and right indexes for the peaks:
    # these left and right indexes are the indexes of the left and right of the jigsaw and 
    # are found by finding the nearest line point to the left and right of the jigsaw node with some extra width 
    # to minimize effect of noise.
    segment_indices = []
    segment_values = []
    for peak in peaks:
        # if larger than the unrolled border length then we use modulo to get the correct index:
        peak = peak % len(ur_b) if peak >= len(ur_b) else peak
        
        # Getting closest left and right line points to the peak:
        l_i = -1
        for ur_i in range(peak, len(ur_b)):
            p = ur_b[ur_i]
            if (p < threshold) and (p > -threshold): # Within the threshold == line
                l_i = ur_i + extra_width
                break
        
        r_i = -1
        for ur_i in range(peak, 0, -1):
            p = ur_b[ur_i]
            if (p < threshold) and (p > -threshold): # Within the threshold == line
                r_i = ur_i - extra_width
                break
            
        # if none was found then we roll over the end of the array. This is to capture those 
        # jigsaw nodes that are on the end of the border array.
        if l_i == -1:
            for ur_i in range(0, peak):
                p = ur_b[ur_i]
                if (p < threshold) and (p > -threshold): # within the threshold == line
                    l_i = ur_i + extra_width
                    break
        if r_i == -1:
            for ur_i in range(len(ur_b)-1, peak, -1):
                p = ur_b[ur_i]
                if (p < threshold) and (p > -threshold): # Within the threshold == line
                    r_i = ur_i - extra_width
                    break
        
        # check to make sure the extra width doesnt cause the left or right to be out of bounds:
        l_i = l_i % len(ur_b) if l_i >= len(ur_b) else l_i
        r_i = r_i % len(ur_b) if r_i >= len(ur_b) else r_i
        
        # appending to the list of segment indexes:
        segment_indices.append((l_i, r_i))
        
        # Getting the actual segment values:
        segment_val = []
        if l_i >= r_i: # should always be true unless at the edge of the array
            for i in range(r_i, l_i+1):
                segment_val.append(ur_b[i])
        else: # if l_i < r_i then we have to wrap around the array
            for i in range(r_i, len(ur_b)):
                segment_val.append(ur_b[i])
                
            for i in range(0, l_i):
                segment_val.append(ur_b[i])
                
        segment_values.append(np.array(segment_val))
    
    return segment_indices, segment_values

def display_border_points(b, ur_b, sampling_rate=25, threshold=0.1040115024073753):
    border_ops.display_border(b)
    
    for i in range(len(b)):
        p = b[i][0]
        
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
        i = r_i * sampling_rate % len(b)
        r_p = b[i][0]
        
        i = l_i * sampling_rate % len(b)
        l_p = b[i][0]
        
        # Drawing the segment b/t the left and right line points:
        if l_i >= r_i: # should always be true unless at the edge of the array
            for i in range(r_i, l_i+1):
                i = i * sampling_rate % len(b)
                p = b[i][0]
                plt.scatter(p[0], p[1], 70, c='g', marker='o', alpha=0.7)
        else: # if l_i < r_i then we have to wrap around the array
            for i in range(r_i, len(ur_b)):
                i = i * sampling_rate % len(b)
                p = b[i][0]
                plt.scatter(p[0], p[1], 70, c='g', marker='o', alpha=0.7)
                
            for i in range(0, l_i):
                i = i * sampling_rate % len(b)
                p = b[i][0]
                plt.scatter(p[0], p[1], 70, c='g', marker='o', alpha=0.7)
        
        plt.scatter(l_p[0], l_p[1], 500, c='b', marker='x')
        plt.scatter(r_p[0], r_p[1], 500, c='r', marker='+')

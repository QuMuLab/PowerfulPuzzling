"""This is where we will call the functions from the powerful pluzzling algo"""
from cmath import inf
from tkinter import E
from turtle import color, shape

from cv2 import threshold
from src.app import get_hint, complete_puzzle
from src.border_matching import Matcher
from src.segmentation.FIXME import get_image_and_border
from src.utils import border_ops
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle
import numpy as np
from typing import Tuple
import cv2 as cv
import math
from dtw import dtw, rabinerJuangStepPattern
from scipy.signal import general_gaussian, fftconvolve, find_peaks_cwt, argrelmax

def display_border(border, **kwargs):
    n = border.shape[0]
    b = border.reshape(n, 2)
    plt.scatter(b[:,0], b[:,1], **kwargs)

def display_border_points(b, ur_b, use_std=False, std_multiplied=0.09029853870603746, 
                          mean=0.005102611534700069,  threshold=0.09540115024073753): # NOTE: +-0.09540115024073753 seems to be the best for identifying straight lines
    display_border(b)
    # using std
    if use_std:
        for i in range(len(b)):
            p = b[i][0]
            
            ur_i = i // sampling_rate
            if i % sampling_rate == 0:        
                ur_p = ur_b[ur_i-1]
                if ur_p > mean + std_multiplied:
                    plt.scatter(p[0], p[1], c='y')
                elif ur_p < mean - std_multiplied:
                    plt.scatter(p[0], p[1], c='y')
                else:
                    plt.scatter(p[0], p[1], c='r')
                
                if ur_i % 10 == 0:
                    plt.text(p[0], p[1], str(ur_i))
    # using a fixed threshold to identify the line points.
    else:
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

def display_unrolled_border(ur_b, std_multiplier=0.25):
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
    plt.figure()
    
img, borders = get_image_and_border('dataset\\starry_night\\edge_case.jpg')
img_matcher = Matcher(img, kmeans=False)

# Pieces 0 and 2 can connect on one side:
b1 = borders[2]#[0]
b2 = borders[2]
sampling_rate = 25
ur_b1 = border_ops.unroll_border(b1[:,0], sampling_rate=sampling_rate)

# Displaying the border itself

# TODO: use std to partition the border into segments
# red points are line segments (within the std)
# segmenting the line segments leaves behind the jigsaw nodes!
THRESHOLD = 0.1040115024073753
gamma = 0.75 # must be less than 1.0
num_line_points = 0
num_non_line_points = 0 # starting off with 1 to avoid division by 0
ratios = []
for ur_i in range(len(ur_b1)):
    p = ur_b1[ur_i]
    
    # Checking to see if the current point is a line segment:
    if (p < THRESHOLD) and (p > -THRESHOLD): # if within the std threshold
        num_line_points = 1 + num_line_points*gamma
        num_non_line_points *= gamma
    else:
        num_non_line_points = 1 + num_non_line_points*gamma
        num_line_points *= gamma
    
    # if any number is zero we just ignore and continue
    if num_non_line_points == 0 or num_line_points == 0: continue
    
    # checking ratio to see if we should make a cut.
    ratio = num_non_line_points/num_line_points
    ratios.append(ratio)

# Rolling over again to get the final ratio:
for ur_i in range(10):
    p = ur_b1[ur_i]
    
    # Checking to see if the current point is a line segment:
    if (p < THRESHOLD) and (p > -THRESHOLD): # if within the std threshold
        num_line_points = 1 + num_line_points*gamma
        num_non_line_points *= gamma
    else:
        num_non_line_points = 1 + num_non_line_points*gamma
        num_line_points *= gamma
    
    # if any number is zero we just ignore and continue
    if num_non_line_points == 0 or num_line_points == 0: continue
    
    # checking ratio to see if we should make a cut.
    ratio = num_non_line_points/num_line_points
    ratios.append(ratio)

plt.figure(figsize=(10,3))
# finding peaks of the ratios plot using the scipy find_peaks_cwt function
r = np.array(ratios)
peaks = find_peaks_cwt(r, widths=np.ones(len(r))*2)

# Getting rid of peaks below ratio of 5:
# peaks = [p for p in peaks if r[p] > 5]

# plotting the rest of the ratios
plt.plot(r)
plt.title('RATIOS')
plt.plot(peaks, r[peaks], 'x')
plt.xticks(np.arange(0, len(ur_b1), 5))

# plotting the positions of the peaks along the border:
plt.figure()
display_border_points(b1, ur_b1)
        
# Plotting the positions of the peaks along the border:
extra_width = 2
for peak in peaks:
    # converting to index in ur_b1 by taking modulus
    peak %= len(ur_b1)
    
    # Getting closest left and right line points to the peak:
    l_i = -1
    for ur_i in range(peak, len(ur_b1)):
        p = ur_b1[ur_i]
        if (p < THRESHOLD) and (p > -THRESHOLD): # Within the threshold == line
            l_i = ur_i+extra_width
            break
    
    r_i = -1
    for ur_i in range(peak, 0, -1):
        p = ur_b1[ur_i]
        if (p < THRESHOLD) and (p > -THRESHOLD): # Within the threshold == line
            r_i = ur_i-extra_width
            break
        
    # Looping over if no left or right line point was found:
    if l_i == -1:
        for ur_i in range(0, peak):
            p = ur_b1[ur_i]
            if (p < THRESHOLD) and (p > -THRESHOLD): # within the threshold == line
                l_i = ur_i+extra_width
                break
    if r_i == -1:
        for ur_i in range(len(ur_b1)-1, peak, -1):
            p = ur_b1[ur_i]
            if (p < THRESHOLD) and (p > -THRESHOLD): # Within the threshold == line
                r_i = ur_i-extra_width
                break
    
    print(l_i, r_i)
    # Making sure they are within the border range:
    l_i %= len(ur_b1)
    r_i %= len(ur_b1)
    
    # Displaying peak and its left and right line points:
    # Converting peak index to border point index:
    i = peak * sampling_rate % len(b1)
    peak_p = b1[i][0]
    
    i = r_i * sampling_rate % len(b1)
    r_p = b1[i][0]
    
    i = l_i * sampling_rate % len(b1)
    l_p = b1[i][0]
    
    # Drawing the segment b/t the left and right line points:
    if l_i >= r_i: # should always be true unless at the edge of the array
        for i in range(r_i, l_i+1):
            i = i * sampling_rate % len(b1)
            p = b1[i][0]
            plt.scatter(p[0], p[1], 70, c='g', marker='o', alpha=0.7)
    else:
        print('WARNING: l_i < r_i', l_i, r_i)
        for i in range(l_i, -1, -1):
            i = i * sampling_rate % len(b1)
            p = b1[i][0]
            plt.scatter(p[0], p[1], 70, c='g', marker='o', alpha=0.7)
            
        for i in range(r_i, len(ur_b1)+1):
            i = i * sampling_rate % len(b1)
            p = b1[i][0]
            plt.scatter(p[0], p[1], 70, c='g', marker='o', alpha=0.7)
    
    # plt.scatter(peak_p[0], peak_p[1], 500, c='b', marker='x')
    plt.scatter(l_p[0], l_p[1], 500, c='b', marker='x')
    plt.scatter(r_p[0], r_p[1], 500, c='r', marker='+')    
        
plt.show()
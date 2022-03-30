"""This is where we will call the functions from the powerful pluzzling algo"""
from cmath import inf
from turtle import color, shape
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

img, borders = get_image_and_border('dataset\\starry_night\\edge_case.jpg')
img_matcher = Matcher(img, kmeans=False)

def display_border(border, **kwargs):
    n = border.shape[0]
    b = border.reshape(n, 2)
    plt.scatter(b[:,0], b[:,1], **kwargs)

# Pieces 0 and 2 can connect on one side:
b1 = borders[2]#[0]
b2 = borders[2]
sampling_rate = 25
ur_b1 = border_ops.unroll_border(b1[:,0], sampling_rate=sampling_rate)
mean_b1 = np.mean(ur_b1)
std_b1 = np.std(ur_b1)
max_b1 = np.max(ur_b1)
min_b1 = np.min(ur_b1)

# Getting appropriate segments:
p1 = 1420
p2 = 2320
p3 = 3540
n = 450
b1_s = b1[p1:p1+n]
b2_s = b2[p2:p2+n]

# Displaying the border itself

#TODO: use std to partition the border into segments
# red points are line segments (within the std)
# segmenting the line segments leaves behind the jigsaw nodes!
std_multiplier = 0.25
std_multiplied = std_multiplier * std_b1
print("std threshold:", std_multiplied)
print("mean+std:", mean_b1 + std_multiplied)
plt.figure()#figsize=(20,3))

# displaying mean std max min of the unrolled border:
plt.plot(ur_b1)
plt.plot((0, len(ur_b1)), (mean_b1 + std_b1, mean_b1 + std_b1), c='r')
plt.plot((0, len(ur_b1)), (mean_b1 - std_b1, mean_b1 - std_b1), c='r')

plt.plot((0, len(ur_b1)), (mean_b1 + std_multiplied, mean_b1 + std_multiplied), c='y')
plt.plot((0, len(ur_b1)), (mean_b1 - std_multiplied, mean_b1 - std_multiplied), c='y')

plt.plot((0, len(ur_b1)), (mean_b1,mean_b1), c='b')

plt.plot((0, len(ur_b1)), (max_b1,max_b1), c='g')
plt.plot((0, len(ur_b1)), (min_b1,min_b1), c='g')
plt.xticks(np.arange(0, len(ur_b1), 5))

plt.figure()
THRESHOLD = 0.09540115024073753 # NOTE: +-0.09540115024073753 seems to be the best for identifying straight lines
def display_border_points(use_std=False):
    display_border(b1)
    # using std
    if use_std:
        for i in range(len(b1)):
            p = b1[i][0]
            
            ur_i = i // sampling_rate
            if i % sampling_rate == 0:        
                ur_p = ur_b1[ur_i-1]
                if ur_p > mean_b1 + std_multiplied:
                    plt.scatter(p[0], p[1], c='y')
                elif ur_p < mean_b1 - std_multiplied:
                    plt.scatter(p[0], p[1], c='y')
                else:
                    plt.scatter(p[0], p[1], c='r')
                
                if ur_i % 10 == 0:
                    plt.text(p[0], p[1], str(ur_i))
    # using a fixed threshold to identify the line points.
    else:
        for i in range(len(b1)):
            p = b1[i][0]
            
            ur_i = i // sampling_rate
            if i % sampling_rate == 0:        
                ur_p = ur_b1[ur_i-1]
                if ur_p > THRESHOLD:
                    plt.scatter(p[0], p[1], c='y')
                elif ur_p < -THRESHOLD:
                    plt.scatter(p[0], p[1], c='y')
                else:
                    plt.scatter(p[0], p[1], c='r')
                
                if ur_i % 10 == 0:
                    plt.text(p[0], p[1], str(ur_i))

switching_ratio = 0.5
gamma = 0.7 # must be less than 1.0
num_line_points = 0
num_non_line_points = 0 # starting off with 1 to avoid division by 0
last_cut = 0
is_line = (ur_b1[0] < mean_b1 + std_multiplied) and (ur_b1[0] > mean_b1 - std_multiplied) # checking if the first point is a line segment
ratios = []
diffs = []
for ur_i in range(len(ur_b1)):
    p = ur_b1[ur_i]
    
    # Checking to see if the current point is a line segment:
    if (p < mean_b1 + std_multiplied) and (p > mean_b1 - std_multiplied): # if within the std threshold
        num_line_points = 1 + num_line_points*gamma
        num_non_line_points *= gamma
    else:
        num_non_line_points = 1 + num_non_line_points*gamma
        num_line_points *= gamma
    
    # if any number is zero we just ignore and continue
    if num_non_line_points == 0 or num_line_points == 0: continue
    
    # checking ratio to see if we should make a cut.
    ratio = num_non_line_points/num_line_points
    diff = num_line_points - num_non_line_points
    ratios.append(ratio)
    diffs.append(diff)
    # print('{:10.3f} {:10.3f} {:10.3f}'.format(num_non_line_points, num_line_points, ratio))
    if (    (is_line and (num_non_line_points/num_line_points < switching_ratio)) or 
        (not is_line and (num_line_points/num_non_line_points < switching_ratio))   ):
        # make a cut when ratio is too low (e.g. less than 50%) when we are building a line segment.
        # OR make a cut when ratio is too high (e.g. more than double) when we are building a non-line segment.
        is_line = not is_line
        
        # making the cut at the mid point
        curr_cut = int((ur_i - last_cut)/2)
        last_cut = curr_cut
        print('cut at', curr_cut)
        # TODO: implement this
        
        # displaying as cut point:
        i = curr_cut * sampling_rate
        # plt.scatter(b1[i][0][0], b1[i][0][1], c='g')
        

plt.figure(figsize=(10,3))
# finding peaks of the ratios plot using the scipy find_peaks_cwt function
r = np.array(ratios)
peaks = find_peaks_cwt(r, widths=np.arange(1,10))

# Getting rid of peaks below ratio of 5:
peaks = [p for p in peaks if r[p] > 5]

# plotting the rest of the ratios
plt.plot(ratios)
plt.title('RATIOS')
plt.plot(peaks, r[peaks], 'x')
plt.xticks(np.arange(0, len(ur_b1), 5))
plt.show()
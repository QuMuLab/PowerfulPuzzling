import numpy as np
import matplotlib.pyplot as plt
import cv2 as cv
from dtw import dtw, rabinerJuangStepPattern

def getting_orthoganol_colors(img, b2_s):
    """Gets the colors (in HSV format) orthogonal to the contour segment.

    Args:
        img ([type]): The original RGB image        
        b2_s ([type]): the contour segment for the piece
    """
    # b2_s is a subcontour (section of border contour)
    sc = np.flip(b2_s[:, 0])
    colors = []
    tangent_line = []
    points_x = []
    points_y = []
    for n in range(0,len(sc)-3,3):
        (y,x) = sc[n]
        # This point is used to determine where the orthoganol points lie:
        (y1,x1) = sc[n+3] 
        h,w = y1-y, x1-x
        colors.append(img[y-w,x+h,:3] + img[y+w,x-h,:3])
        points_x.append(x+h)
        points_y.append(y-w)
        points_x.append(x-h)
        points_y.append(y+w)
            
        tangent_line.append([x1,y1,x,y])
        
    colors = np.array(colors, 'uint8').reshape(-1,1,3)
    colors = cv.cvtColor(colors, cv.COLOR_RGB2HSV) # converting to HSV (RGB may mislead; e.g. 130 is as close to 160 as 190)
    colors = colors.reshape(-1,3)
    
    # displaying the sampled colors 
    plt.imshow(img[:,:,:3])
    print('=', colors[0])
    print('bp:', tangent_line[0])
    plt.scatter(points_x, points_y, c='y')
    clr = ['b', 'r']
    for i in range(len(tangent_line)):
        plt.plot([tangent_line[i][0],tangent_line[i][2]], 
                [tangent_line[i][1], tangent_line[i][3]],
                linewidth=1, c=clr[i%2], marker='o')
    plt.show()
    
    
def get_dtw_distance(b1_s, b2_s):
    """[summary]

    Args:
        b1_s ([type]): Unrolled border segment
        b2_s ([type]): 
    """
    ur_b1_s = b1_s
    ur_b2_s = b2_s

    # normalizing
    ur_b1_s = ur_b1_s / np.linalg.norm(ur_b1_s)
    ur_b2_s = ur_b2_s / np.linalg.norm(ur_b2_s)

    plt.plot(ur_b1_s)
    plt.plot(ur_b2_s)

    # %% Using dtw to match
    alignment = dtw(ur_b1_s, ur_b2_s[15:], keep_internals=True)

    ## Display the warping curve, i.e. the alignment curve
    alignment.plot(type="twoway")
    print(alignment.normalizedDistance)
    #``normalizedDistance`` distance computed, *normalized* for path
    #   length, if normalization is known for chosen step pattern.

    #%% Align and plot with the Rabiner-Juang type VI-c (no. 6) unsmoothed recursion
    aligned = dtw(ur_b1_s, ur_b2_s[15:], keep_internals=True, 
        step_pattern=rabinerJuangStepPattern(6, "c"))

    aligned.plot(type="twoway")
    print(aligned.normalizedDistance)
    
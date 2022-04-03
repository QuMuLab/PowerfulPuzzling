import numpy as np
import matplotlib.pyplot as plt
import cv2 as cv
from dtw import dtw, rabinerJuangStepPattern

def getting_orthoganol_colors(img, b2_s, dist=10, sampling_rate=3):
    """Gets the colors (in HSV format) orthogonal to the contour segment.
    
    Using this formula we can get colors within the border that are x distance way from it.
    https://www.desmos.com/calculator/fpr5vp82vd

    Args:
        img ([type]): The original RGB image in yx format     
        b2_s ([type]): the contour segment for the piece
        dist ([type], optional): How many pixels away from the border to sample from. Defaults to 5.
    """
    # b2_s is a subcontour (section of border contour)
    sc = b2_s
    colors = np.empty((len(sc)//sampling_rate, 3), dtype=np.uint8)
    tangent_line = []
    points = np.empty((len(sc)//sampling_rate, 2))
    i = 0
    for n in range(0,len(sc)-sampling_rate, sampling_rate):
        (x,y) = sc[n]
        # This point is used to determine where the orthoganol points lie:
        (x1,y1) = sc[n+sampling_rate]
        h, w = y1-y, x1-x
        hypo = np.sqrt(h**2 + w**2) # getting hypo to normalize the distance from border
        
        # The sampled point that is `dist` away from the border:
        p = (int(x + dist*h/hypo), 
             int(y - dist*w/hypo))
        colors[i] = (img[p[1],p[0]]) # image is in (yx) format
        
        # Getting inner points when going clockwise around boundary
        points[i] = p
            
        tangent_line.append([x1,y1,x,y])
        i+=1
    
    colors = np.array(colors, 'uint8').reshape(-1,1,3)
    colors = cv.cvtColor(colors, cv.COLOR_RGB2HSV) # converting to HSV (RGB may mislead; e.g. 130 is as close to 160 as 190)
    colors = colors.reshape(-1,3)
    
    print(len(colors))
    print(len(sc)//sampling_rate)
    # displaying the sampled colors 
    plt.imshow(img)
    print(img.shape)
    print('=', colors[0]/255)
    print('bp:', tangent_line[0])
    for x,y,c in zip(points[:,0], points[:,1], colors):
        plt.scatter(x, y, c=[c/255])
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
    
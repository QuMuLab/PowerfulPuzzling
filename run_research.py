#%%
from src.border_matching.matcher import Matcher
from src.border_extraction.get_border import get_image_and_border
from src.border_segmentation.segment_border import *

from src.utils import border_ops, display
from research.matching.util_functions import getting_orthoganol_colors

img, borders = get_image_and_border('dataset\\starry_night\\edge_case.jpg')
img_matcher = Matcher(img, borders, kmeans=False)

#%% unrolling border and displaying it:
# b = borders[0][:,0]
# ur_b25 = border_ops.unroll_border(b, sampling_rate=25)
# ur_b10 = border_ops.unroll_border(b, sampling_rate=10)
# # plt.plot(ur_b25)
# plt.plot(ur_b10)
# plt.plot((0, len(ur_b10)), (0,0), c='b')
# plt.show()

#%%
# colors, points = getting_orthoganol_colors(img, borders[0][:,0], dist=10)
colors, points = border_ops.get_orthoganol_colors(img, borders[0][:,0], dist=15)
# displaying the sampled colors 
plt.imshow(img)
for x,y,c in zip(points[:,0], points[:,1], colors):
    plt.scatter(x, y, c=[c/255], edgecolors= "w")
display.display_border(borders[0], s=2)
plt.show()
exit()


#%% Pieces 0 and 2 can connect on one side:
b1 = borders[1][:,0]
sampling_rate = 25
THRESHOLD = 0.104
ur_b1 = border_ops.unroll_border(b1, sampling_rate=sampling_rate)
plt.plot((0, len(ur_b1)), (0,0), c='b')
plt.plot(ur_b1)
plt.figure()
seg_vals, seg_points = get_border_segments(ur_b1, b1, display_borders=True, threshold=0.1, gamma=0.75, 
                                       peak_width=2, segment_padding=2)
# NOTE: for border 1 (longest border) the best config is (0.08, 0.8, 1.5, 2) 
# for (threshold, gamma, peak_width, segment_padding) respectively

b = b1

for i, s in enumerate(seg_points):
    mse = border_ops.get_mse(s)
    if mse > 5: # only displaying non line segments
        display.display_border(b)
        display.display_border(s)
        plt.title("mse = "+str(mse))
        plt.show() 


# exit()

# running the matcher:
#%% Running matcher for two known matched pieces:
# (pieces 0 and 2 can connect on one side)
b1 = borders[0]
b2 = borders[2]

match_val, match_segs = img_matcher.get_matching_segments(b1[:,0], b2[:,0], mse_cutoff=5.0)
# displaying the border contours
display.display_border(b1[:,0], color='b')
display.display_border(b2[:,0], color='b')

# displaying the segment of the border contours:
display.display_border(match_segs[0], c='y')
display.display_border(match_segs[1], c='y')
plt.title("Match Score: "+str(match_val))
plt.show()

#%% Running for all borders:
matches = img_matcher.get_matching_pieces(display=False)

# %% displaying the matches:
for match_val, (i,j), match_segs in matches:
    # displaying the border contours
    display.display_border(borders[i], color='b')
    display.display_border(borders[j], color='b')

    # displaying the segment of the border contours:
    display.display_border(match_segs[0], c='y')
    display.display_border(match_segs[1], c='y')
    plt.title("Match Score: "+str(match_val))
    plt.show()
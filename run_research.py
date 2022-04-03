#%%
from src.border_matching.matcher import Matcher
from src.segmentation.FIXME import get_image_and_border
from src.segmentation.segment_border import *
# from research.Jean.matching.segment_border import *
from src.utils import border_ops

img, borders = get_image_and_border('dataset\\starry_night\\edge_case.jpg')
img_matcher = Matcher(img, kmeans=False)

#%% Pieces 0 and 2 can connect on one side:
b1 = borders[0]
sampling_rate = 25
THRESHOLD = 0.104
ur_b1 = border_ops.unroll_border(b1[:,0], sampling_rate=sampling_rate)

seg_is, seg_vals = get_border_segments(ur_b1, b1, display_borders=True, threshold=0.1, gamma=0.75, 
                                       peak_width=2, segment_padding=2)
# NOTE: for border 1 (longest border) the best config is (0.08, 0.8, 1.5, 2) 
# for (threshold, gamma, peak_width, segment_padding) respectively

b = b1

for i, s in enumerate(seg_is):
    sb = get_border_vals(s[0]*sampling_rate, s[1]*sampling_rate, b[:,0])
    mse = border_ops.get_mse(sb)
    if mse > 5: # only displaying non line segments
        print(border_ops.get_poly_shape(seg_vals[i], cutoff=0))
        border_ops.display_border(b)
        border_ops.display_border(sb)
        plt.title("mse = "+str(mse))
        plt.show() 



# running the matcher:
#%% Running matcher for two known matched pieces:
# (pieces 0 and 2 can connect on one side)
b1 = borders[0]
b2 = borders[2]

match_val, match_segs = img_matcher.get_matching_segments(b1[:,0], b2[:,0], mse_cutoff=5.0)
# displaying the border contours
border_ops.display_border(b1[:,0], color='b')
border_ops.display_border(b2[:,0], color='b')

# displaying the segment of the border contours:
border_ops.display_border(match_segs[0], c='y')
border_ops.display_border(match_segs[1], c='y')
plt.title("Match Score: "+str(match_val))
plt.show()

#%% Running for all borders:
matches = img_matcher.get_matching_pieces(display=False)

# %% displaying the matches:
for match_val, (i,j), match_segs in matches:
    # displaying the border contours
    border_ops.display_border(borders[i], color='b')
    border_ops.display_border(borders[j], color='b')

    # displaying the segment of the border contours:
    border_ops.display_border(match_segs[0], c='y')
    border_ops.display_border(match_segs[1], c='y')
    plt.title("Match Score: "+str(match_val))
    plt.show()
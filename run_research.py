from src.segmentation.segment_border import *
# from research.Jean.matching.segment_border import *
from src.utils import border_ops

img, borders = get_image_and_border('dataset\\starry_night\\edge_case.jpg')
img_matcher = Matcher(img, kmeans=False)

# Pieces 0 and 2 can connect on one side:
b1 = borders[2]
sampling_rate = 25
THRESHOLD = 0.104
ur_b1 = border_ops.unroll_border(b1[:,0], sampling_rate=sampling_rate)

get_border_segments(ur_b1, b1, display_borders=True)
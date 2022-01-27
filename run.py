"""This is where we will call the functions from the powerful pluzzling algo"""
from src.app import get_hint, complete_puzzle
from src.border_matching import Matcher
from src.segmentation.FIXME import get_image_and_border

# %%
img, borders = get_image_and_border('dataset\\starry_night\\edge_case.jpg')
print(img.shape)
Matcher(img)

import pickle
import cv2
from matplotlib.animation import ImageMagickBase
import numpy as np
from skimage import io
import matplotlib.pyplot as plt
from skimage.util import img_as_float
from scipy.interpolate import splprep, splev
from skimage.transform import rescale, resize, downscale_local_mean


PATH = "dataset/contours_(edge_case.JPG).pickle"
IMAGE = "dataset/starry_night/edge_case.JPG"

def load_pickle(path):
    """[summary]

    Args:
        path ([type]): [description]

    Returns:
        [type]: [description]
    """
    with open(path, "rb") as p:
        return pickle.loads(p.read())

def load_image(image_path):
    """[summary]

    Args:
        image_path ([type]): [description]
    Returns:
        [type]: [description]
    """
    # Load up the image and remove the alpha channel
    image = img_as_float(io.imread(image_path))
    if(image.shape[-1] == 4):
        image = image[:,:,:3]

    return image


def neighbors(im, radius, row_number, column_number):
     return [[im[i][j] if  i >= 0 and i < len(im) and j >= 0 and j < len(im[0]) else 0
                for j in range(column_number-1-radius, column_number+radius)]
                    for i in range(row_number-1-radius, row_number+radius)]


# Extract the contours and image
image = load_image(IMAGE)
contours = load_pickle(PATH)
print("Num Contours:", len(contours))
print("0th Contour Shape:", contours[0].shape, "\n")

simplified_contours = []
for cnt in contours:
    approx = cv2.approxPolyDP(cnt, 0.0005*cv2.arcLength(cnt, True), True)
    simplified_contours.append(approx)

# Extract color from contour
kernel_size = 1


# Draw the borders onto a matplotlib plot
# for cnt in simplified_contours:
cnt = contours[0]
cnt = cnt.reshape(cnt.shape[0], cnt.shape[-1])

# Grab the pixel color along the boarder
colors = []
prev_pix = None
xmin = np.min(cnt[:, 0])
ymin = np.min(cnt[:, 1])
for pixel in cnt:
    x, y = pixel[1], pixel[0]
    neighbours = np.array(neighbors(image, kernel_size, x, y))
    window_color = np.mean(neighbours.reshape(neighbours.shape[0] ** 2, 3), axis=0)
    colors.append(window_color)

    # if this is the first pixel of the countour skip
    # if prev_pix is None:
    #     prev_pix = [x, y]
    # else:
    #     # If not draw the line between this pix and the last
    #     plt.plot([prev_pix[1]-ymin, y-ymin], [prev_pix[0]-ymin, x-ymin], c=window_color)
    #     prev_pix = [x, y]

plt.scatter(cnt[:, 0], cnt[:, 1], s=0.2)

# plt.imshow(image)
plt.show()



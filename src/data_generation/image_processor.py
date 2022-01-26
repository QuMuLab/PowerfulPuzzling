import cv2
import PIL
import random
import numpy as np
import os

class ImageProcessor:

    @staticmethod
    def tear_image(image_path, save_dir, centers, min_dims=100, max_dims=None):
        # Open image and find centers
        im = cv2.imread(image_path)

        # Scale the center using the shape of the image (we reverse the shape for the right)
        centers = np.random.rand(centers, 2)
        centers *= im.shape[0:2][::-1]
        centers = centers.astype(np.int)

        # Lock the max dims
        max_dims = max(im.shape[0], im.shape[1]) if max_dims is None else max_dims

        # Copy an image for drawing
        draw_im = im.copy()

        # Create a dir to save our images
        if not os.path.exists(save_dir):
            os.mkdir(save_dir)

        for i, c in enumerate(centers):
            # Find the size of the box
            size = int(-random.randint(min_dims, max_dims))

            # Define the corners
            corner_1 = c + (-size, -size)
            corner_2 = c + (size, size)

            # Clamp the corners so they do not exceed our image's bounds
            corner_1[0] = min(max(0, corner_1[0]), im.shape[1])
            corner_1[1] = min(max(0, corner_1[1]), im.shape[0])
            corner_2[0] = min(max(0, corner_2[0]), im.shape[1])
            corner_2[1] = min(max(0, corner_2[1]), im.shape[0])

            # Reposition the center to ensure we are within the bounds of the box
            cv2.circle(draw_im, tuple(c), 5, (0,0,255), -1)
            cv2.rectangle(draw_im, tuple(corner_1), tuple(corner_2), (255, 0, 0), 2)

            # Only write if the image is valid
            new_image = im.copy()
            if len(new_image[corner_2[0]:corner_1[0], corner_2[1]:corner_1[1]]) == 0:
                new_image = new_image[corner_1[0]:corner_2[0], corner_1[1]:corner_2[1]]
            else:
                new_image = new_image[corner_2[0]:corner_1[0], corner_2[1]:corner_1[1]]
            if len(new_image) > 0:
                cv2.imwrite(f"{save_dir}/{os.path.basename(image_path)}_image_segment_{i}_<{c[0]},{c[1]}>_{new_image.shape[0]}x{new_image.shape[0]}.png",
                            new_image)

        cv2.imwrite("wow.png", draw_im)


    @staticmethod
    def tear_images(image_paths):
        pass


ImageProcessor.tear_image("/Users/martingleave/Desktop/School Work/UNIVERSITY/fourth_year/second_sem/CISC499/PowerfulPuzzling/Dataset/raw_uncut/im3.png", "Dataset/raw_cut", 50, max_dims=300, min_dims=200)
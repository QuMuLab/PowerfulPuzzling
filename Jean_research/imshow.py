import matplotlib.pyplot as plt
import numpy as np

width = 1144
height = 857

image = np.empty((width, height, 4), dtype='uint8') # RGBA


with open('obj2a.json', 'r') as f:
    line = f.readline()
    for x in range(width):
        for y in range(height):
            rgba = 0
            while rgba < 4:
                line_segments = line.split(':')

                if len(line_segments) <= 1:
                    print('no rgba value')
                else:
                    num = line_segments[1][:-2]
                    image[x][y][rgba] = int(num)
                    rgba += 1
                line = f.readline()
    print(line)

plt.imshow(image)
plt.show()
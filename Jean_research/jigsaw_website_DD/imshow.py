import matplotlib.pyplot as plt
import numpy as np
import json

width = 743
height = 558

image = np.empty((width, height, 4), dtype='uint8') # RGBA


with open('mask.json', 'r') as f:
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


f_jsn = open('puzzle.json')
pp = json.load(f_jsn)

along_base = []
from_base = []

for pt in pp['bottom']['curves']['ptsReversed']:
    along_base.append(pt['alongBase'])
    from_base.append(pt['fromBase'])

y = [x for x in range(len(along_base))]
plt.scatter(y, along_base, label="along")
plt.scatter(y, from_base, label="from")
# plt.scatter(y, [x1+x2 for x1,x2 in zip(from_base, along_base)], label="combined")
plt.legend()


plt.figure()
along_base = []
from_base = []

for pt in pp['bottom']['curves']['pts']:
    along_base.append(pt['alongBase'])
    from_base.append(pt['fromBase'])

y = [x for x in range(len(along_base))]
plt.scatter(y, along_base, label="along")
plt.scatter(y, from_base, label="from")
# plt.scatter(y, [x1+x2 for x1,x2 in zip(from_base, along_base)], label="combined")
plt.legend()

plt.show()




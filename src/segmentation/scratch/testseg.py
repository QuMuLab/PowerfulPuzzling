from rembg.bg import remove
import numpy as np
import io
from PIL import Image

input_path = '/Users/martingleave/Desktop/School Work/UNIVERSITY/fourth_year/second_sem/CISC499/PowerfulPuzzling/myimage.png'
output_path = '/Users/martingleave/Desktop/School Work/UNIVERSITY/fourth_year/second_sem/CISC499/PowerfulPuzzling/myimage-bgrm.png'

# Uncomment the following line if working with trucated image formats (ex. JPEG / JPG)
# ImageFile.LOAD_TRUNCATED_IMAGES = True

f = np.fromfile(input_path)
result = remove(f, alpha_matting=False)
img = Image.open(io.BytesIO(result)).convert("RGBA")
img.save(output_path)
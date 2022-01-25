import cv2
import cvzone
from cvzone.SelfiSegmentationModule import SelfiSegmentation
import os

cap = cv2.VideoCapture(0)
cap.set(3, 640)
cap.set(4, 480)
# cap.set(cv2.CAP_PROP_FPS, 60)

segmentor = SelfiSegmentation()
fpsReader = cvzone.FPS()

# imgBG = cv2.imread("BackgroundImages/3.jpg")
im = cv2.imread("/Users/martingleave/Desktop/School Work/UNIVERSITY/fourth_year/second_sem/CISC499/PowerfulPuzzling/ttt.png")
im = im[0:720, 0:1280]

while True:
    success, img = cap.read()
    imgOut = segmentor.removeBG(im, (255,0,255), threshold=0.3)
    # imgOut = segmentor.removeBG(img, im, threshold=0.8)

    imgStack = cvzone.stackImages([img, imgOut], 2,1)
    _, imgStack = fpsReader.update(imgStack)
    cv2.imshow("image", imgStack)
    key = cv2.waitKey(1)

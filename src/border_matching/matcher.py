import numpy as np

class Matcher:
    def __init__(self, original_image: np.array) -> None:
        """This class is in charge of 

        Args:
            original_image (np.array): RGB picture of the original image (used to extract 
                color data for validating matches)
        """
        self.puzzle = original_image
        
    def find_matching(self, contours: np.array) -> tuple[int, int, float, float]:
        """Finds two pieces that match with each other given their borders.

        Args:
            contours (np.array): the contours for all the borders of each piece

        Returns:
            tuple[int, int, float, float]: The index for the two matching borders, and 
                what rotation (in degrees) needs to be applied for them to match.
        """
        n = len(contours) # number of pieces
        probable_matches = np.empty((n, n, 1)) # only half will be filled (symetrical)
        for i in  range(n):
            for j in range(i+1, n):
                probable_matches[i,j] = self.match_likelihood(contours[i], contours[j])                

    def match_likelihood(self, border1, border2) -> float:
        """Determines how likely it is that two borders are matching

        Args:
            border1 ([type]): [description]
            border2 ([type]): [description]

        Returns:
            float: MSE for how closely the borders match
        """
        pass

    def __get_line(self) -> np.array:
        pass
    def __get_MSE(self) -> float:
        pass
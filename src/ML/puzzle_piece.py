import numpy as np
import math


class PuzzlePiece(object):
    """
    Wrapper class for puzzle peices
    """
    def __init__(self, vertices_x, vertices_y):
        """[summary]

        Args:
            vertices_x ([type]): [description]
            vertices_y ([type]): [description]
        """

        # Some assertions...
        assert len(vertices_x) == len(vertices_y), "There must be the same number of x vertices as y vertices"

        # Store the vertices
        self.vertices = list(zip(vertices_x, vertices_x))
        self.n_vertices = len(self.vertices)

        # Calculate the angles between each vertex
        self.angles = self.__calculate_vertex_angles()

    def __calculate_vertex_angles(self) -> np.array:
        # Compare the angle between each point
        for i in range(self.vertices - 1):
            # Grab two vertices
            x1, y1 = self.vertices_x[i], self.vertices_y[i]
            x2, y2 = self.vertices_x[i + 1], self.vertices_y[i + 1]

            # print(f"<{x1}, {y1}>", f"<{x2}, {y2}>")
            # print()
            # TODO Implement method
            # TODO Calculate the angle between each adjacent vertex (used to detect corners )


    def __repr__(self):
        return f"PuzzlePiece<Vertices: {self.vertices}>"




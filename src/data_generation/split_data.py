import glob
import os
import random
import string
import shutil

def rename_all(dataset_path):
    """
    Renames all files found in dataset_path to something random (keeps extension)

    Args:
        dataset_path ([str]): Path to dataset (image dir)
    """

    for file in glob.glob(dataset_path + "/*"):
        # Generate random name
        extension = file.split(".")[-1]
        name = "".join([string.ascii_letters[random.randint(0, len(string.ascii_letters)-1)] for _ in range(20)])
        tag = random.randint(10000, 99999)
        new_name = f"{dataset_path}/{name}_{tag}.{extension}"
        print("Renamed:")
        print(file, "to", new_name)
        print()
        os.rename(file, new_name)


def copy_all(dataset_path: str, train_path: str, test_path: str, val_path: str, percentages: tuple):
    """
    Splits and copies the percentages of images to their respective datasets

    Args:
        dataset_path (str): [description]
        train_path (str): [description]
        test_path (str): [description]
        val_path (str): [description]
        percentages (tuple): (train%, test%, val%)
    """
    files = glob.glob(dataset_path + "/*")
    random.shuffle(files)

    train, test, val = percentages
    n = len(files)

    # Find number of images for each set
    assert sum([train, test, val]) == 1, "Sum of train, test and val must equal one (they are percentages)"
    train_images, test_images, val_images = int(train*n), int(test*n), int(val*n)
    total = train_images + test_images + val_images

    # Make sure we fix any rounding issues
    print(f"There are {train_images} images for training, {test_images} for testing, and {val_images} for validation.")
    print( f"We have {n} images, the total of the images calculated are {total}")

    # Resolving rounding issues
    if total != n:
        if total > n:
            print("We have a count mismatch... Rounding issue encountered. Please use different percentage values")
        else:
            print("We have a count mismatch... Rounding issue encountered. Resolving")
            train_images += n - total
            total = train_images + test_images + val_images
            print(f"New counts are {train_images} images for training, {test_images} for testing, and {val_images} for validation.")
            print( f"We now have {n} images, the total of the images calculated are {total}")

    # Copy over and populate the new dirs
    train_set = files[0:train_images]
    test_set = files[train_images: train_images + test_images]
    val_set = files[train_images + test_images: train_images + test_images + val_images]
    assert len(train_set) == train_images and len(test_set) == test_images and len(val_set) == val_images, "Image counts did not match image lists"

    print("Copying images")
    for file in train_set:
        name = os.path.basename(file)
        shutil.copy(file, f"{train_path}/{name}")

    for file in test_set:
        name = os.path.basename(file)
        shutil.copy(file, f"{test_path}/{name}")

    for file in val_set:
        name = os.path.basename(file)
        shutil.copy(file, f"{val_path}/{name}")


# copy_all("/Users/martingleave/Desktop/School Work/UNIVERSITY/fourth_year/second_sem/CISC499/PowerfulPuzzling/dataset/mask_rcnn/full_dataset",
#          "/Users/martingleave/Desktop/School Work/UNIVERSITY/fourth_year/second_sem/CISC499/PowerfulPuzzling/dataset/mask_rcnn/train",
#          "/Users/martingleave/Desktop/School Work/UNIVERSITY/fourth_year/second_sem/CISC499/PowerfulPuzzling/dataset/mask_rcnn/test",
#          "/Users/martingleave/Desktop/School Work/UNIVERSITY/fourth_year/second_sem/CISC499/PowerfulPuzzling/dataset/mask_rcnn/validation",
#          (.70, .15, .15))

export const addImages = (objectArray, imageName, max) => {
  let imageNumber = 1;
  objectArray.map(obj => {
    obj.imageUrl = `${imageName}-${imageNumber}.jpg`;
    imageNumber++;
    if (imageNumber > max) {
      imageNumber = 1;
    }
  });
  return objectArray;
};

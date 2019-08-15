export const addImages = (objectArray, imageName, max) => {
  objectArray.map((obj, index) => {
    let imageNumber = 1;
    const sequence = index + 1;
    if (sequence <= max) {
      imageNumber = sequence;
    } else if (sequence > max) {
      imageNumber = sequence - max;
    }
    obj.imageUrl = `${imageName}-${imageNumber}.jpg`;
  });
  return objectArray;
};

function findNextElementArray(array) {
  const nextElementArray = [];
  for (let a = 0; a < array.length; a++) {
    nextElementArray.push(-1);
  }

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] > array[i]) {
        nextElementArray[i] = array[j];
        break;
      }
    }
  }
  return nextElementArray;
}

const myArray = [4, 5, 2, 25];
const newArray = findNextElementArray(myArray);

console.log("newArray = ", newArray);

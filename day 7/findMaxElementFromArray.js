const myArray = [33, 55, 23, 1, 4, 99, 873];
const myArray2 = [333, 455, 34523, 93, 44, 99, 873];

function findMaxElement(myArray) {
  let maxNumber = myArray[0];
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] > maxNumber) {
      maxNumber = myArray[i];
    }
  }
  return maxNumber;
}

console.log(findMaxElement(myArray));

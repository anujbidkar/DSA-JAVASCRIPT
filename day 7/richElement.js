const myArray = [
  [1, 2, 3],
  [4, 2, 1],
];

function findMaxElement(myArray) {
  let maxNumber = myArray[0];
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] > maxNumber) {
      maxNumber = myArray[i];
    }
  }
  return maxNumber;
}
function findRichElement(myArray) {
  let rich = 0;

  let secondArray = [];
  for (let i = 0; i < myArray.length; i++) {
    var temp = 0;
    for (let j = 0; j < myArray[i].length; j++) {
      temp = temp + myArray[i][j];
    }
    secondArray.push(temp);
  }
  rich = findMaxElement(secondArray);
  return rich;
}

console.log(findRichElement(myArray));

function getMinValueFromArray(myArray, i) {
  const length = myArray.length;
  let minIndex = i;
  for (let j = i + 1; j < length; j++) {
    if (myArray[j] < myArray[minIndex]) {
      minIndex = j;
    }
  }
  return minIndex;
}

function getSwapArray(myArray, minValue, i) {
  if (minValue !== i) {
    let tempValue = myArray[i];
    myArray[i] = myArray[minValue];
    myArray[minValue] = tempValue;
  }
  return myArray;
}
function selectionSort(array) {
  let length = array.length;
  for (i = 0; i <= length - 1; i++) {
    let min = getMinValueFromArray(array, i);
    array = getSwapArray(array, min, i);
  }
  return array;
}

const array = [64, 25, 12, 22, 11];
console.log(selectionSort(array));

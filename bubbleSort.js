const myArray = [5, 1, 4, 2, 8, 9];
function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (myArray[j] > myArray[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log("sorted array is :", bubbleSort(myArray));

// expected sorted array is - [1,2,4,5,8,9]

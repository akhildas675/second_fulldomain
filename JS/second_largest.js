let array = [2, 4, 5, 61, 6, 46, 4, 9, 33, 64, 9, 63];

function secondLargest(arr) {
  let largest = 0;
  let secondLargest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest
}

console.log('Second Largest ',secondLargest(array));

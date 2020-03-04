function mergeSort(arr) {
  // takes in a single, unsorted array as a parameter
  // split the array into two halves
  if (arr.length < 2) return arr;
  let middleIndex = Math.floor(arr.length / 2);
  let firstHalf = arr.slice(0, middleIndex);
  let secondHalf = arr.slice(middleIndex);
  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(arr1, arr2) {
  // takes in two sorted arrays as parameter
  // merges those sorted arrays into one sorted array
  // returns one sorted array
  let result = [];
  while (arr1.length && arr2.length) {
    let minEl;
    if (arr1[0] < arr2[0]) {
      minEl = arr1[0];
      arr1.shift();
    } else {
      minEl = arr2[0];
      arr2.shift();
    }
    result.push(minEl);
  }
  if (arr1.length) result = result.concat(arr1)
  else result = result.concat(arr2)
  return result;
}

// mergeSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1 ])
mergeSort([100, -20, 40, -30, 16, -100, -101])
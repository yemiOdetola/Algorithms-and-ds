// link to repl.it >> https://repl.it/@blarcmann/Binary-search
function binarySearch(arr, key) {
  let midIndex = Math.floor(arr.length / 2);
  let midElem = arr[midIndex];
  if (midElem === key) {
    return true;
  }
  else if (midElem < key && arr.length > 1) {
    return binarySearch(arr.splice(midIndex, arr.length), key);
  }
  else if (midElem > key && arr.length > 1) {
    return binarySearch(arr.splice(0, midIndex), key)
  }
  else return false;
}

binarySearch([2, 3, 5, 7, 9, 10, 22, 26, 29, 33], 2)

function recur(num) {
  if (num === 1) {
    return num;
  } else {
    return num * recur(num - 1);
  }
} 
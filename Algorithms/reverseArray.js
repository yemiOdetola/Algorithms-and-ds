// link to repl.it >> https://repl.it/@blarcmann/reverseArray

function reverseArray(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    var tempVar = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tempVar;
  }
  return arr;
}

// Test
reverseArray(['q', 'w', 'e', 'r', 't', 'y']);
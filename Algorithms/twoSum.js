// link to repl.it >> https://repl.it/@blarcmann/TwoSum
// This algorithm checks for the possibles pairs in the array that when added, gives the second value passed to the function

function twoSum(arr, sum) {
  let pairs = [];
  let hashTable = [];
  for (let i = 0; i < arr.length; i++) {
    let currElem = arr[i];
    let counterpart = sum - currElem;
    if (hashTable.indexOf(counterpart) !== -1) {
      pairs.push([currElem, counterpart])
    }
    hashTable.push(currElem);
  }
  return pairs;
}

// Test
twoSum([1, 3, -4, 6, 3, 5, 7, 9, 9, 7, 11, 0], 7);
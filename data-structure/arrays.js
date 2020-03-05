// four fundamental operations: access, insertion, deletion, and search.

// Insertion
let arr = [1, 2, 3, 5, 7];
arr.push(11) // returns [1, 2, 3, 5, 7, 11]
// Deletion
let arr2 = [0, 8, 1, 1, 9, 7]
arr2.pop() // returns 7
arr2.shift() // returns 0
// Access
let arr3 = [7, 5, 6, 5, 6]
arr3[0] // returns 7
arr3[3] // returns 5
// Iteration
let arr4 = [0, 4, 6, 4, 6, 2, 5, 7];
for (index in arr4) {
  // console.log(arr4[index]); // returns each element in arr4
}
for (index of arr4) {
  // console.log(arr4[index]); // does same as above
}



// Helper Functions
// .slice()
let sl = [1, 2, 3, 4];
sl.slice(1, 2);
sl.slice();
// .splice()
let spl = [1, 2, 3, 4];
spl.splice(); //returns [], array1 = [1,2,3,4]
spl.splice(1, 2); //returns [2,3], array1 = [1,4]
let spl2 = [1, 2, 4, 6];
spl2.splice(0, 2, 0, 9, 8, 7, 4); // returns [ 1, 2 ]
console.log(spl2); // returns [ 0, 9, 8, 7, 4, 4, 6 ]
// .concat()
let conc = [1, 2, 3, 4];
conc.concat(5) // returns [1, 2, 3, 4, 5];
console.log(conc) // returns [1, 2, 3, 4]


// FUNNNNNNN
// Problem: Given the array arr, find and return two indices of the array that add up to weight or return -1 if there is no combination that adds up to weight.
function getWeight(arr, weight) {
  let hash = {};
  for (let i = 0; i < arr.length; i++) {
    let currEl = arr[i];
    let diff = weight - currEl;
    if (hash[diff]) {
      return [hash[weight - currEl], i];
    } else {
      hash[currEl] = i;
    }
  }
  return -1;
}


let arrr = [1, 2, 3, 4, 5];
let weight = 9;
getWeight(arrr, weight);


// Problem: dive into .splice()
function spliceArr(startIndex, endIndex, arr) {
  if (!startIndex && !endIndex) {
    return arr;
  }
  if (!endIndex) endIndex = arr.length;
  let partArray = [];
  for (let i = startIndex; i < endIndex; i++) {
    partArray.push(arr[i]);
  }
  return partArray;
}
spliceArr(1, 2, [1, 2, 3, 4]);

// median of an array
function medi(arr) {
  let length = arr.length;
  if (length % 2 !== 0) {
    return arr[Math.floor(length / 2)];
  } else {
    return Math.round((arr[length / 2] + arr[length / 2 - 1]) / 2);
  }
}
medi([1, 2, 3, 11, 5, 6, 8])


// Find common elements in 'k' sorted array
function commonElements(kArray) {
  let hash = {};
  let answer = [];
  for (let i = 0; i < kArray.length; i++) {
    let currentArray = kArray[i];
    for (j = 0; j < currentArray.length; j++) {
      let currEl = currentArray[j];
      if (currEl !== null) {
        if (hash[currEl]) {
          hash[currEl]++
        } else {
          hash[currEl] = 1
        }
      }
    }
  }
  for (prop in hash) {
    if (hash[prop] >= kArray.length) {
      answer.push(parseInt(prop))
    }
  }
  return answer;
}

let a1 = [1, 5, 5, 10];
let b1 = [3, 4, 5, 5, 10];
let c1 = [5, 5, 10, 20]; // result = [5 ,10];
commonElements([a1, b1, c1]);
// commonElements([[1 ,2 ,3 ],[1 ,2 ,3 ,4 ],[1 ,2 ]]) // result = [1, 2]




// Functional array methods: map, reduce, and filter.

// .map()
[1, 2, 3, 4, 5, 6, 7].map(function (value) {
  return value * 10;
});

// .filter()
[100, 2003, 10, 203, 333, 12].filter(function (value) {
  return value > 100;
})

// .reduce()



// Multidimensional Arrays
function jagged(rows, cols) {
  let jr = new Array(rows);
  for (let i = 0; i < cols; i++) {
    jr[i] = new Array(rows);
  }
  return jr;
}
jagged(3, 3);


// FUNNNNNNN
// Given a matrix representing a tic-tac-toe board, determine whether someone won, whether it was a tie, or whether the game has not ended yet

function checkRow(rowArr, letter) {
  for (let i = 0; i < 3; i++) {
    if (rowArr[i] != letter) {
      return false;
    }
  }
  return true;
}

function checkColumn(matrixBoard, columnIndex, letter) {
  for (let i = 0; i < 3; i++) {
    if (matrixBoard[i][columnIndex] != letter) {
      return false;
    }
  }
  return true;
}

function ticTacToe(gameBoardMatrix, letter) {
  let rowWin = checkRow(gameBoardMatrix[0], letter)
    || checkRow(gameBoardMatrix[1], letter)
    || checkRow(gameBoardMatrix[2], letter)

  let columnWin = checkColumn(gameBoardMatrix, 0, letter)
    || checkColumn(gameBoardMatrix, 1, letter)
    || checkColumn(gameBoardMatrix, 2, letter)

  let leftToRightDiagonal = gameBoardMatrix[0][0] == letter
    && gameBoardMatrix[1][1] == letter
    && gameBoardMatrix[2][2] == letter

  let rightToLeftDiagonal = gameBoardMatrix[0][2] == letter
    && gameBoardMatrix[1][1] == letter
    && gameBoardMatrix[2][0] == letter

  return rowWin || columnWin || leftToRightDiagonal || rightToLeftDiagonal

}

var board = [['O', '-', 'X'], ['-', 'O', '-'], ['-', 'X', 'O']];
ticTacToe(board, 'X'); // true


// FUNNNNNNN - Path finding
// given the location x, find the exit e.


// link to repl.it >> https://repl.it/@blarcmann/reverseWords

function reverseWords(string) {
  let strArr = string.split(' ');
  let reversedArr = [];

  strArr.forEach(word => {
    let newStr = '';
    for (let i = word.length - 1; i >= 0; i--) {
      newStr += word[i]
    }
    reversedArr.push(newStr);
  })
  return reversedArr.join(' ');
}

//Test
reverseWords('Lewis Hamilton dominated from start to finish the first Grand Prix of the sea');
// link to repl.it >> https://repl.it/@blarcmann/caesar-cipher

function caesarCipher(str, num) {
  num = num % 26;
  var strLow = str.toLowerCase();
  let alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let shifted = '';
  for (let i = 0; i < strLow.length; i++) {
    let currentLetter = strLow[i];
    if (currentLetter === ' ') {
      console.log(currentLetter);
      shifted += currentLetter;
      continue;
    }
    var currentIndex = alphabets.indexOf(strLow[i]);
    var newIndex = currentIndex + num;
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex;
    if (str[i] === str[i].toUpperCase()) {
      shifted += alphabets[newIndex].toUpperCase();
    } else {
      shifted += alphabets[newIndex];
    }
  }
  return shifted;
}

//Test
caesarCipher('Javascript', -900);
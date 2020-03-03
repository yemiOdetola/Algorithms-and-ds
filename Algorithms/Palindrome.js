// link to repl.it >> https://repl.it/@blarcmann/Palindrome

function isPalindrome(t) {
  let text = t.toLowerCase();
  let textArr = text.split('');
  var allowed = 'abcdefghijklmnopqrstuvwxyz'.split('');
  validText = [];
  textArr.forEach(char => {
    if (allowed.indexOf(char) > -1) validText.push(char)
  })
  if (validText.join('') === validText.reverse().join('')) {
    return true;
  } else {
    return false;
  }
}

//Test
isPalindrome('race car');
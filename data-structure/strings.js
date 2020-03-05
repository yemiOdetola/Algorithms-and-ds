// String Access
console.log('dog'.charAt(0));
console.log('character'.substr(3, 4));
console.log('character'.substr(2));


// String Comparison
let a = 'azeez';
let b = 'a';
console.log(a < b); // prints 'true'

let x = 'add';
let y = 'ab';
console.log(x < y); // prints 'false'



// String Search
'Red Dragon'.indexOf('Red'); // returns 0
'Red Dragon'.indexOf('Dragon'); // return 4
'Red Dragon'.indexOf(' '); // return 3
'Red Dragon'.indexOf('Bed'); //returns -1
'Red Dragon'.startsWith('Red'); // returns true
'Red Dragon'.endsWith('Dragon'); // returns true
'Red Dragon'.startsWith('Dragon'); // returns false 4 
'Red Dragon'.endsWith('Red'); // returns false



// Regular Expresssions
// Exncoding/Decoding
let dictionary = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789".split('');

function encodeId(num) {
  let base = dictionary.length;
  let encoded = '';
  if (num === 0) {
    return dictionary[0];
  }
  while (num > 0) {
    encoded += dictionary[(num % base)];
    num = Math.floor(num / base);
  }
  return reverseWord(encoded);
}

function reverseWord(word) {
  let reversed = '';
  if (word.length) {
    for (let i = word.length - 1; i >= 0; i--) {
      reversed += word.charAt(i);
    }
  }
  return reversed;
}

console.log(encodeId(11231230));
// Primality Test
// This algorithm checks if 'n' is a prime number;
function isPrime(num) {
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i = i + 6) {
    if (num % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}
isPrime(23);



// Prime factorization
// The process of determining which prime numbers multiply to a given // number

function primeFactors(n) {
  // Prints out the number of 2s that divides 'n'
  while (n % 2 == 0) {
    console.log(2);
    n = n / 2;
  }

  // 'n' will be odd at this point, so we can skip one element
  for (let i = 3; i * i <= n; i = i + 2) {
    while (n % i == 0) {
      console.log(i);
      n = n / i;
    }
  }

  // This condition is to handle case when 'n' is a prime number greater than 2
  if (n > 2) {
    console.log(n);
  }

}

primeFactors(200);


//Random number generator
Math.random() * 100; // floats btw 0 and 100
Math.random() * 25 + 5 // floats btw 5 and 30
Math.random() * 10 - 100; // floats between -100 and -90
//rounding up
Math.round(Math.random() * 50 + 10);



// Try this

// Given three numbers x, y, and p, compute (xˆy) % p. 
// Where, x is the base, y is exponent, and p is the modulus.
// time complexity === O(n);
function compute(base, exponent, modulus) {
  if (modulus == 1) return 0;
  let val = 1;
  for (let i = 0; i < exponent; i++) {
    val = (val * base) % modulus;
  }
  return val;
}


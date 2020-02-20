function fizz(num) {
  // if(num < 20) return console.log('num not up to 20');
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz')
    } else if (i % 5 === 0) {
      console.log('buzz')
    } else if (i % 3 === 0) {
      console.log('fizz')
    } else {
      console.log(i)
    }
  }
}

//test
fizz(30);
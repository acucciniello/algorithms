// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz

function FizzBuzz (output) {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output.push('FizzBuzz')
      console.log('FizzBuzz')
    } else if (i % 5 === 0) {
      output.push('Buzz')
      console.log('Buzz')
    } else if (i % 3 === 0) {
      console.log('Fizz')
      output.push('Fizz')
    } else {
      console.log(i)
      output.push(i)
    }
  }
  return
}

module.exports = FizzBuzz

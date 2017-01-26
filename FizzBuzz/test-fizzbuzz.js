var test = require('tape')
var FizzBuzz = require('./fizzbuzz.js')

test('FizzBuzz prints properly', function (t) {
  var output = []
  FizzBuzz(output)
  t.equal(output[2], 'Fizz')
  t.equal(output[4], 'Buzz')
  t.equal(output[14], 'FizzBuzz')
  t.end()
})

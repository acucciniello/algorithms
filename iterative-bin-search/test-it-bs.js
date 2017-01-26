var test = require('tape')
var BinarySearch = require('./it-binary-search.js')

test('Binary Search Array', function (t) {
  // try to find elements in an empty array
  var empty = []
  var location
  location = BinarySearch(empty, 7, 0, empty.length - 1)
  t.equal(location, -1)
  // Once when first element is num
  var oneEle = [2]
  location = BinarySearch(oneEle, 2, 0, oneEle.length - 1)
  t.equal(location, 0)
  // End element is it
  var endEle = [2, 4, 5, 6, 8]
  location = BinarySearch(endEle, 8, 0, endEle.length - 1)
  t.equal(location, 4)
  // Middle Element is it
  location = BinarySearch(endEle, 5, 0, endEle.length - 1)
  t.equal(location, 2)
  // Random Element
  location = BinarySearch(endEle, 4, 0, endEle.length - 1)
  t.equal(location, 1)
  t.end()
})

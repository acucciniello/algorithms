var test = require('tape')
var binarySearch = require('./binary-search.js')

test('Binary Search Array', function (t) {
  // try to find elements in an empty array
  var empty = []
  var location
  location = binarySearch(empty, 7, 0, empty.length - 1)
  t.equal(location, -1)
  // Once when first element is num
  var oneEle = [2]
  location = binarySearch(oneEle, 2, 0, oneEle.length - 1)
  t.equal(location, 0)
  // End element is it
  var endEle = [2, 4, 5, 6, 8]
  location = binarySearch(endEle, 8, 0, endEle.length - 1)
  t.equal(location, 4)
  // Middle Element is it
  location = binarySearch(endEle, 5, 0, endEle.length - 1)
  t.equal(location, 2)
  // Random Element
  location = binarySearch(endEle, 4, 0, endEle.length - 1)
  t.equal(location, 1)
  t.end()
})

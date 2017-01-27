var test = require('tape')
var MergeSort = require('./mergesort.js')

test('Merge Sort', function (t) {
  var empty = []
  var ret
  // Nothing in Array
  ret = MergeSort(empty, 0, empty.length)
  t.equal(ret, empty)
  // One Element
  var oneEle = [4]
  ret = MergeSort(oneEle, 0, oneEle.length)
  t.equal(ret, oneEle)
  // Sort Filled Array
  var filledArray = [4, 2, 5, 6, 7, 8, 2, 1]
  MergeSort(filledArray, 0, filledArray.length - 1)
  t.deepEqual(filledArray, [1, 2, 2, 4, 5, 6, 7, 8])
  t.end()
})

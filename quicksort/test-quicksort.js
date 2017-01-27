var test = require('tape')
var QuickSort = require('./quicksort.js')

test('QuickSort sorts Input Array', function (t) {
  var array = [53, 12, 98, 63, 18, 32, 80, 46, 72, 21]
  var output = [12, 18, 21, 32, 46, 53, 63, 72, 80, 98]
  QuickSort(array, 0, array.length - 1)
  t.deepEqual(array, output, 'Not Sorted Sorts Array')
  array = [1, 2, 3, 4, 5, 6, 7]
  output = [1, 2, 3, 4, 5, 6, 7]
  QuickSort(array, 0, array.length - 1)
  t.deepEqual(array, output, 'Already Sorted Does not Sort')
  t.end()
})

var GetRandomInt = require('./get-random-int.js')

function QuickSort (array, start, end) {
  if (start < end) {
    var divisionPoint = partition(array, start, end)
    QuickSort(array, start, divisionPoint - 1)
    QuickSort(array, divisionPoint + 1, end)
  }
  return
}

function partition (array, start, end, callback) {
  var pivot = GetRandomInt(start, end)
  var lastSmall = start
  var i
  // If pivot isnt most left element move it there
  if (pivot !== start) {
    array = swap(array, start, pivot)
  }
  var pivotVal = array[start]
  for (i = start + 1; i <= end; i++) {
    if (array[i] < pivotVal) {
      lastSmall++
      swap(array, lastSmall, i)
    }
  }
  array = swap(array, start, lastSmall)
  return lastSmall
}

function swap (array, a, b) {
  var temp = array[a]
  array[a] = array[b]
  array[b] = temp
  return array
}

module.exports = QuickSort

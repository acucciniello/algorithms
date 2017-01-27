
function MergeSort (array, start, end) {
  if (array.length === 0 || array.length === 1) {
    return array
  }
  if (start < end) {
    var merged
    var mid = Math.floor((start + end) / 2)
    MergeSort(array, start, mid)
    MergeSort(array, mid + 1, end)
    merged = Merge(array, start, mid, end)
    return merged
  }
}

function Merge (array, start, middle, end) {
  var i = start
  var j = middle + 1
  var k = start
  var temp = []
  while (i <= middle || j <= end) {
    if (i > middle) {
      temp[k++] = array[j++]
    } else if (j > end) {
      temp[k++] = array[i++]
    } else if (array[i] < array[j]) {
      temp[k++] = array[i++]
    } else {
      temp[k++] = array[j++]
    }
  }
  for (i = start; i <= end; i++) {
    array[i] = temp[i]
  }
  return array
}

module.exports = MergeSort

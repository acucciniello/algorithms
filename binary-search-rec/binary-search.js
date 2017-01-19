function BinarySearch (array, goal, start, end) {
  var NOT_FOUND = -1
  var mid = (start + end) / 2
  if (start > end) {
    console.log('the array isnt of any size')
    return NOT_FOUND
  } else if (array[start] === goal) {
    console.log('first element is the goal')
    return start
  } else if (array[end] === goal) {
    console.log('the last element is the goal')
    return end
  } else if (array[mid] > goal) {
    console.log(' second half')
    return BinarySearch(array, goal, start + 1, mid)
  } else if (array[mid] < goal) {
    console.log('first half')
    return BinarySearch(array, goal, mid, end - 1)
  }

  return mid
}

module.exports = BinarySearch

function BinarySearch (array, goal, start, end) {
  var NOT_FOUND = -1
  while (start <= end) {
    var mid = (start + end) / 2
    if (start === end) {
      console.log('the array isnt of any size')
      return start
    } else if (array[start] === goal) {
      console.log('first element is the goal')
      return start
    } else if (array[end] === goal) {
      console.log('the last element is the goal')
      return end
    } else if (array[mid] === goal) {
      return mid
    } else if (array[mid] > goal) {
      end = mid - 1
    } else if (array[mid] < goal) {
      start = mid + 1
    }
  }
  return NOT_FOUND
}

module.exports = BinarySearch

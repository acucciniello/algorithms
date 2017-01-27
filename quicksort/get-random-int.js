/**
 * Get a random integer between `min` and `max`.
 * @param {number} min - min number
 * @param {number} max - max number
 * @return {int} a random integer
 */

function GetRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

module.exports = GetRandomInt

/**
 * @param {number} n
 * @return {boolean}
 */
// First Approach - Using Two Pointers
// Time Complexity: O(n)
// Space Complexity: O(1)
// Example 1: n = 19
var isHappy = function (n) {
  let previousNum = n;
  let nextNum = 0;
  let hashMap = new Map();

  while (true) {
    // If remianing number is not 0
    if (previousNum % 10 !== 0) {
      // Add the square of the last digit to the next number. e.g. 19 % 10 = 9, 9^2 = 81
      nextNum += Math.pow(previousNum % 10, 2);
      // Remove the last digit from the number. e.g. 19 - 9 = 10
      previousNum -= previousNum % 10;

      // If the remaining number is 0
      if (previousNum === 0) {
        // If the next number is 1, return true
        if (nextNum === 1) {
          return true;
        }
        previousNum = nextNum;
        // If the next number has seen already in the hashmap, return false
        if (hashMap.has(nextNum)) {
          return false;
        } else {
          // Add the next number to the hashmap and reset the next number
          hashMap.set(nextNum);
          // Reset the next number
          nextNum = 0;
        }
      }
    } else {
      // If the remaining number is 0, divide the number by 10 to remove the last digit. e.g. 10 / 10 = 1
      previousNum = previousNum / 10;
    }
  }
};

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// First Approach - Using two pointers
// Time Complexity: O(n)
var twoSum = function (numbers, target) {
  let i = 0,
    j = numbers.length - 1;

  while (i < j) {
    if (numbers[j] + numbers[i] === target) {
      return [i + 1, j + 1];
    } else if (numbers[j] + numbers[i] > target) {
      j--;
    } else {
      i++;
    }
  }
};

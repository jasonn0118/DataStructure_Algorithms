/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// First Approach - Using Binary Search, Divide and Conquer
// Time Complexity: O(log n)
// Space Complexity: O(1)
var search = function (nums, target) {
  // Divide and Conquer
  let low = 0;
  let hi = nums.length - 1;

  while (low < hi) {
    let mid = low + Math.floor((hi - low + 1) / 2);
    if (target < nums[mid]) {
      hi = mid - 1;
    } else {
      low = mid;
    }
  }

  return nums[low] === target ? low : -1;
};

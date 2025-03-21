/**
 * @param {number[]} nums
 * @return {number}
 */
// First Approach - Using Binary Search
// Time Complexity: O(log n)
// Space Complexity: O(1)
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[left];
};

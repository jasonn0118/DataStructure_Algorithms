/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// First Approach - Using Binary Search, Divide and Conquer
// Time Complexity: O(log n)
// Space Complexity: O(1)
var search = function (nums, target) {
  let l = 0,
    r = nums.length - 1;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);

    if (nums[mid] === target) return mid;

    // Check if left half is sorted
    if (nums[l] <= nums[mid]) {
      // Check if target is in left half
      if (nums[l] <= target && target < nums[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[r]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }

  return -1;
};

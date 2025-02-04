/**
 * @param {number[]} nums
 * @return {string[]}
 */
// First Approach - Using Two Pointers
// Time Complexity: O(n)
// Space Complexity: O(1)
var summaryRanges = function (nums) {
  // Edge case
  if (!nums.length) return nums;
  if (nums.length === 1) return [nums[0].toString()];

  let startPointer = nums[0];
  let endPointer = nums[0];
  let result = new Array();

  for (let i = 1; i <= nums.length; i++) {
    if (nums[i] - endPointer === 1) {
      // If the difference is 1, move the endPointer to the current number
      endPointer = nums[i];
    } else {
      // If the difference is not 1, add the range to the result array
      if (startPointer === endPointer) {
        result.push(`${startPointer.toString()}`);
      } else {
        result.push(`${startPointer.toString()}->${endPointer.toString()}`);
      }
      // Reset the pointers to the current number
      startPointer = nums[i];
      endPointer = nums[i];
    }
  }

  return result;
};

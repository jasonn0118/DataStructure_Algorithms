/**
 * @param {number[]} nums
 * @return {number}
 */

// 1st approach.
var missingNumber = function (nums) {
  let totalSumStartPoint = nums.length;
  for (let i = 0; i < nums.length; i++) {
    totalSumStartPoint += i;
    totalSumStartPoint -= nums[i];
  }

  return totalSumStartPoint;
};

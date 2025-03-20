/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// First Approach - Using Two Pointers
// Time Complexity: O(n^2)
// Space Complexity: O(n)
var threeSum = function (nums) {
  let result = [];
  nums.sort((a, b) => a - b);

  for (let f = 0; f < nums.length - 2; f++) {
    if (nums[f] > 0) break;
    if (f != 0 && nums[f] === nums[f - 1]) {
      continue;
    }
    let i = f + 1,
      j = nums.length - 1;

    while (i < j) {
      const list = [nums[f], nums[i], nums[j]];
      const sumNum = nums[f] + nums[i] + nums[j];
      if (sumNum === 0) {
        result.push(list);
        i++;
        while (nums[i] === nums[i - 1] && i < j) {
          i++;
        }
      } else if (sumNum < 0) {
        i++;
      } else {
        j--;
      }
    }
  }
  return result;
};

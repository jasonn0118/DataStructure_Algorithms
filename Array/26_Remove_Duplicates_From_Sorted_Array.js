/**
 * @param {number[]} nums
 * @return {number}
 */

// 1st Approach
var removeDuplicates = function (nums) {
  if (nums.length === 1) return nums;

  let pointer = 0;

  while (pointer < nums.length - 1) {
    if (nums[pointer] === nums[pointer + 1]) {
      nums.splice(pointer, 1);
    } else {
      pointer++;
    }
  }

  return nums.length;
};

// Do it again using two pointers

removeDuplicates([1, 1, 2]); // [1, 2, '_']

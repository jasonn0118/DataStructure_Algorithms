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
// 2nd Approach
var removeDuplicates2 = function (nums) {
  let i = 1;

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[j - 1]) {
      nums[i] = nums[j];
      i++;
    }
  }

  return i;
};

removeDuplicates([1, 1, 2]); // [1, 2, '_']
removeDuplicates2([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]); // [0, 1, 2, 3, 4, '_', '_', '_', '_', '_']

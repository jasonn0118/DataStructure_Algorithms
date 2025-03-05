/**
 * @param {number[]} nums
 * @return {number}
 */
// First Approach - Using hash map
// Time Complexity: O(n)
var removeDuplicates = function (nums) {
  let numbers = {};

  for (let i = 0; i < nums.length; i++) {
    if (numbers[nums[i]] === 2) {
      nums.splice(i, 1);
      i--;
    } else if (numbers[nums[i]]) {
      numbers[nums[i]] += 1;
    } else {
      numbers[nums[i]] = 1;
    }
  }
};

// Second Approach - Using two pointers
// Time Complexity: O(n)
var removeDuplicates2 = function (nums) {
  let k = 2;

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[k - 2]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

var removeDuplicates3 = function (nums) {
  let i = 0;

  for (let n of nums) {
    if (i < 2 || n > nums[i - 2]) {
      nums[i] = n;
      i++;
    }
  }
};

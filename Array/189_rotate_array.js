/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// First Approach - Using Stack
// Time Complexity: O(n)
var rotate = function (nums, k) {
  let stack = [];
  let restStack = [];
  let i = k % nums.length;

  while (i > 0 && nums.length) {
    stack.push(nums.pop());
    i--;
  }

  let currentNumsLen = nums.length - 1;
  for (let j = currentNumsLen; j >= 0; j--) {
    restStack.push(nums[j]);
    nums.pop();
  }

  while (stack.length || restStack.length) {
    if (stack.length) {
      nums.push(stack.pop());
    } else if (restStack.length) {
      nums.push(restStack.pop());
    }
  }
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Second Approach - Using Remainder.
// Time Complexity: O(n)
// Space Complexity: O(n)
var rotate2 = function (nums, k) {
  const n = nums.length;
  k = k % n;
  const rotated = new Array(n);

  for (let i = 0; i < n; i++) {
    rotated[(i + k) % n] = nums[i];
  }
  for (let j = 0; j < n; j++) {
    nums[j] = rotated[j];
  }
};

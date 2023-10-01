// 1st approach.
var buildArray = function (nums) {
  if (nums.length === 1) {
    let arr = [];
    arr.push(nums[nums[0]]);
    return arr;
  } else {
    let ans = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
      ans[i] = nums[nums[i]];
    }

    return ans;
  }
};

/**
 * Runtime 65ms,
 * Beats 70.60%of users with JavaScript
 * Memory 44.92 MB
 * Beats 90.25%of users with JavaScript
 */

// 2nd approach.
var buildArray2 = function (nums) {
  // Get rid of unnecessary code.
  let ans = new Array(nums.length);
  // Use javascript function to reduce code line.
  return nums.map((_, index) => (ans[index] = nums[nums[index]]));
};
/**
 * Runtime 51ms,
 * Beats 99.28%of users with JavaScript
 * Memory 45.78MB,
 * Beats 58.75%of users with JavaScript
 */

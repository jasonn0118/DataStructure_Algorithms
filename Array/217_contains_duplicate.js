/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Naive solution
function hasDuplicate(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
}

hasDuplicate([1, 2, 3, 1]); // true

/**
 * time complexity is O(n^2)
 * space complexity is O(1)
 */

// Better solution
function hasDuplicate2(nums) {
  const setValue = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (setValue.has(nums[i])) {
      return true;
    } else {
      setValue.add(nums[i]);
    }
  }
  return false;
}
/**
 * time complexity is O(n)
 * space complexity is O(n)
 */

// Another solution
function hasDuplicate3(nums) {
  const setSize = new Set(nums).size;
  return nums.length !== setSize;
}
/**
 * time complexity is O(n)
 * space complexity is O(n)
 */

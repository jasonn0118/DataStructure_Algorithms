/**
 * @param {number[]} nums
 * @return {number}
 */
// First Approach - Using HashSet
// Time Complexity: O(n)
// Space Complexity: O(n)
var findDuplicate = function (nums) {
  let hash = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (hash.has(nums[i])) {
      return nums[i];
    } else {
      hash.add(nums[i]);
    }
  }
};

// However, this question requires to solve the problem without modifying the array and using only constant extra space.
// Second Approach - Floyd's Tortoise and Hare (Cycle Detection) - Find the beggining of the cycle.
// Time Complexity: O(n)
// Space Complexity: O(1)
var findDuplicate2 = function (nums) {
  let tortoise = nums[0];
  let hare = nums[0];

  // Find the first intersection point of the two pointers.
  do {
    tortoise = nums[tortoise];
    hare = nums[nums[hare]];
  } while (tortoise !== hare);

  // Reset the tortoise pointer to the beginning of the array.
  let tortoise2 = nums[0];

  while (tortoise !== tortoise2) {
    tortoise = nums[tortoise];
    tortoise2 = nums[tortoise2];
  }

  return tortoise;
};

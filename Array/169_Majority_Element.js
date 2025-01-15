/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // Naive solution - 1st approach
  if (nums.length === 1) {
    return nums[0];
  }
  let targetObj = { target: null, maxCount: 0 };
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i])) {
      const newCount = map.get(nums[i]) + 1;
      map.set(nums[i], newCount);
      if (newCount > targetObj.maxCount) {
        targetObj = {
          target: nums[i],
          maxCount: newCount,
        };
      }
    } else {
      map.set(nums[i], 1);
      if (targetObj.maxCount < 1) {
        targetObj.target = nums[i];
        targetObj.maxCount = 1;
      }
    }
  }
  console.log(targetObj);

  return targetObj.target;
};

// 2nd approach - Simpler solution
var majorityElement2 = function (nums) {
  let hash = {};
  let targetVal = undefined;
  let maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = 1 + (hash[nums[i]] || 0);

    if (hash[nums[i]] > maxCount) {
      maxCount = hash[nums[i]];
      targetVal = nums[i];
    }
  }

  return targetVal;
};

// 3rd approach - Using Boyer-Moore Voting Algorithm
var majorityElement3 = function (nums) {
  let count = 0;
  let selected = null;
  for (let n of nums) {
    if (count === 0) {
      selected = n;
    }
    if (n === selected) {
      count += 1;
    } else {
      count -= 1;
    }
  }
  return selected;
};

// majorityElement([3, 2, 3]); // 3

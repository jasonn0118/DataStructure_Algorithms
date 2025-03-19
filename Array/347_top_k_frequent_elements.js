/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// First Approach - Using HashTable and Sorting
// Time Complexity: O(n log n)
// Space Complexity: O(n)
var topKFrequent = function (nums, k) {
  let map = new Map();
  // Map to hashTable
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      let temp = map.get(nums[i]);
      map.set(nums[i], temp + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
  // Sort the map by value
  const sortedArr = [...map.entries()].sort((a, b) => a[1] - b[1]);

  let result = [];

  // Get the k most frequent elements
  for (let i = 0; i < k; i++) {
    let output = sortedArr.pop();
    result.push(output[0]);
  }

  return result;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// Second Approach - Using HashTable and Bucket Sort
// Time Complexity: O(n)
// Space Complexity: O(n)
var topKFrequent = function (nums, k) {
  let map = new Map();
  let bucket = new Array(nums.length);
  // Map to hashTable
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      let temp = map.get(nums[i]);
      map.set(nums[i], temp + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
  // Add the elements to the bucket(count) array
  for (let [num, count] of map) {
    bucket[count] = (bucket[count] || new Set()).add(num);
  }

  let result = [];
  for (let i = bucket.length; i >= 0; i--) {
    if (bucket[i]) {
      result.push(...bucket[i]);
    }
    if (result.length >= k) break;
  }

  return result;
};

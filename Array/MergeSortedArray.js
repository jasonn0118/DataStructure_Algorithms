// https://leetcode.com/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

/**
 * Consideration
 * 1. What if m or n is 0
 */

// 1st Approach

var merge = function (nums1, m, nums2, n) {
  let lastIndex = m + n - 1;
  let nums1Start = m - 1;
  let nums2Start = n - 1;

  while (nums1Start >= 0 && nums2Start >= 0) {
    if (nums1[nums1Start] >= nums2[nums2Start]) {
      nums1[lastIndex] = nums1[nums1Start];
      nums1Start--;
    } else {
      nums1[lastIndex] = nums2[nums2Start];
      nums2Start--;
    }
    lastIndex--;
  }
  while (nums1Start >= 0) {
    nums1[lastIndex--] = nums1[nums1Start--];
  }
  while (nums2Start >= 0) {
    nums1[lastIndex--] = nums2[nums2Start--];
  }
};

/**
 * Runtime 54ms,
 * Beats 45.24%of users with JavaScript
 * Memory 41.8 MB
 * Beats 66.78%of users with JavaScript
 */

//   2nd Approach
var merge2 = function (nums1, m, nums2, n) {
  let lastIndex = m + n - 1;
  let nums1Start = m - 1;
  let nums2Start = n - 1;

  while (nums2Start >= 0) {
    if (nums1Start >= 0 && nums1[nums1Start] >= nums2[nums2Start]) {
      nums1[lastIndex] = nums1[nums1Start];
      nums1Start--;
    } else {
      nums1[lastIndex] = nums2[nums2Start];
      nums2Start--;
    }
    lastIndex--;
  }
};

/**
 * Runtime 47ms,
 * Beats 84.26%of users with JavaScript
 * Memory 41.89 MB
 * Beats 56.91%of users with JavaScript
 */

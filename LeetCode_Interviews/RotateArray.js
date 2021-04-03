// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/
var rotate = function(nums, k) {
    const arrayChunk = nums.splice(-k % nums.length);
    nums.unshift(...arrayChunk);
};
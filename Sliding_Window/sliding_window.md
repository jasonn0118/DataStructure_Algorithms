# Sliding Window
## When to use it?
1. Linear data structures(arrays, lists, strings)
2. Must scan through a subarray or substring
3. When the subarray must satisfy some condition(shortest, longest, min, max)
4. Improve time complexity from `O(n^2)` to `O(n)`

## Technique
In the sliding window, you have `2 pointers`, such as `i` and `j`. 

1. Move `j` as far as you can until your condition is no longer valid.
2. Move the `i` pointer closer to `j` until the condition is valid again to shrink the window.

At every iteration, keep track of the min/max length of the subarray for the result.
Without the sliding window technique, we would need to use a double loop resulting in `O(n^2)` time. The sliding window is `O(n)` time complexity.

## Dynamic Sliding Window
In the dynamic sliding window, the size of the window(subarray between `i` and `j`) changes throughout the algorithm.

## Fixed Sliding Window
In the fixed sliding window, the size of the window is the same length throughout the algorithm. 

## LeetCode Questions
[3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/description/)

[424. Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/description/)

[1876. Substrings of Size Three with Distinct Characters](https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/description/)

[76. Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/description/)
/**
 * @param {string} s
 * @return {number}
 */
// First Approach - Using hash map with two pointers
// Time Complexity: O(n)
var lengthOfLongestSubstring = function (s) {
    let i = 0;
    let maxLength = 0;
    let dup = {};

    for (let j = 0; j < s.length; j++) {
        while (dup[s[j]]) {
            delete dup[s[i]];
            i++;
        }

        dup[s[j]] = true;
        maxLength = Math.max(maxLength, j - i + 1);
    }
    return maxLength;

};

// Second Approach - Using hash map with Sliding Window
// Time Complexity: O(n)
var lengthOfLongestSubstring2 = function (s) {
    let maxLength = 0;
    let dup = {};

    for (let i = 0, j = 0; j < s.length; j++) {
        if (dup[s[j]]) {
            i = Math.max(dup[s[j]], i);
        }

        maxLength = Math.max(maxLength, j - i + 1);
        dup[s[j]] = j + 1;
    }
    return maxLength;
};
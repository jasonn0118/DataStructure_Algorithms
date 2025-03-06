# Two Pointers
## When to use it?
1. Linear data structures(arrays, lists, strings)
2. When you need to scan the start and end of a list
3. When you have a sorted list and need to find pairs
4. Removing duplicates or filtering

## Technique
Instead of scanning all possible subarrays or substrings, use two pointers `i` and `j` at the ends of a string or sorted array to be clever how you increment `i` or decrement `j` as you scan the input. This will lower your time complexity from `O(n^2)` to `O(n)`.

## Code Template
```javascript
function twoPointerTemplate(input) {
    let i = 0;
    let j = input.length -1;
    let result;

    // Iterate while the pointers do not cross.
    while(i < j){
        // Process the elements at both pointers

        // Adjust the pointers based on specific conditions
        // i++ or j--

        // Break or continue based on a condition if required
    }

    return result;
}
```

## Leetcode Questions
[125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/description/)
[15. 3 Sum](https://leetcode.com/problems/3sum/description/)
[11. Container With Most Water](https://leetcode.com/problems/container-with-most-water/description/)
[167. Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/)
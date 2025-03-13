# Binary Search

## When to Use it?
1. Input is `sorted` and you need to find a number.
2. Finding the position of insertion in a `sorted` list.
3. Handling duplicates in `sorted` arrays.
4. Searching in rotated `sorted` arrays.

## Technique
1. Start left and right pointers at indices 0 and n - 1
2. Find the mid point and see if that is equal to, less than, or greater than the target.
3. if `nums[mid]` > target, go left by moving the `right` pointer to `mid - 1` or if `nums[mid]` < target, go right by moving the `left` pointer to `mid + 1`.

## Code Example
1. Neutral Midpoint
    - Default for binary search.
	- Works well for general find element operations.
``` javascript
let mid = Math.floor((hi + low) / 2);
```

2.	Left-Biased Midpoint
    - Used when updating hi = mid (moving left).
    - Helps find the first occurrence of a target.
```javascript
let mid = low + Math.floor((hi - low) / 2);
```

3. Right-Biased Midpoint
    - Used when updating low = mid (moving right).
	- Helps find the last occurrence of a target.
```javascript
let mid = low + Math.floor((hi - low + 1) / 2);
```
var searchInsert = function(nums, target) {
    // Naive thought - divided and conquer.
    
    let start = 0; // 0
    let end = nums.length - 1; // 1
    let mid = Math.floor((start + end) / 2); // 0
    
    while(start < end) {
        if(nums[mid] === target) { // 1 === 3
            break;
        } else if(nums[mid] < target) {// 1 < 0
            start = mid + 1; 
        } else { // 1 > 0
            end = mid - 1; // 0
        }
        mid = Math.floor((start + end) / 2);

    }
    
    if(nums[mid] < target || mid < 0) {
        console.log(mid + 1);
        return mid + 1;
    } else {
        console.log(mid);
        return mid;
    }
    
};

//Better approach

var searchInsert2 = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    
    while(start <= end) {
        let mid = Math.floor((start + end) / 2);
        
        if(nums[mid] === target) {
            return mid;
        } else if(nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    
    return start;
};

searchInsert2([1,3], 0);
/**
 * length = 7 
 * 7/2 = 3
 * 2 arrays = [1,2,4] [5,7,8,10]
 * if first array last index is less than target, then search in second array. 
 * if first array last index is greater than target, then search in first array
 * if first array last index is equal to target, then return index
 * 
 */


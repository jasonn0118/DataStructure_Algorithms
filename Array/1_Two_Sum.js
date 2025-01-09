function twoSumNaive(nums, target) {
        // Naive solution O(n^2)
        let firstPointerIndex, secondPointerIndex;

        for(let i = 0; i < nums.length; i++){
            firstPointerIndex = i;
            for(let j = i + 1; j < nums.length; j++){
                console.log({firstPointerIndex, j});
                if(nums[j] === target - nums[firstPointerIndex]){
                    secondPointerIndex = j;
                    return [firstPointerIndex, secondPointerIndex];
                }
            }
        }
}

function twoSum(nums, target) {
    // Optimal solution O(n)
    // Create a map to store the numbers and their indexes
    let numsMap = new Map();


    for(let i = 0; i < nums.length; i++){
        // Calculate the difference between the target and the current number
        let diff = target - nums[i];
        // If the difference is in the map, return the indexes
        if(numsMap.has(diff)){
            return [numsMap.get(diff), i];
        }
        // Otherwise, add the number to the map for the reference
        numsMap.set(nums[i], i);
    }
}

twoSum([4,5,6], 10);
twoSum([2,7,11,15], 9);
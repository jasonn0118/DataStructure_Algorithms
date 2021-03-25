//https://leetcode.com/problems/implement-queue-using-stacks/

/**
 * Initialize your data structure here.
 */
 var MyQueue = function() {
    this.array1 = [];
    this.array2 = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
   const arr2_length = this.array2.length;
    for(let i = 0; i < arr2_length; i++) {
        this.array1.push(this.array2.pop());
    }
    this.array1.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    const arr1_Length = this.array1.length;
    
    for(let i = 0; i < arr1_Length; i++){
        this.array2.push(this.array1.pop());
    }
    const targetValue = this.array2.pop();
    

    return targetValue;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(this.array1.length > 0) {
        return this.array1[0];
    }
    return this.array2[this.array2.length-1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if(!this.array1.length && !this.array2.length){
        return true;
    }else{
        return false;
    }
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
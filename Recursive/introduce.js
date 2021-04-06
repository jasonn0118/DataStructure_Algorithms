/**
 * 1. Identify the base case
 * 2. Identify the recursive case
 * 3. Get closer and closer and return when needed. Usually you have 2 returns.
 */

//Then what is pros and cons on the recursion and Iteration?
/**
 * Recursion
 * Pros: Readability, DRY(Code is simple).
 * Cons: Large Stack.
 * 
 * Iteration
 * Pros: 
 * Cons: Sometimes it is hard to read and longer code than Recursion
 */

// Many divide and Conquer using Recursion.

// Example
 var counter = 0;

 function inception() {
   console.log(counter)
   //Always make sure return.
   if(counter > 3) {
     return 'done';
   }
 
   counter++;
   //You need return here, otherwise it piles up on the stack. and return 'undefined'
   return inception();
 }
 
 inception();
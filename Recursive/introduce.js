/**
 * 1. Identify the base case
 * 2. Identify the recursive case
 * 3. Get closer and closer and return when needed. Usually you have 2 returns.
 */

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
// Google Question
// Check very first recurring character.
// Given an array = [2,5,1,2,3,5,1,2,4];
// It should return 2.

// Example 2)
// Given an array = [2,1,1,2,3,5,1,2,4];
// It should return 1.

function recurringCheck(array){
    var lengthOfArray = array.length;
  
    if(lengthOfArray<=0 || !Array.isArray(array)){
      return undefined;
    }
    for(var i = 0; i < lengthOfArray; i++){
      for(var j = i+1; j < lengthOfArray; j++) {
        if(array[i] === array[j]){
          return array[i];
        }
      }
    }
    return undefined;
  } //O(n^2)
  
  
  function recurringCheckHash(array) {
    var map = {};
    var lengthOfArray = array.length;
  
    for(var i = 0; i<lengthOfArray; i++){
      if(map[array[i]] !== undefined ){
        return array[i];
      } else {
        map[array[i]] = i;
      }
    }
  
    return undefined;
  }//O(n)
  
  var testArray = [2,1,1,2,3,5,1,2,4];
  var testArray2 = [2,5,1,2,3,5,1,2,4];
  recurringCheckHash(testArray2);
// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  //code here
  var nums = number;

  if (number === 1) {
    return number;
  }
  number--;
  return nums * findFactorialRecursive(number);
}

function findFactorialIterative(number) {
  //code here
  var result = 1;
  for (let i = number; i >= 1; i--) {
    result *= i;
  }
  return result;
}

//Solution from lecture
//Time complexity = O(n)
function findFactorialIterativeSolution(number) {
  //code here
  var answer = 1;
  if (number === 2) {
    answer = 2;
  }
  for (let i = 2; i <= number; i++) {
    result *= i;
  }
  return answer;
}
//Time complexity = O(n)
function findFactorialRecursiveSolution(number) {
  //code here
  if (number === 2) {
    return 2;
  }
  return number * (findFactorialIterative - 1);
}

findFactorialRecursive(5);

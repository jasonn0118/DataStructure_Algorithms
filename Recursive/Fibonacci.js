// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n) {
  //code here;
  let fiboArr = new Array();
  fiboArr[0] = 0;
  fiboArr[1] = 1;

  for (let i = 2; i <= n; i++) {
    fiboArr[i] = fiboArr[i - 1] + fiboArr[i - 2];
  }
  return fiboArr[n];
}
fibonacciIterative(6);

function fibonacciRecursive(n) {
  //code here;
  if (n <= 1) {
    return n;
  }
  return fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1);
}

fibonacciRecursive(6);

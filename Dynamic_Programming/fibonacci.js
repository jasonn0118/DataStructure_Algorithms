function fibonacci(n) {
  // Time Complexity: O(2^n)
  if (n <= 1) {
    return n;
  }
  calculations++;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// console.log(fibonacci(10));

function fibonacciMemoization() {
  // Time Complexity: O(n)
  let cache = {};
  return function fib(n) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n <= 1) {
        return n;
      }
      cache[n] = fib(n - 1) + fib(n - 2);
      return cache[n];
    }
  };
}

const memoized = fibonacciMemoization();
console.log(memoized(10)); // 55

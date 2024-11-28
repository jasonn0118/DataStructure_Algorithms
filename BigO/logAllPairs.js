const boxes = [1, 2, 3, 4, 5];

function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    // O(n)
    for (let j = 0; j < array.length; j++) {
      // O(n)
      console.log(array[i], array[j]); // O(1)
    }
  }
}

// O(n) * O(n) = O(n^2) --> Quadratic Time

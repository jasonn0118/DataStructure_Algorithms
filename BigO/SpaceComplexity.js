// Space Complexity perspective:

function booo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log('booo!');
  }
}

booo([1, 2, 3, 4, 5]); // O(1) --> Constant Space Complexity

function arrayOfHiNTimes(n) {
  let hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = 'hi';
  }
  return hiArray;
}

arrayOfHiNTimes(6); // O(n) --> Linear Space Complexity

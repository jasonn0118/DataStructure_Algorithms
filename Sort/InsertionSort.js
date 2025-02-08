const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// Insetion Sort
// Time Complexity: O(n^2)
//  Space Complexity: O(1)
function InsertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = current;
  }

  return array;
}

// Another way to write the function
// Time Complexity: O(n^2)
// Space Complexity: O(1)
function InsertionSort2(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[0]) {
      // Move the number to the first position
      array.unshift(array.splice(i, 1)[0]);
    } else {
      for (let j = 1; j < i; j++) {
        if (array[i] > array[j - 1] && array[i] < array[j]) {
          // Move the number to the correct position
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }
}

InsertionSort2(numbers);
console.log(numbers);

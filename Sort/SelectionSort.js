const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// Selection Sort
// Time Complexity: O(n^2)
// Space Complexity: O(1)
function SelectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    let temp = array[i];

    for (let j = i + 1; j < array.length; j++) {
      if (array[min] > array[j]) {
        min = j;
      }
    }

    array[i] = array[min];
    array[min] = temp;
  }

  return array;
}

SelectionSort(numbers);
console.log(numbers);

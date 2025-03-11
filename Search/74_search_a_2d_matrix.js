/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// First Approach - Using Binary Search, Divide and Conquer
// Time Complexity: O(log (m * n))
var searchMatrix = function (matrix, target) {
  let matrixL = 0,
    matrixR = matrix.length - 1;
  while (matrixL < matrixR) {
    let lListLen = matrix[matrixL].length - 1;

    if (matrix[matrixL][lListLen] < target) {
      matrixL++;
    }
    if (matrix[matrixR][0] > target) {
      matrixR--;
    }
  }

  let l = 0;
  let r = matrix[matrixL].length - 1;

  while (l < r) {
    let mid = l + Math.floor((r - l + 1) / 2);
    if (matrix[matrixL][mid] > target) {
      r = mid - 1;
    } else {
      l = mid;
    }
  }

  return matrix[matrixL][l] === target ? true : false;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// First Approach - Using BFS (Iterative)
// Time Complexity: O(n) - where n is the number of nodes in the binary tree.
var averageOfLevels = function (root) {
  let queue = [root];
  let result = [];

  while (queue.length > 0) {
    let currentLevelLength = queue.length;
    
    let sum = 0;

    for (let i = 0; i < currentLevelLength; i++) {
      let currentNode = queue.shift();
      sum += currentNode.val;
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    result.push(sum / currentLevelLength);
  }
  return result;
};

// Second Approach - Using BFS (Recursive)
// Time Complexity: O(n) - where n is the number of nodes in the binary tree.
var averageOfLevels2 = function (root) {
  let result = [];
  const bfs = (queue) => {
    if (!queue.length) {
      return;
    }
    let currentLevelLength = queue.length;
    let sum = 0;

    for (let i = 0; i < currentLevelLength; i++) {
      let currentNode = queue.shift();
      sum += currentNode.val;
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    result.push(sum / currentLevelLength);
    bfs(queue);
  };
  bfs([root]);
  return result;
};

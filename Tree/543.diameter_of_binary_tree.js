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
 * @return {number}
 */
// First Approach - Using Recursion
// Time Complexity: O(n)
// Space Complexity: O(n) - The space complexity of the recursive stack is O(n) because the maximum depth of the recursion tree can go up to n.
var diameterOfBinaryTree = function (root) {
  let result = 0;
  const dfs = (root) => {
    if (!root) return 0;

    let left = dfs(root.left);
    let right = dfs(root.right);
    result = Math.max(result, left + right);
    return 1 + Math.max(left, right);
  };

  dfs(root);
  return result;
};

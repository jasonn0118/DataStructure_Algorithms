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
// Space Complexity: O(n)
var maxDepth = function (root) {
  if (!root) return 0;
  // Depth of the left subtree
  let Depth = 1 + Math.max(maxDepth(root.left), maxDepth(root.right));

  return Depth;
};

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
 * @return {TreeNode}
 */
// First Approach - Using Recursion
// Time Complexity: O(n)
// Space Complexity: O(n)
var invertTree = function (root) {
  if (!root) return root;

  let swapNode = root.left;
  root.left = root.right;
  root.right = swapNode;

  invertTree(root.left);
  invertTree(root.right);

  return root;
};

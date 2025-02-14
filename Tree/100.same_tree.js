/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// First Approach - Using Recursion
// Time Complexity: O(n)
// Space Complexity: O(h) where h is the height of the tree. In the worst case, the tree is linear and h = n.
var isSameTree = function (p, q) {
  if (!p && !q) return true;

  if (p && q && p.val === q.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }

  return false;
};

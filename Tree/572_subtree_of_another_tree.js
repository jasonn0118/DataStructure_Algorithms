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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
// First Approach - Using Recursion
// Time Complexity: O(m*n) - where m is the number of nodes in the main tree and n is the number of nodes in the subtree.
var isSubtree = function (root, subRoot) {
  return checkingTrees(root, subRoot);
};

const isSameTree = (currentNode, targetNode) => {
  if (!currentNode && !targetNode) return true;
  if (!currentNode || !targetNode) return false;
  if (currentNode.val !== targetNode.val) return false;

  return (
    isSameTree(currentNode.left, targetNode.left) &&
    isSameTree(currentNode.right, targetNode.right)
  );
};

const checkingTrees = (node, targetNode) => {
  if (!node) return false;
  if (isSameTree(node, targetNode)) return true;
  return (
    checkingTrees(node.left, targetNode) ||
    checkingTrees(node.right, targetNode)
  );
};

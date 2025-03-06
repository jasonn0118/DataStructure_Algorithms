/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// First Approach - Using while loop
var addTwoNumbers = function (l1, l2) {
  let total,
    carry = 0;
  let result = new ListNode();
  let currentNode = result;
  while (l1 || l2 || carry) {
    total = carry;
    if (l1) {
      total += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      total += l2.val;
      l2 = l2.next;
    }
    let digit = total % 10;
    carry = Math.floor(total / 10);
    currentNode.next = new ListNode(digit);
    currentNode = currentNode.next;
  }
  return result.next;
};

// TODO: Second Approach - Using recursion

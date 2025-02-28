/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// First Approach - Using Iteration
// Time Complexity: O(n) - where n is the number of nodes in the linked list.
var reverseList = function (head) {
  let node = null;

  while (head) {
    const temp = head.next;
    head.next = node;
    node = head;
    head = temp;
  }

  return node;
};

// Second Approach - Using Recursion
// Time Complexity: O(n) - where n is the number of nodes in the linked list.
var reverseList2 = function (head) {
  if (!head || !head.next) return head;

  const reversedList = reverseList2(head.next);
  head.next.next = head;
  head.next = null;

  return reversedList;
};
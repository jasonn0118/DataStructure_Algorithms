/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
// First Approach - Using Stack
// Time Complexity: O(n)
// Space Complexity: O(n)
var reorderList = function (head) {
  let { stack } = traverseList(head);
  let result = new ListNode();
  let len = Math.floor(stack.length / 2);
  let rc = result;
  let c = head;
  for (let i = 0; i < len; i++) {
    rc.next = c;
    c = c.next;
    rc.next.next = stack.pop();
    rc = rc.next.next;
  }
  lastStack = stack.pop();

  if (c.val === lastStack.val) {
    rc.next = lastStack;
  }
};

function traverseList(head) {
  let ptr = head;
  let stack = [];

  while (ptr) {
    stack.push(new ListNode(ptr.val));
    ptr = ptr.next;
  }
  return { stack };
}

// Second Approach - Using two pointers
// Time Complexity: O(n)
// Space Complexity: O(1)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let secondHalf = slow.next;
  slow.next = null;
  let currentNode = null;

  while (secondHalf) {
    let temp = secondHalf.next;
    secondHalf.next = currentNode;
    currentNode = secondHalf;
    secondHalf = temp;
  }

  let firstHalf = head;
  secondHalf = currentNode;

  while (secondHalf) {
    let temp1 = firstHalf.next;
    let temp2 = secondHalf.next;

    firstHalf.next = secondHalf;
    secondHalf.next = temp1;
    firstHalf = temp1;
    secondHalf = temp2;
  }
};

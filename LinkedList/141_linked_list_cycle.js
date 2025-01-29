/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// First Approach - Using Two Pointers
var hasCycle = function (head) {
  let fastPointer = head;
  let slowPointer = head;

  while (fastPointer && fastPointer.next !== null) {
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;

    if (fastPointer === slowPointer) return true;
  }
  return false;
};

// Second Approach - Using HashTable
var hasCycle2 = function (head) {
  let hashMap = new Map();
  let currentNode = head;

  while (currentNode) {
    if (hashMap.has(currentNode)) {
      return true;
    }
    hashMap.set(currentNode, 1);
    currentNode = currentNode.next;
  }
  return false;
};

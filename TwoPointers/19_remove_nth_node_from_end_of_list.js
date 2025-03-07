/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// First Approach - Using two pointers
// Time Complexity: O(n)
var removeNthFromEnd = function (head, n) {
  let dummy = head;
  let lastIndex = 1;
  let prev = head,
    next = head;
  let prevIndex = 0,
    nextIndex = 0;

  while (dummy && dummy.next) {
    dummy = dummy.next;
    lastIndex++;
  }

  const targetIndex = lastIndex - n;

  while (nextIndex < targetIndex + 1) {
    if (prevIndex < targetIndex - 1) {
      prevIndex++;
      prev = prev.next;
    }
    if (nextIndex < targetIndex + 1) {
      nextIndex++;
      next = next.next;
    }
  }

  if (targetIndex === 0) {
    head = next;
  } else {
    prev.next = next;
  }

  return head;
};

// Second Approach - Two pointers with dummy node
// Time Complexity: O(n)
var removeNthFromEnd2 = function (head, n) {
  let dummy = new ListNode(0, head);
  let prev = dummy,
    next = dummy;

  for (let i = 1; i <= n + 1; i++) {
    next = next.next;
  }

  while (next) {
    prev = prev.next;
    next = next.next;
  }

  prev.next = prev.next.next;

  return dummy.next;
};

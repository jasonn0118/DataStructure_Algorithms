# In Place Linked List Reversal
## When to use it?
1. Reverse a linked list in 1 pass and O(1) space
2. Reverse a specific portion of a linked list
3. Reverse nodes in groups of k

## Technique
1. Use two pointers, `prev` and and `ptr` which point to the previous and current nodes. To reverse a linked list, `ptr.next` = `prev`.
2. Move `prev` to `ptr` and move `ptr` to the next node.
3. At the end of the algorithm, `prev` will point to the head of the reversed list.

## Coding template
```javascript
function reverseLinkedList(head){
    let prev;
    let ptr = head;

    while(ptr) {
        // Save the next node
        let nextNode = ptr.next;

        // Reverse the current node's pointer
        ptr.next = prev;

        // Move the pointers one step forward
        prev = ptr;
        ptr = nextNode;
    }

    return prev;
}
```

## Leetcode Questions
[206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/description/)
[143. Reorder List](https://leetcode.com/problems/reorder-list/description/)
[25. Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/description/)
// 10-->5-->16
// let myLinkedList = {
//   head: {
//     value: 10,
//     nextNode: {
//       value: 5,
//       nextNode: {
//         value: 16,
//         nextNode: null
//       }
//     }
//   }
// }

class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}
//Singly linked list:
/**
 * Pros: It needs less memory space than doubly linkedList.
 * Cons: It cannot traverse reversely. (No Backward. If you miss the head node, you are completely lost a list. )
 */
class LinkedList {
  // Instantiated.
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    //Add at the end.
    //Code here
    const newNode = {
      value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    //Add at the beginning
    const newHeadNode = {
      value,
      next: this.head,
    };
    this.head = newHeadNode;
    this.length++;
    return this;
  }

  printList() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(arr);
    return arr;
  }

  insert(index, value) {
    // Validation for index is bigger than current linkedList length.
    if (index >= this.length) {
      return this.append(value);
    }

    let pointer = 0;
    let currentNode = this.head;
    while (pointer < index - 1) {
      currentNode = currentNode.next;
      pointer++;
    }

    const newNode = {
      value,
      next: currentNode.next,
    };
    currentNode.next = newNode;
    this.length++;
    return this;
  }

  // From Lecture solution.
  insert2(index, value) {
    // Time complexity: O(n)
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = {
      value,
      next: null,
    };
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;

    return this.printList();
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter != index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    // Time complexity: O(n)
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = holdingPointer.next;
    this.length--;
    return this.printList();
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }

    let firstItem = this.head;
    this.tail = this.head;
    let secondItem = firstItem.next;

    while (secondItem) {
      const holdItem = secondItem.next;
      secondItem.next = firstItem;
      firstItem = secondItem;
      secondItem = holdItem;
    }
    this.head.next = null;
    this.head = firstItem;

    return this.printList();
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(15);
myLinkedList.append(30);
myLinkedList.prepend(1);
myLinkedList.printList();
myLinkedList.insert2(2, 16);
myLinkedList.insert2(999, 23);
myLinkedList.remove(1);
myLinkedList.printList();
myLinkedList.reverse();

console.log(myLinkedList);

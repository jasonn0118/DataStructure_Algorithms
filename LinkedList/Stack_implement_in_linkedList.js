class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    var newNode = new Node(value);
    if (this.length === 0) {
      this.bottom = newNode;
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.top) {
      return null;
    }
    //If we have just one value in the linkedList.
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    //If we want to keep track the target value in memory.
    //otherwise no way to find this target in JavaScript.
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;

    return holdingPointer;
  }
  isEmpty() {
    if (this.length === 0) {
      return true;
    }
    return false;
  }
}

const myStack = new Stack();
myStack.push("Google");
myStack.push("Udemy");
myStack.push("Discord");
myStack.pop();

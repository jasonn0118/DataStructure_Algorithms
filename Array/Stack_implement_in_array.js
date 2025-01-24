class Stack {
  constructor() {
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  push(value) {
    this.array = [...this.array, value];
    return this;
  }
  pop() {
    const lastItem = this.array[this.array.length - 1];
    this.array = this.array.slice(0, this.array.length - 1);
    return lastItem;
  }
  isEmpty() {
    if (this.array.length === 0) {
      return true;
    }
    return false;
  }
}

const myStack = new Stack();
myStack.push("google");
myStack.push("udemy");
myStack.push("Discord");
myStack.pop();
myStack.peek();
console.log(myStack);

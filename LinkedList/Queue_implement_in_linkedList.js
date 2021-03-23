class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() {
      return this.first;
    }
    enqueue(value){
      const newNode = new Node(value);
      if(this.length===0){
        this.first = newNode;
        this.last = newNode;
      }
      else{
        const currentNode = this.last;
        this.last = newNode;
        currentNode.next = this.last;
      }
  
      this.length++;
      return this;
    }
    dequeue(){
      const currentNode = this.first;
      if(this.length === 0){
        return null;
      }
      if(this.first === this.last) {
        this.last = null;
      }
      this.first = this.first.next;
  
      this.length--;
      return currentNode;
    }
    //isEmpty;
  }
  
  const myQueue = new Queue();
  myQueue.enqueue('Joy');
  myQueue.enqueue('Matt');
  myQueue.enqueue('Pavel');
  myQueue.enqueue('Samir');
  
  myQueue.dequeue();
  myQueue.dequeue();
  // myQueue.dequeue();
  
  
  myQueue.peek();
  console.log(myQueue)
  
  
  //Joy--Matt--Pavel--Samir
  
  
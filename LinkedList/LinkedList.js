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
    constructor(value){
      this.value = value,
      this.next = null
    }
}
//Singly linked list: 
/**
 * Pros: It needs less memory space than doubly linkedList.
 * Cons: It cannot traverse reversely. (No Backward. If you miss the head node, you are completely lost a list. )
 */
class LinkedList {
    //Instanciated.
    constructor(value) {
      this.head = {
        value: value,
        next: null
      };
      this.tail = this.head;
      this.length = 1;
    }
  
    append(value) {//Add at the end.
      //Code here
      const newNode = new Node(value);
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
  
      return this;
    }
  
    prepend(value) { //Add at the beginning
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
  
      return this;
    }
    //my solution
    insert(index, value) { //Add at the middle of Nodes.
      if(index >= this.length) {
        this.append(value);
        return this.printList();
      }
  
      const newNode = new Node(value);
      let aftNode = this.head;
      let preNode = this.head;
  
      for(let i = 0; i < this.length; i++) {
        if(index === 0) {
          this.prepend(value);
          return this.printList();
        }
        
        if(index !== 0 && index === i) {
          newNode.next = aftNode;
          preNode.next = newNode;
          return this.printList();
        }
        preNode = aftNode;
        aftNode = aftNode.next;
      }
    }
    //Solution from the lecture
    insert1(index, value) { //O(n)
      if(index >= this.length) {
        this.append(value);
        return this.printList();
      }
      if(index === 0) {
          this.prepend(value);
          return this.printList();
        }
      const newNode = new Node(value);
      const leader = this.traverseToIndex(index-1);
      const holdingPointer = leader.next;
  
      leader.next = newNode;
      newNode.next = holdingPointer;
  
      return this.printList();
    }
  
    traverseToIndex(index) {
      let counter = 0;
      let currentNode = this.head;
      while(counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
    
    //Print List values only.
    printList() {
      const array = [];
      let currentNode = this.head;
      while(currentNode !== null) {
        array.push(currentNode.value);
        currentNode = currentNode.next;
      }
      return array;
    }
  
    remove(index) {
      if(index === 0) {
        this.head = this.traverseToIndex(index+1);
        return this.printList();
      }
      if(index >= this.length) {
        this.tail = this.traverseToIndex(index-1);
        this.tail.next = null;
        return this.printList();
      }
      const preNode = this.traverseToIndex(index -1);
      const aftNode = this.traverseToIndex(index +1);
      preNode.next = aftNode;
      this.length--;
      return this.printList();
    }
  
  }
  
  let myLinkedList = new LinkedList(10);
  myLinkedList.append(5);
  myLinkedList.append(16);
  myLinkedList.prepend(1);
  myLinkedList.insert1(5, 99);
  myLinkedList.printList();
  myLinkedList.remove(2);
  
  // console.log(myLinkedList);
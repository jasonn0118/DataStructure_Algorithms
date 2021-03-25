class Node {
    constructor(value){
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  
  class BinarySearchTree {
    constructor(){
      this.root = null;
    }
    insert(value){
      const targetNode = new Node(value);
  
      //Code here
      if(!this.root){
        this.root = targetNode;
      } else {
        let currentNode = this.root;
        //Divide & Concour
        while(true){
          if(value < currentNode.value) {
            //Left
            if(!currentNode.left){
              currentNode.left = targetNode;
              return this;
            } 
            currentNode = currentNode.left
          }
          else {
            //right
            if(!currentNode.right){
              currentNode.right = targetNode;
              return this;
            }
            currentNode = currentNode.right;
          }
        }
      }
    }
    lookup(value){
      //Code here
      if(!this.root) {
        return false;
      }
      else {
        let currentNode = this.root;
        while(currentNode) {
          if(currentNode.value > value) {
            //left
            currentNode = currentNode.left;
          } else if(currentNode.value < value) {
            currentNode = currentNode.right;
          } else{
            return currentNode;
          }
        }
        return false;
      }
    }
    //Still need to practice.
    remove(value) {
    //   if(!this.root){
    //     return false;
    //   }
    //   else {
    //     let currentNode = this.root;
    //     let parentNode = null;
  
    //     while(currentNode){
    //       if(currentNode.value > value) {
    //         //left
    //         currentNode = currentNode.left;
    //       } else if(currentNode.value < value) {
    //         currentNode = currentNode.right;
    //       } else{
    //         //Find targetNode - change.
    //         let removeNode = currentNode;
    //         if(currentNode.right) {
    //           currentNode = currentNode.right;
    //         } else if (currentNode.left){
    //           currentNode = currentNode.left;
    //         }
    //       }
    //     }
    //   }
    }
  }
  
  const tree = new BinarySearchTree();
  tree.insert(9)
  tree.insert(4)
  tree.insert(6)
  tree.insert(20)
  tree.insert(170)
  tree.insert(15)
  tree.insert(1)
  tree.lookup(9);
  // JSON.stringify(traverse(tree.root))
  
  //     9
  //  4     20
  //1  6  15  170
  
  function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }
  
  
  
  
  
  
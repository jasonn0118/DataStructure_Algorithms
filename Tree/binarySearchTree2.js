class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const insertNode = new Node(value);
    if (!this.root) {
      this.root = insertNode;
    } else {
      let nextNode = this.root;
      while (true) {
        if (value < nextNode.value) {
          if (!nextNode.left) {
            nextNode.left = insertNode;
            return this;
          }
          nextNode = nextNode.left;
        } else {
          if (!nextNode.right) {
            nextNode.right = insertNode;
            return this;
          }
          nextNode = nextNode.right;
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return null;
    } else {
      let currentNode = this.root;
      while (currentNode) {
        if (value < currentNode.value) {
          currentNode = currentNode.left;
        } else if (value > currentNode.value) {
          currentNode = currentNode.right;
        } else {
          return currentNode;
        }
      }
    }
  }

  remove() {
    // TODO: This needs to be addressed.
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(JSON.stringify(traverse(tree.root)));
console.log(tree.lookup(4));

/**
 *
 *          9
 *       4     20
 *     1   6 15  170
 *
 */

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);

  return tree;
}

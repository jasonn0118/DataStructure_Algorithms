# BFS vs DFS
## Use BFS When:
### ✅ Finding the shortest path in an unweighted graph
- BFS explores all neighbours first before moving deeper, ensuring that the first time it reaches a node is through the shortest path.
- Example: Finding the shortest path in a maze.
### ✅ Searching in a tree level by level
- BFS is ideal when working with ****hierarchical structures**** like trees and needing to process nodes level-wise.
### ✅ When the solution is likely to be close to the starting node
- BFS quickly finds solutions near the root.

### ⏱️ Time Complexity:
- **O(V + E)**: Where V = vertices, E = edges

### 📦 Space Complexity:
- **O(V)**: Stores all nodes in the queue

## Use DFS When:
### ✅ Exploring all possible path or deep structures
- DFS is great for problems that require **checking all paths** before backtracking.
- Example: Finding all possible paths in a maze
### ✅ When the solution is likely to be far from the starting node
- DFS goes deep first, so it might reach deeper solutions faster.
### ✅ Solving connectivity problems
- DFS helps in checking whether a graph is connected.
- Example: Detecting cycles in a graph.
### ✅ Working with recursion-based problems(Backtracking)
- DFS is useful for problems that require **backtracking**, such as:
    - Solving a Sudoku
    - Generating all possible permutations

### ⏱️ Time Complexity:
- **O(V + E)**: Same as BFS

### 📦 Space Complexity:
- **O(V)**: For recursion stack or explicit stack

## Summary
| Feature         | BFS                          | DFS                          |
|---------------|---------------------------|---------------------------|
| **Use Case**   | Shortest path, level-wise traversal | Exploring all paths, deep search |
| **Data Structure** | Queue (FIFO) | Stack (recursion or explicit) |
| **Time Complexity** | O(V + E) | O(V + E) |
| **Space Complexity** | O(V) (queue) | O(V) (stack) |
| **Best for**   | Shortest path, shallow solutions | Deep solutions, exhaustive search |

## DFS Traversals: Preorder, Inorder and Postorder
When performing **Depth-First Search(DFS)** on trees, there are three main ways to traverse the nodes:
1.	Preorder Traversal (Root → Left → Right)
2.	Inorder Traversal (Left → Root → Right)
3.	Postorder Traversal (Left → Right → Root)

These traversals are particularly useful for different types of tree-based problems.

### 1. Preorder Traversal (Root → Left → Right)
Steps:
1.	Visit the root node.
2.	Traverse the left subtree.
3.	Traverse the right subtree.

**Use Cases of Preorder Traversal**

**✅ Copying a Tree** – Since Preorder visits the root before its children, it is useful for cloning a tree.
**✅ Serializing and Deserializing a Tree** – Used in encoding a tree into a format for storage.
**✅ Constructing a tree from root-first traversal** – If you are given a root-based dataset, Preorder helps reconstruct the tree.

```javascript
function preorder(root) {
    if (!root) return;
    console.log(root.val); // Visit root
    preorder(root.left);   // Traverse left
    preorder(root.right);  // Traverse right
}
```

### 2. Inorder Traversal (Left → Root → Right)
Steps:
1.	Traverse the left subtree.
2.	Visit the root node.
3.	Traverse the right subtree.

**Use Cases of Inorder Traversal**

**✅ Retrieving elements in sorted order (BST)** – When used on a Binary Search Tree (BST), it retrieves nodes in ascending order.
**✅ Checking if a tree is a BST** – If the Inorder traversal of a BST is sorted, then it’s a valid BST.

```javascript
function inorder(root) {
    if (!root) return;
    inorder(root.left);    // Traverse left
    console.log(root.val); // Visit root
    inorder(root.right);   // Traverse right
}
```

### 3. Postorder Traversal (Left → Right → Root)
Steps:
1.	Traverse the left subtree.
2.	Traverse the right subtree.
3.	Visit the root node.

**Use Cases of Postorder Traversal**

**✅ Deleting a Tree** – Ensures that child nodes are deleted before their parent, making it useful for freeing memory.
**✅ Expression Tree Evaluation** – Used in evaluating mathematical expressions, where operands are processed before operators.

```javascript
function postorder(root) {
    if (!root) return;
    postorder(root.left);   // Traverse left
    postorder(root.right);  // Traverse right
    console.log(root.val);  // Visit root
}
```

## Short Questions
1. If you know a solution is not far from the root of the tree
- BFS
2. If the tree is very deep and solutions are rare 
- BFS (DFS will take long) - although, it will take more memory
3. If the tree is very wide 
- DFS (BFS will need too much memory)
4. If solutions are frequent but located deep in the tree
- DFS
5. Determining whether a path exists between two nodes
- DFS
6. Finding the shortest path
- BFS
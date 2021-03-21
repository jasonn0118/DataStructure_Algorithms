/**
* Given the pointer to the head node of a linked list and an integer to insert at a certain position, 
    create a new node with the given integer as its 'data' attribute, insert this node at the desired position and return the head node.

    A position of 0 indicates head, a position of 1 indicates one node away from the head and so on. The head pointer given may be null meaning that the initial list is empty.

    Example
    'head' refers to the first node in the list 1->2->3
    'data' = 4
    'position' = 2
    Insert a node at position 2 with data = 4. The new list is 1->2->4->3

    Function Description Complete the function insertNodeAtPosition in the editor below. It must return a reference to the head node of your finished list.

    insertNodeAtPosition has the following parameters:

    head: a SinglyLinkedListNode pointer to the head of the list
    data: an integer value to insert as data in your new node
    position: an integer position to insert the new node, zero based indexing
 */

    'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};

function printSinglyLinkedList(node, sep, ws) {
    while (node != null) {
        ws.write(String(node.data));

        node = node.next;

        if (node != null) {
            ws.write(sep);
        }
    }
}

// Complete the insertNodeAtPosition function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtPosition(head, data, position) {
    //Instantiate.
    const newNode = {
        data: data,
        next: null
    };
    const prevNode = traverseToNodes(head, position-1);
    const targetNode = prevNode.next;
    prevNode.next = newNode;
    newNode.next = targetNode;
    
    return head;
}

function traverseToNodes (currNode, position){
    let counter = 0;
    let currentNode = currNode;    
    while(counter !== position) {
        currentNode = currentNode.next;
        counter++;
    }
    return currentNode;
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const llistCount = parseInt(readLine(), 10);

    let llist = new SinglyLinkedList();

    for (let i = 0; i < llistCount; i++) {
        const llistItem = parseInt(readLine(), 10);
        llist.insertNode(llistItem);
    }

    const data = parseInt(readLine(), 10);

    const position = parseInt(readLine(), 10);

    let llist_head = insertNodeAtPosition(llist.head, data, position);

    printSinglyLinkedList(llist_head, " ", ws)
    ws.write("\n");

    ws.end();
}

// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
}

module.exports = { Node, LinkedList };

// my solution

// insertFirst(data) {
//     if (this.head) {
//       this.head = new Node(data, this.head);
//     } else {
//       this.head = new Node(data);
//     }
//   }

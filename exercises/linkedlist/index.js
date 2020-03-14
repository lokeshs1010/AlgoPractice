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

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;

    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;

    while (node.next) {
      previous = node;
      node = node.next;
    }

    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();
    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }

      node = node.next;
      counter++;
    }

    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
    }

    const previous = this.getAt(index - 1);

    if (!previous || !previous.next) {
      return null;
    }

    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();

    previous.next = new Node(data, previous.next);
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

// size() {
//     let size = 0;
//     let hasData = this.head;
//     while (hasData) {
//       size++;
//       hasData = hasData.next;
//     }
//     return size;
//   }

// getLast() {
//   let node = this.head;
//   let prevNode;

//   while (node) {
//     prevNode = node;
//     node = node.next;
//   }

//   return prevNode;
// }

//  removeFirst() {
//     this.head = this.head.next;
//   }

// insertLast(data) {
//   if (!this.head) {
//     this.head = new Node(data, null);
//   }
//   const lastNode = this.getLast();
//   lastNode.next = new Node(data, null);
// }

// getAt(index) {
//   let node = this.head;
//   let counter = 0;

//   if (!this.head) {
//     return null;
//   }

//   while (counter != index) {
//     node = node.next;
//     counter++;
//   }
//   return node;
// }

// removeAt(index) {
//   if (!this.head) {
//     return null;
//   }

//   if (index === 0) {
//     this.removeFirst();
//     return;
//   }

//   const previous = this.getAt(index - 1);
//   const node = this.getAt(index);

//   if (!node) {
//     return null;
//   }

//   previous.next = node.next;
// }

// insertAt(data, index) {
//     if (index === 0) {
//       this.insertFirst(data);
//       return;
//     }
//     const previous = this.getAt(index - 1);

//     if (!previous || !previous.next) {
//       this.insertLast(data);
//       return;
//     }

//     previous.next = new Node(data, previous.next);
//   }

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// // *************************** Queue********************************
class Queue {
  constructor() {
    this.top = null;
    this.elements = null;
    this.length = 0;
  }

  enqueue(data) {
    const newNode = new Node(data);

    if (this.length === 0) {
      this.elements = newNode;
      this.top = newNode;
    } else {
      let current = this.elements;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }

    this.length++;
  }

  dequeue() {
    if (this.length === 0) {
      return null;
    }

    const newData = this.elements.data;
    this.elements = this.elements.next;

    if ((this.elements = null)) {
      this.top = null;
    }
    this.length--;

    return newData;
  }
  isEmpty() {
    return this.length === 0;
  }
  getLength() {
    return this.length;
  }
  getElements() {
    return this.elements !== null ? this.elements.data : null;
  }
}

const queueList = new Queue();

queueList.enqueue(34);
queueList.enqueue(-9);
queueList.enqueue(56);
queueList.enqueue(5);
console.log(queueList);
console.log(queueList.getElements());
queueList.dequeue();
console.log(queueList);

// ******************************* Stack ********************************
class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(data) {
    let newNode = new Node(data);

    if (!this.top) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }

    this.length++;
  }

  pop() {
    if (!this.top) {
      return null;
    }

    let newNode = this.top;
    this.top = newNode.next;
    newNode.next = null;
    this.length--;

    return newNode.data;
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }

  getTop() {
    return this.top ? this.top.data : null;
  }
  sortedList() {
    let current = this.top;

    while (current != null) {
      let min = current;
      let nextNode = current.next;

      while (nextNode != null) {
        if (nextNode.data < min.data) {
          min = nextNode;
        }
        nextNode = nextNode.next;
      }

      let temp = current.data;
      current.data = min.data;
      min.data = temp;

      current = current.next;
    }
  }
}
const stack = new Stack();

stack.push(7);
stack.push(3);
stack.push(67);
stack.push(99);

stack.sortedList();
console.log(stack);

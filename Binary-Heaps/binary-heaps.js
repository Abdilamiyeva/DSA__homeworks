// // Binary heaps
// class BinaryHeaps {
//   constructor() {
//     this.heap = [];
//   }
//   parent(n) {
//     return Math.floor((n - 1) / 2);
//   }
//   leftChild(n) {
//     return 2 * n + 1;
//   }
//   rightChild(n) {
//     return 2 * (n + 1);
//   }
//   swap(idx1, idx2) {
//     [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
//   }
//   bubbleUp() {
//     let elementIdx = this.heap.length - 1;
//     let value = this.heap[elementIdx];

//     while (elementIdx > 0) {
//       let parentIdx = this.parent(elementIdx);
//       let parentValue = this.heap[parentIdx];

//       if (parentValue >= value) break;
//       else {
//         this.swap(elementIdx, parentIdx);
//       }
//       elementIdx = parentIdx;
//     }
//   }
//   insert(element) {
//     this.heap.push(element);
//     this.bubbleUp();
//     return this;
//   }
//   isHeap() {
//     for (let i = 0; i < this.heap.length; i++) {
//       const leftChildIndex = this.leftChild(i);
//       const rightChildIndex = this.rightChild(i);

//       const currentHeap = this.heap[i];
//       const leftChild = this.heap[leftChildIndex];
//       const rightChild = this.heap[rightChildIndex];

//       if (
//         (leftChildIndex && leftChild > currentHeap) ||
//         (rightChildIndex && rightChild > currentHeap)
//       )
//         return false;
//     }
//     return true;
//   }
//   heapify(arr) {
//     for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
//       this.sinkDown(i, arr.length);
//     }
//   }
//   sinkDown(idx, size) {
//     const leftChildIndex = this.leftChild(idx);
//     const rightChildIndex = this.rightChild(idx);
//     let largestIndex = idx;

//     if (
//       leftChildIndex < size &&
//       this.heap[leftChildIndex] > this.heap[largestIndex]
//     ) {
//       largestIndex = leftChildIndex;
//     }

//     if (
//       rightChildIndex < size &&
//       this.heap[rightChildIndex] > this.heap[largestIndex]
//     ) {
//       largestIndex = rightChildIndex;
//     }

//     if (largestIndex !== idx) {
//       [this.heap[idx], this.heap[largestIndex]] = [
//         this.heap[largestIndex],
//         this.heap[idx],
//       ];
//       this.sinkDown(largestIndex, size);
//     }
//   }
// }

// const binaryHeap = new BinaryHeaps();
// const arr = [1, 2, 5, 3, 67, 20, 10, 40];
// binaryHeap.insert(3);
// binaryHeap.insert(23);
// binaryHeap.insert(33);
// binaryHeap.insert(1);
// console.log(binaryHeap);
// console.log(binaryHeap.isHeap([90, 15, 10, 7, 12, 2]));
// console.log(binaryHeap.heapify(arr));


//  PriorityQueue

class PrQueue {
  constructor() {
    this.items = [];
  }

  enqueue(el, priority) {
    this.items.push({ el, priority });
    this.items.sort((a, b) => a.priority - b.priority);

  }
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift().el;
  }

  isEmpty() {
    return this.items.length === 0;
  }

}

const priorityQueue = new PrQueue();
priorityQueue.enqueue("Task 1", 3);
priorityQueue.enqueue("Task 2", 1);
priorityQueue.enqueue("Task 3", 2);
console.log(priorityQueue)
console.log(priorityQueue.dequeue())
console.log(priorityQueue);

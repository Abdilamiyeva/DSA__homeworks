class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BTS {
  constructor() {
    this.root = null;
  }
  insert(data, node = this.root) {
    const newNode = new TreeNode(data);
    if (!node) {
      this.root = newNode;
    } else {
      let current = node;
      while (true) {
        if (current.value === newNode.value) {
          return this;
        }
        if (current.value < newNode.value) {
          if (!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        } else {
          if (!current.left) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        }
      }
    }
  }
  find(data) {
    if (!this.root) return false;

    let current = this.root;
    while (current) {
      if (data < current.value) {
        current = current.left;
      } else if (data > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }

    return false;
  }
  findNode(data, node) {
    if (!node) return null;

    if (data < node.value) {
      return this.findNode(data, node.left);
    } else if (data > node.value) {
      return this.findNode(data, node.right);
    } else {
      return node;
    }
  }
  findNodeElementValue(data) {
    return this.findNode(data, this.root);
  }
  findMax(node = this.root) {
    if (!node) return null;
    while (node.right) {
      node = node.right;
    }
    return node.value;
  }
  findMin(node = this.root) {
    if (!node) return null;
    while (node.left) {
      node = node.left;
    }
    return node.value;
  }
  findSecondLargest() {
    if (!this.root || (!this.root.left && !this.root.right)) return null;
    let head = null;
    let current = this.root;

    while (current.right) {
      head = current;
      current = current.right;
    }
    if (current.left) {
      return this.findMax(current.left);
    }
    return head ? head.value : null;
  }
  dfsPreOrder() {
    let data = [];
    function traverse(node) {
      node.value && data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  dfsPreOrderIter() {
    let data = [];
    let stack = [];
    stack.push(this.root);

    while (stack.length) {
      let node = stack.pop();
      node.value && data.push(node.value);
      node.right && stack.push(node.right);
      node.left && stack.push(node.left);
    }
    return data;
  }
  dfsPostOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }
  dfsPostOrderIter() {
    const data = [];
    const stack = [];
    let lastVisited = null;
    let node = this.root;
    while (node || stack.length) {
      if (node) {
        stack.push(node);
        node = node.left;
      } else {
        let peekNode = stack[stack.length - 1];
        if (peekNode.right && lastVisited !== peekNode.right) {
          node = peekNode.right;
        } else {
          data.push(peekNode.value);
          lastVisited = stack.pop();
        }
      }
    }
    return data;
  }
  dfsInOrder() {
    let data = [];
    function traverse(node) {
      node.left && traverse(node.left);
      data.push(node.value);
      node.right && traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  dfsInOrderIter() {
    let data = [];
    let stack = [];
    let current = this.root;

    while (current || stack.length) {
      if (current) {
        stack.push(current);
        current = current.left;
      } else {
        let node = stack.pop();
        data.push(node.value);
        current = node.right;
      }
    }
    return data;
  }
  bfs() {
    if (!this.root) return [];
    
    function bfsRecursive(queue, data) {
      if (!queue.length) {
        return data;
      }
      let current = queue.shift();
      data.push(current.value);

      current.left && queue.push(current.left);
      current.right && queue.push(current.right);

      return bfsRecursive(queue, data);
    }

    let queue = [this.root];
    let data = [];

    return bfsRecursive(queue, data);
  }
  bfsIter() {
    if (!this.root) return [];
    let queue = [this.root];
    let data = [];

    while (queue.length) {
      let current = queue.shift();
      data.push(current.value);

      current.left && queue.push(current.left);
      current.right && queue.push(current.right);
    }
    return data;
  }
}

let tree = new BTS();
this.root = new TreeNode(10);
tree.insert(12);
tree.insert(2);
tree.insert(27);
tree.insert(1);
tree.insert(50);
tree.insert(13);
// console.log(tree);
// console.log(tree.dfsPreOrderIter());
// console.log(tree.dfsPostOrderIter());
// console.log(tree.dfsInOrderIter());
console.log(tree.bfs());
// console.log(tree.find(2));
// console.log("Max Node value: " + tree.findMax());
// console.log("Min Node value: " + tree.findMin());
// console.log("Second largest number : " + tree.findSecondLargest());

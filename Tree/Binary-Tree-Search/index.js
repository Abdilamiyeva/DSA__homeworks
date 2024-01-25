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
}

let tree = new BTS();
this.root = new TreeNode(10);
tree.insert(12);
tree.insert(2);
tree.insert(27);
tree.insert(1);
tree.insert(50);
tree.insert(13);

console.log(tree.find(2));
console.log("Max Node value: " + tree.findMax());
console.log("Min Node value: " + tree.findMin());
console.log(tree.findSecondLargest());

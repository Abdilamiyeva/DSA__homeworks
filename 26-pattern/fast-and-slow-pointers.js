// ********************************************** task => 1 ***********************************************
/* Find middle of linked list  */
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function findMiddle(head) {
  let fast = head;
  let slow = head;
  if (!head) return null;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

const List = new Node(
  1,
  new Node(2, new Node(3, new Node(4, new Node(5, new Node(6, new Node(7))))))
);

const middleNode = findMiddle(List);
console.log(middleNode.value);

// ********************************************** task => 1 ***********************************************
/* Check Happy Number  */
function sumDigits(number) {
  let sum = 0;
  while (number !== 0) {
    let lastDigit = number % 10;
    number = Math.floor(number / 10);
    sum += Math.pow(lastDigit, 2);
  }
  return sum;
}
function isHappyNumber(num) {
  let fast = num;
  let slow = num;
  while (true) {
    fast = sumDigits(sumDigits(fast));
    slow = sumDigits(slow);
    if (fast === slow) return fast === 1;
  }
}
console.log(isHappyNumber(4));

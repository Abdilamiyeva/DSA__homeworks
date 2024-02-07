// ******************************************** task => 1 *************************************************
/* 
Remove nth Node from End of List
Statement:
Given a singly linked list, remove the nth node from the end of the list and return its head. 
Linked list: 32 → 78 → 65 → 90 → 12 → 44 → NULL
n = 3
output: 
32 -> 78 -> 65 -> 12 -> 44 -> NULL */

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
function deleteRight(head, n) {
  let p1 = head;
  let p2 = head;
  let count = 0;
  while (count < n) {
    p1 = p1.next;
    count++;
  }
  while (p1.next) {
    p1 = p1.next;
    p2 = p2.next;
  }
  p2.next = p2.next.next;
  return head;
}
function Print(list) {
  while (list !== null) {
    console.log(list.value);
    list = list.next;
  }
}
const List = new Node(
  32,
  new Node(78, new Node(65, new Node(90, new Node(12, new Node(44)))))
);

const res = deleteRight(List, 3);
Print(res);

// ******************************************* task => 2 **************************************************
/*  
Sort Colors
Given an array, colors, which contains a combination of the following three elements:
0 (representing red)
1 (representing white)
2 (representing blue)
Sort the array in place so that the elements of the same color are adjacent, with the colors in the order of red, white, and blue. The function should return the same array.
Input: 
colors=[1,0,2,1,2,2]
Output: 
colors=[0,1,1,2,2,2] */

function sortedColors(colors) {
  for (let i = 0; i < colors.length; i++) {
    for (let j = 0; j < colors.length; j++) {
      if (colors[i] < colors[j]) {
        [colors[i], colors[j]] = [colors[j], colors[i]];
      }
    }
  }
  return colors;
}
const colors = [1, 0, 2, 1, 2, 2];
console.log(sortedColors(colors));

// ********************************************** task => 3 ***********************************************
/* 
Reverse Words in a String
Given a sentence, reverse the order of its words without affecting the order of letters within a given word.
Note: The input string may contain leading or trailing spaces or multiple spaces between words. The returned string, however, should only have a single space separating each word. Do not include any extra spaces.
Input: 
Input String = "Hello Friend"

Output: 
Reversed String = "Friend Hello"
*/
const reverseWords = (str) => {
  const splitedStr = str.split(" ");
  let start = 0;
  let end = splitedStr.length - 1;
  while (start < end) {
    [splitedStr[start], splitedStr[end]] = [splitedStr[end], splitedStr[start]];
    start++;
    end--;
  }
  reversedStr = splitedStr.join(" ");
  return reversedStr;
};
console.log(reverseWords("Hello Friend"));

// ********************************************** task => 4 ***********************************************
/* 
Valid Palindrome II
Write a function that takes a string as input and checks 
whether it can be a valid palindrome by removing at most one character from it.
Input:
string =  "A B C E B A"
output: 
true

// ********************************************** task => 5 ***********************************************
/*  
String berilgan agar xohlagan bitta harf ni o'chirsak u palindrom bo'ladimi ? 
agar bo'lsa : True
bo'lsa : False

*/

const isPalindrome = (str) => {
  let start = str[0];
  let end = str.length - 1;
  while (start < end) {
    if (str[start] !== str[end]) return false;
    start++;
    end--;
  }
  return true;
};

const isPalindromeAfterRemoveElement = () => {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return (
        isPalindrome(str.substring(left, right)) ||
        isPalindrome(str.substring(left + 1, right + 1))
      );
    }
    left++;
    right--;
  }
};




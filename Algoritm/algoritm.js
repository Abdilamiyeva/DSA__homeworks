// Linear search , Binary search, naive search

// const search = (arr, target) =>{
//    for (let i = 0; i < arr.length; i++) {
//      if(arr[i] === target){
//         return i
//      }
//    }
//    return -1

// }
// console.log(search([2,3,4,6,10]), 4);
// Naive search
// let str = "lorelod loled lol";
// let splited = str.split(' ')
// console.log(splited);
// let searchedStr = "lol";

// const foo = (str, searchedStr) => {
//   let count = 0;
//   for (let i = 0; i < str.length - searchedStr.length + 1; i++) {
//     let match = true;
//     for (let j = 0; j < searchedStr.length; j++) {
//       if (str[i + j] !== searchedStr[j]) {
//         match = false;
//         break;
//       }
//     }
//     if (match) {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(foo(str, searchedStr));

// ===============================

// const binarySearch = (arr, searchedNumber) => {
//   let left = 0;
//   let right = arr.length - 1;

// //   while (right >= left) {
// //     let mid = Math.floor((left + right) / 2);
// //     if (arr[mid] === searchedNumber) {
// //       return arr[mid];
// //     }
// //     if (arr[mid] < searchedNumber) {
// //       left = mid + 1;
// //     } else {
// //       right = mid - 1;
// //     }
// //   }

// //   return -1;
// // };
// // console.log(binarySearch([1, 2, 3, 4, 5, 6], 6));

// ===================================

// Naive search
let str = "lorelod loled lol";


let searchedStr = "lol";

const foo = (str, searchedStr) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < searchedStr.length; j++) {
      if (searchedStr[j] !== str[i + j]) break;
      if (j === searchedStr.length - 1) {
        count++;
      }
    }
  }
  return count;
};

console.log(foo(str, searchedStr));

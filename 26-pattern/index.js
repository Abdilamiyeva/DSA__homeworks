// function foo(str) {
// //   for (let i = 0; i < str.length; i++) {
// //     for (let j = str.length - 1; j >= 0; j++) {
// //       if (str[i] == str[j]) {
// //         return "Palindrom";
// //       } else {
// //         return "Palindrom emas";
// //       }
// //     }

//   }
//   let start = str[0]
//   let end = str.length-1
//   while(start< end){
//       if(str[start] !== str[end]) return false
//       start++
//       end--
//   }
//   return true
// }

// console.log(foo("AzizA"));
// two pointers

// *****************************************************************************
// raqamlardan iborat massiv berilgan shu massivni 3 ta elementlarini
//  yig'indisi targetga teng bo'ladigan sonlar bo'lsa true aks holda false qaytaring
// function sum(nums, target) {
//   nums.sort((a, b) => a - b);

//   for (let i = 0; i < nums.length - 2; i++) {
//     let left = i + 1;
//     let right = nums.length - 1;
//     while (left < right) {
//       const sum = nums[left] + nums[right] + nums[i];
//       if (sum === target) return true;
//       else if (sum < target) left++;
//       else if (sum > target) right--;
//     }
//   }
//   return false;
// }
// console.log(sum([3, 7, 1, 2, 8, 4, 5], 18)); // 7 +8 +5  = 20

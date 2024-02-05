/* 
Sorting algorithms:
1. Bubble (easy)
2. Selection (easy)
3. Insertion (easy)
4. Merge (easy)
5. Quick (complex)
6. Radix (complex)
*/

// const bubbleSort = (array) => {
//   let swap;
//   for (let i = 0; i < array.length; i++) {
//     swap = true;

//     for (let j = 0; j < array.length; j++) {
//       if (array[j] > array[j + 1]) {
//         let temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;

//         swap = false;
//       }
//     }
//     if (swap) break;
//   }
//   return array;
// };

// console.log(bubbleSort([3, 1, 2]));

// const selectionSort = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     let min = i;
//     for (let j = i; j < array.length; j++) {
//       if (array[j] < array[min]) {
//         min = j;
//       }
//     }
//     if (min !== i) {
//       [array[i], array[min]] = [array[min], array[i]];
//     }
//   }

//   return array;
// };

// console.log(selectionSort([3, 1, 5, 2, 4]));

// ************************************************************

// Insertion Sort

const insertionSort = (arr)  => {
  for (let i = 1; i < arr.length; i++) {
    let idx = i;
    while (idx > 0 && arr[idx] < arr[idx - 1]) {
      [arr[idx], arr[idx - 1]] = [arr[idx - 1], arr[idx]];
      idx--;
    }
  }
  return arr;
}
const arr = [23, 22, 34, 2, 6, 25, 20];
console.log(insertionSort(arr));

// ************************************************************

// UNOPTIMIZED VERSION OF BUBBLE SORT

// ES2015 Version
// function bubbleSort(arr) {
//   const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   };

//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1);
//       }
//     }
//   }
//   return arr;
// }


// sort by object value
function bubbleSort(arr) {
  const n = arr.length;
  let swapped;

  do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
          if (arr[i].name > arr[i + 1].name) {
              // Swap elements
              const temp = arr[i];
              arr[i] = arr[i + 1];
              arr[i + 1] = temp;
              swapped = true;
          }
      }
  } while (swapped);  // Continue if a swap was made

  return arr;
}

module.exports = bubbleSort
// bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);

// // insertionSort([2, 1, 9, 76, 4])
// let data = Array.apply(null, { length: 100000 }).map(Function.call, Math.random)

// console.time("data")
// bubbleSort(data);
// console.timeEnd("data")




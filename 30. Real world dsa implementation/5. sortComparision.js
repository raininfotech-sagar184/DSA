const randomData = require("../assets/randomData");
const nrbySortedData = require("./nrbySortedData../assets/nrbySortedData");
const reverseSortedData = require("../assets/reverseSortedData");
const data = [
  // { name: "aku4ANzdSwj", id: 89141 },
  // { name: "cKU5Ty68D6Z", id: 3695 },
  // { name: "gku7JW8zDDR", id: 84679 },
  // { name: "lKUcfyOtAAQ", id: 61653 },
  // { name: "KuEKm5OhaS", id: 27819 },
  ...randomData
];

// Bubble Sort
function bubbleSort(arr) {
  const n = arr.length;
  let swapped;
  do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
          if (arr[i].name.toLowerCase() > arr[i + 1].name.toLowerCase()) {
              [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
              swapped = true;
          }
      }
  } while (swapped);
  return arr;
}

// Insertion Sort
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
      const key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j].name.toLowerCase() > key.name.toLowerCase()) {
          arr[j + 1] = arr[j];
          j--;
      }
      arr[j + 1] = key;
  }
  return arr;
}

// Selection Sort
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
          if (arr[j].name.toLowerCase() < arr[minIndex].name.toLowerCase()) {
              minIndex = j;
          }
      }
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

// Merge Sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  let result = [], leftIndex = 0, rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex].name.toLowerCase() < right[rightIndex].name.toLowerCase()) {
          result.push(left[leftIndex++]);
      } else {
          result.push(right[rightIndex++]);
      }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Quick Sort
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[Math.floor(arr.length / 2)].name.toLowerCase();
  const left = arr.filter(x => x.name.toLowerCase() < pivot);
  const right = arr.filter(x => x.name.toLowerCase() > pivot);
  const middle = arr.filter(x => x.name.toLowerCase() === pivot);
  return [...quickSort(left), ...middle, ...quickSort(right)];
}

// Heap Sort
function heapSort(arr) {
  function heapify(arr, n, i) {
      let largest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      if (left < n && arr[left].name.toLowerCase() > arr[largest].name.toLowerCase()) {
          largest = left;
      }
      if (right < n && arr[right].name.toLowerCase() > arr[largest].name.toLowerCase()) {
          largest = right;
      }
      if (largest !== i) {
          [arr[i], arr[largest]] = [arr[largest], arr[i]];
          heapify(arr, n, largest);
      }
  }

  const n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
  }
  for (let i = n - 1; i >= 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      heapify(arr, i, 0);
  }
  return arr;
}

// Counting Sort
function countingSort(arr) {
  const counts = {};
  arr.forEach(item => counts[item.name.toLowerCase()] = (counts[item.name.toLowerCase()] || 0) + 1);
  const sortedArr = [];
  Object.keys(counts).sort().forEach(key => {
      for (let i = 0; i < counts[key]; i++) {
          sortedArr.push(arr.find(item => item.name.toLowerCase() === key));
      }
  });
  return sortedArr;
}
 // Radix Sort
function radixSort(arr) {
  // Find the maximum length of names
  const maxLength = Math.max(...arr.map(item => item.name.length));
  let result = [...arr];

  // Radix sort on each digit position
  for (let i = 0; i < maxLength; i++) {
      result = countingSortByDigit(result, i);
  }
 
  return result;

} 
// Counting Sort by digit
function countingSortByDigit(arr, digit) {
  const buckets = Array.from({ length: 256 }, () => []);
  arr.forEach(item => {
      const name = item.name;
      // Get the character at the current digit position from the end
      const char = digit < name.length ? name[name.length - 1 - digit] : '\0'; // Use '\0' for missing digits
      // Use ASCII code for indexing, ensure it’s within bounds
      const index = char.charCodeAt(0);
      buckets[index].push(item);
  });
  return buckets.flat();
}

// Counting Sort by digit
function countingSortByDigit(arr, digit) {
  const buckets = Array.from({ length: 256 }, () => []);
  arr.forEach(item => {
      const name = item.name;
      // Get the character at the current digit position from the end
      const char = digit < name.length ? name[name.length - 1 - digit] : '';
      // Use ASCII code for indexing, ensure it’s within bounds

      buckets[char.charCodeAt(0)] && buckets[char.charCodeAt(0)].push(item);
  });
  return buckets.flat();
}



// Shell Sort
function shellSort(arr) {
  let gap = Math.floor(arr.length / 2);
  while (gap > 0) {
      for (let i = gap; i < arr.length; i++) {
          const temp = arr[i];
          let j = i;
          while (j >= gap && arr[j - gap].name.toLowerCase() > temp.name.toLowerCase()) {
              arr[j] = arr[j - gap];
              j -= gap;
          }
          arr[j] = temp;
      }
      gap = Math.floor(gap / 2);
  }
  return arr;
}

// Tim Sort (Built-in in JavaScript)
function timSort(arr) {
  const sortedArr = arr.sort((b,a) => {
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  }); 
  return sortedArr
   
}

// Run and measure sorting methods
function measureSortingMethods() {
  const methods = [
    // ==================================================>Random sorting methods
    { name: 'timSort', func: timSort },
    { name: 'heapSort', func: heapSort },
    // ==================================================>Nrby sorting methods 
      // { name: 'insertionSort', func: insertionSort },
      // { name: 'bubbleSort', func: bubbleSort },
    // ==================================================>Other sorting methods
      // { name: 'mergeSort', func: mergeSort },
      // { name: 'quickSort', func: quickSort }, 
      // { name: 'radixSort', func: radixSort },
      // { name: 'shellSort', func: shellSort },
      // { name: 'selectionSort', func: selectionSort }, 
      // { name: 'countingSort', func: countingSort },
  ];

  methods.forEach(method => {
      const startTime = performance.now();
      const sortedData = method.func(data.slice());  // Use slice() to avoid in-place modification
      
      // console.log(`======================================>${method.name.toLowerCase()}:`,sortedData);
      
      const endTime = performance.now();
      console.log(`${method.name.toLowerCase()}: ${endTime - startTime} ms`);
  });
}

// Example usage
measureSortingMethods();

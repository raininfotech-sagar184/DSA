const bubbleSort = require("./1. bubbleSort/bubble_unoptimized");
const radixSort = require("./14. Redix_sort/radix_sort");
const selectionSort = require("./2. selectSort/selection_sort");
const insertionSort = require("./3. insertionSort/insertion_sort");
const mergeSort = require("./4. merge_sort/mergeSort");
const quickSort = require("./5. Quick_sort/quickSort");


function generateRandomObjectsArray(n) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  function getRandomString(length) {
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  function getRandomNumber() {
    return Math.floor(Math.random() * 10000); // You can change the range as needed
  }

  const array = [];
  for (let i = 0; i < n; i++) {
    array.push({
      name: getRandomString(10), // Random string of length 10
      id: getRandomNumber() // Random number
    });
  }
  return array;
}

// Example usage:
const n = 10000; // Number of objects to generate
const randomObjectsArray = generateRandomObjectsArray(n);


const randomObjectsArray1 = [...randomObjectsArray]
const randomObjectsArray2 = [...randomObjectsArray]
const randomObjectsArray3 = [...randomObjectsArray]
const randomObjectsArray4 = [...randomObjectsArray]
const randomObjectsArray5 = [...randomObjectsArray]
const randomObjectsArray6 = [...randomObjectsArray]
const randomObjectsArray7 = [...randomObjectsArray]
console.time("bubbleSort")
bubbleSort(randomObjectsArray1)
console.timeEnd("bubbleSort")


console.time("selectionSort")
selectionSort(randomObjectsArray2)
console.timeEnd("selectionSort")

console.time("insertionSort")
insertionSort(randomObjectsArray3)
console.timeEnd("insertionSort")

console.time("mergeSort")
mergeSort(randomObjectsArray4)
console.timeEnd("mergeSort")

// console.time("quickSort")
// quickSort(randomObjectsArray5)
// console.timeEnd("quickSort")

console.time("radixSort")
radixSort(randomObjectsArray6)
console.timeEnd("radixSort")


console.time("sort()")
randomObjectsArray7.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});
console.timeEnd("sort()")


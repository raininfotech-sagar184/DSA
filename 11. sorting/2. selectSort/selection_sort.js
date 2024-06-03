// LEGACY VERSION (non ES2015 syntax)


// ES2015 VERSION
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}
module.exports = selectionSort
// // selectionSort([0,2,34,22,10,19,17]);
// // insertionSort([2, 1, 9, 76, 4])
// let data = Array.apply(null, { length: 100000 }).map(Function.call, Math.random)

// console.time("data")
// selectionSort(data);
// // data.sort()
// console.timeEnd("data")
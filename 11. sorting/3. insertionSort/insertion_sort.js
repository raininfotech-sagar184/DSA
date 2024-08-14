// function insertionSort(arr) {
//     var currentVal;
//     for (var i = 1; i < arr.length; i++) {
//         currentVal = arr[i];
//         for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//             arr[j + 1] = arr[j]
//         }
//         arr[j + 1] = currentVal;
//     }
//     return arr;
// }


// sort by name
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let current = arr[i];
      let j = i - 1;
  
      // Compare the current element with the previous elements
      while (j >= 0 && `${arr[j].name}`.toLowerCase() > `${current.name}`.toLowerCase()) {
        arr[j + 1] = arr[j]; // Shift the element to the right
        j--;
      }
      
      // Place the current element at its correct position
      arr[j + 1] = current;
    }
  
    return arr;
  }
module.exports = insertionSort 

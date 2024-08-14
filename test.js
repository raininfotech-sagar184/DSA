function rearrangeArrayByFive(arr) {
  const chunkSize = 5;
  let result = [];

  for (let i = 0; i < arr.length; i += chunkSize) {
      // Get a chunk of 5 elements (or less if at the end of the array)
      let chunk = arr.slice(i, i + chunkSize);
      
      if (chunk.length === chunkSize) {
          // Rotate the chunk elements
          let temp = chunk[0];
          for (let j = 0; j < chunkSize - 1; j++) {
              chunk[j] = chunk[j + 1];
          }
          chunk[chunkSize - 1] = temp;
      }
      
      // Append the rearranged chunk to the result
      result = result.concat(chunk);
  }

  return result;
}

let arrayOfObjects = [
  { name: "ku4ANzdSwj", id: 89141 },
  { name: "KU5Ty68D6Z", id: 3695 },
  { name: "ku7JW8zDDR", id: 84679 },
  { name: "KUcfyOtAAQ", id: 61653 },
  { name: "KuEKm5OhaS", id: 27819 },
  { name: "Another1", id: 12345 },
  { name: "Another2", id: 67890 },
  { name: "Another3", id: 11121 },
  { name: "Another4", id: 31415 },
  { name: "Another5", id: 16171 },
  { name: "ku4ANzdSwj", id: 89141 },
  { name: "KU5Ty68D6Z", id: 3695 },
  { name: "ku7JW8zDDR", id: 84679 },
  { name: "KUcfyOtAAQ", id: 61653 },
  { name: "KuEKm5OhaS", id: 27819 },
  // Add more elements as needed...
];

let rearrangedArray = rearrangeArrayByFive(arrayOfObjects);

console.log(rearrangedArray);

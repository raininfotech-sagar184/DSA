const fs = require('fs');
const insertionSort = require("./11. sorting/3. insertionSort/insertion_sort");
function timSort(arr) {
  const sortedArr = arr.sort((a,b) => {
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
      return Math.floor(Math.random() * 1000000); // You can change the range as needed
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
  const n = 1000000; // Number of objects to generate
  const sortedArray = timSort(generateRandomObjectsArray(n))
  const randomObjectsArray =sortedArray ;
  
  
  // console.log("randomObjectsArray",randomObjectsArray);

function saveArrayToFile(array, filePath) {
  const content = `module.exports = ${JSON.stringify(array, null, 2)};`;

  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('File has been saved successfully!');
    }
  });
}

// Example usage:
const myArray = [1, 2, 3, 4, 5];
saveArrayToFile(randomObjectsArray, 'myArrayFile.js');

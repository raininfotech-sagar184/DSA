
let arr1 = [];
let arr2 = [];

for (let index = 0; index < 100000000; index++) {
    arr1.push(index); 
}
for (let index = 0; index > 100000001 && index < 20000000; index++) {
    arr2.push(index); 
}


//=========================================================>With DSA 1.6sec - O(n + m) 
// function mergeArrays(arr1, arr2) {
//     let i = 0, j = 0;
//     const merged = [];

//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             merged.push(arr1[i++]);
//         } else {
//             merged.push(arr2[j++]);
//         }
//     }

//     while (i < arr1.length) {
//         merged.push(arr1[i++]);
//     }

//     while (j < arr2.length) {
//         merged.push(arr2[j++]);
//     }

//     return merged;
// }

// // Usage
// console.time("mergeArrays with dsa")
// mergeArrays(arr1, arr2); // Output: [1, 2, 3, 4, 5, 6]
// console.timeEnd("mergeArrays with dsa")


//=========================================================>Without DSA 2sec - O((n + m) log(n + m))

function mergeArrays(arr1, arr2) {
    const merged = [...arr1, ...arr2];
    return merged.sort((a, b) => a - b);
}

console.time("mergeArrays")
mergeArrays(arr1, arr2); // Output: [1, 2, 3, 4, 5, 6]
console.timeEnd("mergeArrays")

let arr = [];


for (let index = 0; index < 10000000; index++) {
    arr.push(index); 
}
for (let index = 0; index < 5; index++) {
    arr.push(index); 
}

//=========================================================>With DSA 2sec - O(logn)
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Usage
console.time("removeDuplicates with dsa")
removeDuplicates(arr); // Output: [1, 2, 3, 4, 5]
console.timeEnd("removeDuplicates with dsa")

//=========================================================>Without DSA more than 1min (not calculated) - O(n)
// function removeDuplicates(arr) {
//     return arr.filter((item, index) => arr.indexOf(item) === index);
// }
// console.time("removeDuplicates")
// removeDuplicates(arr); // Output: [1, 2, 3, 4, 5]
// console.timeEnd("removeDuplicates")
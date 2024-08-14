"Use only when data is sorted"

var arr = [];
for (let index = 0; index < 100000000; index++) {
    arr.push(index);
    
}
const target = 90000000;

//=========================================================>With DSA 3ms

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2); 
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

console.time("Binary Search")
console.log(binarySearch(arr, target)); // Output: 2
console.timeEnd("Binary Search")
//=========================================================>Without DSA 85ms
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

// Usage

console.time("Linear Search")
console.log(linearSearch(arr, target)); // Output: 2
console.timeEnd("Linear Search")




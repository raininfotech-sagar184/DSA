"Use only when data is sorted"
const target = 90000;
var arr = [];
for (let index = 0; index < 100000; index++) {
    const randomValue  = Math.floor(Math.random() * 100000)
    if (randomValue===target) {
        console.log("target added")
    }
    arr.push({id:index,value:randomValue});
    
}


//=========================================================>With DSA 2ms

function createValueMap(items) {
    const valueMap = {};
    for (let i = 0; i < items.length; i++) {
        
        valueMap[items[i].id] = items[i];
    }
    console.log(valueMap)
    return valueMap;
}

const valueMap = createValueMap(arr);


function findValueHashMap(valueMap, targetValue) {
    return valueMap[targetValue] || null;
} 

console.time("Search with dsa")
console.log(findValueHashMap(arr, target)); // Output: 2
console.timeEnd("Search with dsa")



//=========================================================>Without DSA 127ms
function findValueLinearSearch(items, targetValue) {
    for (let i = 0; i < items.length; i++) {
        if (items[i].value === targetValue) {
            return items[i];
        }
    }
    return null;  // Return null if the value is not found
} 


console.time("Search")
console.log(findValueLinearSearch(arr, target)); // Output: 2
console.timeEnd("Search")




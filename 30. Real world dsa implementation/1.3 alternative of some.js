// USE CASE: while we need to store temporary value in array to filter/find perticular value
const array = [];
const mapObj = new Map();

for (let i = 0; i < 10000; i++) {
    const value = i;
    array.push(value);   // Fill the array with numbers 0 to 999
    mapObj.set(value, true); // Fill the Map with numbers 0 to 999 as keys
}

const complement = 50000; // Value to check

// Check time using Map.has() 2.362ms
console.log("Map.has() Method:");
console.time("Map.has()");
for (let i = 0; i < 100000; i++) {
    mapObj.has(complement);
}
console.timeEnd("Map.has()");

// Check time using Array.some() 7.268s
console.log("Array.some() Method:");
console.time("Array.some()");
for (let i = 0; i < 100000; i++) {
    array.some(element => element === complement);
}
console.timeEnd("Array.some()");



//=============================================================================================> CRUD on Map()


// Initialize the Map with some data
const map = new Map();
for (let i = 0; i < 1000; i++) {
    map.set(i, `Value${i}`);
}

// CREATE Operation
console.log("CREATE Operation (O(1))");
console.time("CREATE");
for (let i = 1000; i < 2000; i++) {
    map.set(i, `NewValue${i}`);
}
console.timeEnd("CREATE");

// READ Operation
console.log("READ Operation (O(1))");
console.time("READ");
for (let i = 0; i < 1000; i++) {
    map.get(i);
}
console.timeEnd("READ");

// UPDATE Operation
console.log("UPDATE Operation (O(1))");
console.time("UPDATE");
for (let i = 0; i < 1000; i++) {
    map.set(i, `UpdatedValue${i}`);
}
console.timeEnd("UPDATE");

// DELETE Operation
console.log("DELETE Operation (O(1))");
console.time("DELETE");
for (let i = 0; i < 1000; i++) {
    map.delete(i);
}
console.timeEnd("DELETE");



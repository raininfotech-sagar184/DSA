function countUniqueValues(list){
    const uniq_Char = []
    list.forEach(element => {
        !uniq_Char.includes(element)?uniq_Char.push(element):""
    });

    return uniq_Char.length
}

console.log(countUniqueValues([1,2,2,5,7,7,99]))
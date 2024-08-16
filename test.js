// Create an array and a Map with 1000 elements
const array2 = [[1,2,3],[4,5],[1,2,3]]
  
function MaxVal(array){
  let maxValue = 0
  for(let i in array){
    const current = array[i]
    for(let j in array){
      const compare = array[j]
      if (i!==j) {
         for(ci of current){
          for(cj of compare){
            const comp =Math.abs(ci-cj)  
            if (maxValue<comp) {
              maxValue = comp
            } 
          }
         }
  
        
      }
    }
  
  }
  return maxValue
}
var maxDistance = function(arrays) {
  if (arrays.length < 2) return 0;

  let globalMin = arrays[0][0];
  let globalMax = arrays[0][arrays[0].length - 1];
  let result = 0;

  for (let i = 1; i < arrays.length; i++) {
      const localMin = arrays[i][0];
      const localMax = arrays[i][arrays[i].length - 1];

      result = Math.max(result, Math.max(localMax - globalMin, globalMax - localMin));

      globalMin = Math.min(globalMin, localMin);
      globalMax = Math.max(globalMax, localMax);
  }

  return result;
};
console.log(MaxVal(array2))
console.log(maxDistance(array2))

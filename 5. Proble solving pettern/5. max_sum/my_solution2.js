const max_sum = (list, limit) => {
  let startpoint = 0;  
  let record_list =  [...list]
  let current_sum = 0
    // while (startpoint!==list.length) { 
  // while (startpoint !== list.length - limit) {
  //   // console.log(`while===================>${step}`,startpoint, limit,  )   
  //     let letest_pair = record_list.splice(startpoint,limit) 
  //     let letest_sum =  letest_pair.reduce((pre,curr)=>pre+curr,0)
  //     if (current_sum<letest_sum) {
  //       current_sum = letest_sum
  //     } 
  //     startpoint++
  //     record_list =  [...list] 
  // } 
 
for(let i in list){
  const letest_pair = record_list.splice(+i,limit)
  if (+i!==list.length-limit+1) { 

      const latest_sum = letest_pair.reduce((pre,curr)=>pre+curr,0)
        if (current_sum<latest_sum) {
        current_sum = latest_sum
      } 
      console.log(letest_pair,latest_sum)
      record_list =  [...list] 
  } 
}
  return `${current_sum}`;
};

console.log(max_sum([2,6,9,2,1,8,5,6,3], 3));
// console.log( [1,2,3,4,5,6].reduce((pre,curr)=>pre+curr,0))

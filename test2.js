function findStrings(s) {    
  let strLen = s.length;
  let curLargestStr = ``
  let newLargestStr = ``
  let newStr = "";
  for (let i = 0; i < strLen; i++) { 
    if ( newStr.includes(s[i]) ) {  
      const curIndex = s.indexOf(s[i])   
      newStr = newStr.slice(curIndex+1,i) 
      newStr += s[i];  
      newLargestStr = newStr  
      console.log(i,`==>curLargestStr`,curLargestStr, `==>newLargestStr`,newLargestStr,"==>newStr",newStr)
      if (curLargestStr.length < newLargestStr.length) {
        curLargestStr = newLargestStr 
      }  
    } else { 
      newStr += s[i] 
      if (curLargestStr.length < newStr.length) {
        curLargestStr = newStr 
      }  
    }
    
  } 
  return curLargestStr
}

console.log( 'solution========>',findStrings("aabaab!bb") )
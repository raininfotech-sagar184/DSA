function factorial(num, result) {
  console.log("==== call", num, result)
  if (num === 1) {
    console.log(result)
    return result
  }
  result = (result || 1) * num
  factorial(num - 1, result || 1)
}

factorial(4)
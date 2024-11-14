const includesString = (long, short) => {
  let match = 0
  for (let index = 0; index < long.length; index++) {
    if (`${long}`.slice(index, index + short.length) === short) {
      match++
    }
  }
  return match
}

console.log(includesString("lol lol lol", "lol"))
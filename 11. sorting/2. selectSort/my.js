const selectSort = (list) => {

  let small_val = list[0];
  let small_val_index = 0;
  var new_array = []
  for (let i = 0; i < list.length; i++) {
    for (let j = i; j < list.length; j++) {
      const next_element = list[j];
      if (small_val > next_element) {
        small_val = next_element
        small_val_index = j
      }
    }
    // small_val = list[i]; 
    if (list[i] !== small_val && i !== small_val_index) {
      list[small_val_index] = list[i]
      list[i] = small_val

    }
    small_val = list[i + 1];

    // }

  }
  return list
}


console.log(selectSort([1, 0, 8, 7, 9, 6, 5, 4, 5, 7]))
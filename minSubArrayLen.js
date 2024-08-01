function minSubArrayLen(list, num) {
  const sorted_list = list.sort();

  for (let i of sorted_list) {
    if (sorted_list[i] + sorted_list[i + 1] === num) {
      return [sorted_list[i], sorted_list[i + 1]];
    }
  }
  return null;
}

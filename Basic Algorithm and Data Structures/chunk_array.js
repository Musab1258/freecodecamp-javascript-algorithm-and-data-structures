function chunkArrayInGroups(arr, n) {
  let temp = [ ]
  let result = [ ]
  for (let a = 0; a < arr.length; a++) {
    if ( a % n !== n - 1) {
      temp.push(arr[a]);
      result.push(temp);
      temp
    } 
  }
  if (temp.length !== 0) {
    result.push(temp)
    return result;
  }
}

console.log(chunkArrayInGroups([1, 2, 3, 4, 5], 3))
function bouncer(arr) {
  let newArr = []
  for ( i = 0; i < arr.length; i++) {
    if (arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(bouncer([1, 2, 3, 4, 5]))
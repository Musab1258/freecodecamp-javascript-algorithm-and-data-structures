function findElement(arr, func) {
  let num = 0;
  for (var i = 0; i < arr.length; i++) {
    num = arr[i];
    if (num % 2 === 0) {
      return num
    }else {
      return "undefined"
    }
  }
}
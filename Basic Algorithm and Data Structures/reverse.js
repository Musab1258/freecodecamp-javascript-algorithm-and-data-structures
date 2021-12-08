function reverseString(str) {
  var reversedStr = " ";
  for (i = str.length; i >= 0; i--) {
   reversedStr += str[i];
  }
  return reversedStr
}

let me = reverseString('fear')

console.log(me)
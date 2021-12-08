function repeatStringNumTimes(str, num) {
  var accumulatedStr = ""
  for (var i = num; i > 0; i--) {
    accumulatedStr += " " + str
  }
  return accumulatedStr;
}

console.log(repeatStringNumTimes('five', 5))
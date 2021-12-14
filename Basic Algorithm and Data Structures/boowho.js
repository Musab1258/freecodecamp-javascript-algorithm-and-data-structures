function boowho(val) {
  return typeof val === boolean;
}

console.log(boowho(false))

function boowho(val) {
  if (val === true) {
    return true
  }else if (val === false) {
    return false
  }
}

function factorialize(num) {
  for (var products= 1; num > 0; num--) {
    products *= num
  }
  return products;
}

console.log(factorialize(5))
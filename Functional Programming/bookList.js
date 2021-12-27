var bookList = [ "The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophix Naturalis Principia Mathematica", "Disquitionnes Arithmeticae"];

function add(arr, bookName) {
  let newArr = [...arr];
  newArr.push(bookName);
  return newArr;
}

function remove(arr, bookName) {
  let newArr = [...arr]
  if (newArr.indexOf(bookName) >= 0) {
    newArr.splice(newArr.indexOf(bookName), 1);
  }
  return newArr
}

var newBookList = add(bookList, 'Me');
var newBookList1 = remove(bookList,'Disquitionnes Arithmeticae');
var newBookList2 = remove(add(bookList, 'Me'), 'You');

console.log(bookList);
console.log(newBookList);
console.log(newBookList1);
const obj = require('./dados');
const books = obj.books;

function longestNamedBook() {
  let result;
  result = books.reduce((acc, val) => val.name.length > acc.name.length ? val : acc);
  return result;
}

console.log(longestNamedBook());
const obj = require('./dados');
const books = obj.books;

function reduceNames() {
  let result;
  result = books.reduce((acc, val) => `${acc}, ${val.author.name}`, books[0].author.name);
  return result;
}

console.log(reduceNames());
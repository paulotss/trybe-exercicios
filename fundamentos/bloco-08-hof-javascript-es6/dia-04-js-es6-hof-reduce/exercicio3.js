const obj = require('./dados');
const books = obj.books;

function averageAge() {
  let result;
  result = books.reduce((acc, val) => acc + (val.releaseYear - val.author.birthYear),0);
  return result / books.length;
}

console.log(averageAge());
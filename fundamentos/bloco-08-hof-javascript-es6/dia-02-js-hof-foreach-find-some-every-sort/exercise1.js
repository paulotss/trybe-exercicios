const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

function authorBornIn1947() {
  let book = books.find((book) => {
    return book.author.birthYear === 1947;
  });
  return book.author.name;
}

console.log(authorBornIn1947());

function smallerName() {
  let nameBook;
  let menor = books[0].name.length;
  books.forEach((val) => {
    if (val.name.length < menor) {
      menor = val.name.length;
      nameBook = val.name;
    }
  });
  return nameBook;
}

console.log(smallerName());

function getNamedBook() {
  return books.find((val) => val.name.length === 26);
}

console.log(getNamedBook());

function booksOrderedByReleaseYearDesc() {
  books.sort((a, b) => {
    return b.releaseYear - a.releaseYear;
  });
  return books;
}

console.log(booksOrderedByReleaseYearDesc());

function everyoneWasBornOnSecXX() {
  return books.every((val) => val.author.birthYear >= 1900);
}

console.log(everyoneWasBornOnSecXX());

function someBookWasReleaseOnThe80s() {
  return books.some((val) => val.releaseYear >= 1980 && val.releaseYear < 1990);
}

console.log(someBookWasReleaseOnThe80s());

function authorUnique() {
  let result = false;
  for (let i = 0; i < books.length; i += 1) {
    result = books.some((val, index) => {
      return val.author.birthYear === books[i].author.birthYear && i !== index;
    });
    if (result) { break; }
  }
  return result;
}

console.log(authorUnique());
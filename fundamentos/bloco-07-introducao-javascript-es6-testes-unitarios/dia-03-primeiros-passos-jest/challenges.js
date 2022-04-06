// Desafio 1
function compareTrue(val1, val2) {
  return val1 && val2;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(arr) {
  return `${arr[arr.length - 1]}, ${arr[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(arr) {
  let count = 0;

  // Referência: W3CSchools - https://www.w3schools.com/js/js_array_sort.asp
  arr.sort(function (a, b) { return a - b; });

  let bigNumber = arr[arr.length - 1];
  for (let val of arr) {
    if (val === bigNumber) {
      count += 1;
    }
  }

  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  let result;
  if (distCat1 > distCat2) {
    result = 'cat2';
  } else if (distCat1 < distCat2) {
    result = 'cat1';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

function checkFizzBuzz(number) {
  let result;
  if (number % 5 === 0 && number % 3 === 0) {
    result = 'fizzBuzz';
  } else if (number % 3 === 0) {
    result = 'fizz';
  } else if (number % 5 === 0) {
    result = 'buzz';
  } else {
    result = 'bug!';
  }
  return result;
}

// Desafio 8
function fizzBuzz(arr) {
  for (let key in arr) {
    if (arr[key]) {
      arr[key] = checkFizzBuzz(arr[key]);
    }
  }
  return arr;
}

// Desafio 9
function encode(str) {
  let vogals = ['a', 'e', 'i', 'o', 'u'];
  let numbers = ['1', '2', '3', '4', '5'];
  for (let key in vogals) {
    if (vogals[key]) {
      str = str.replace(RegExp(vogals[key], 'g'), numbers[key]);
    }
  }
  return str;
}

function decode(str) {
  let vogals = ['a', 'e', 'i', 'o', 'u'];
  let numbers = ['1', '2', '3', '4', '5'];
  for (let key in numbers) {
    if (vogals[key]) {
      str = str.replace(RegExp(numbers[key], 'g'), vogals[key]);
    }
  }
  return str;
}

// Desafio 10
function techList(arr, name) {
  const objTech = [];
  if (arr.length > 0) {
    arr.sort();
    for (let val of arr) {
      objTech.push({
        tech: val,
        name,
      });
    }
  } else {
    return 'Vazio!';
  }
  return objTech;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};

module.exports = {encode, decode};
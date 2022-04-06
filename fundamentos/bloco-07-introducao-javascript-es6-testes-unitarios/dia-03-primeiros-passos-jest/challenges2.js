function countNumbersIqual(arr) {
  let text = arr.join('');
  for (let val of text) {
    if (text.match(RegExp(val, 'g')).length >= 3) {
      return true;
    }
  }
  return false;
}

// Desafio 11
function generatePhoneNumber(arr) {
  let result;
  if (arr.length !== 11) {
    result = 'Array com tamanho incorreto.';
  } else if (arr.join('').length > 11 || countNumbersIqual(arr)) {
    result = 'não é possível gerar um número de telefone com esses valores';
  } else {
    result = `(${arr.slice(0, 2).join('')}) ${arr.slice(2, 7).join('')}-${arr.slice(7).join('')}`;
  }
  return result;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let result;
  if (lineA > lineB + lineC) {
    result = false;
  } else if (lineB > lineA + lineC) {
    result = false;
  } else if (lineC > lineB + lineA) {
    result = false;
  } else {
    result = true;
  }
  return result;
}

// Desafio 13
function hydrate(str) {
  let numbers = str.replace(/[^0-9]/g, '');
  let arr = numbers.split('');
  let sum = 0;
  let result;
  for (let val of arr) {
    sum += Number(val);
  }

  if (sum > 1) {
    result = `${sum} copos de água`;
  } else {
    result = `${sum} copo de água`;
  }
  return result;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};

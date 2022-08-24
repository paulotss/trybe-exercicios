const readline = require("readline-sync");

const bmi = (weight, height) => {
  const result = weight / (height * height);
  return result;
}

const weight = readline.questionFloat("What' your weight? ");
const height = readline.questionFloat("What' your height? ");

const result = bmi(weight, height);

if(result < 18.5) {
  console.log(`${result} Abaixo do peso (magreza)`);
} else if (result < 24.9 && result >= 18.5) {
  console.log(`${result} Peso normal`);
} else if (result < 29.9 && result >= 25) {
  console.log(`${result} Acima do peso (sobrepeso)`);
} else if (result < 34.9 && result >= 30) {
  console.log(`${result} Obesidade grau I`);
} else if (result < 39.9 && result >= 35) {
  console.log(`${result} Obesidade grau II`);
} else if (result > 40) {
  console.log(`${result} Obesidade graus III e IV`);
} else {
  console.log('Inderteminado.');
}

//console.log(bmi(weight, height));
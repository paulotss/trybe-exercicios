const readline = require("readline-sync");

const bmi = (weight, height) => {
  const result = weight / (height * height);
  return result;
}

const weight = readline.questionFloat("What' your weight? ");
const height = readline.questionFloat("What' your height? ");

console.log(bmi(weight, height));
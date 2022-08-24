const bmi = (weight, height) => {
  const result = weight / (height * height);
  return result;
}

console.log(bmi(60, 1.8));
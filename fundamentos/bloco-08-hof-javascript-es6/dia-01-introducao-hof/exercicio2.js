check = (num1, num2) => {
  const result = num1 === num2 ? "Parabéns você ganhou!" : "Tente novamente!";
  return result;
}

const sorteio = (aposta, check) => {
  const rnd = Math.floor((Math.random() * 5)) + 1
  const verf = check(rnd, aposta);
  return verf;
}

console.log(sorteio(3,check));
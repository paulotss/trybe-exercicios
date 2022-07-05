const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const check = (gab, res) => {
  let soma = 0;
  for (let i = 0; i < gab.length; i += 1) {
    if(res[i] !== 'N.A') {
      soma = gab[i] === res[i] ? soma + 1 : soma - 0.5;
    }
  }
  return soma;
}

const resultadoProva = (gab, res, check) => {
  pontos = check(gab, res);
  return {
    nota: pontos,
    result: pontos >= 5 ? "Passou" : "Não Passou",
  }
}

console.log(resultadoProva(RIGHT_ANSWERS, STUDENT_ANSWERS, check));
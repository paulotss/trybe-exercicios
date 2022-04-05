testingScope = escopo => {
  if (escopo === true) {
    let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    return ifScope;
  } else {
    let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
    return elseScope;
  }
}

console.log(testingScope(true));

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
let aux = 0;

for (let i = 0; i < oddsAndEvens.length; i += 1) {
  for (let j = 0; j < (oddsAndEvens.length - i); j += 1) {
    if(oddsAndEvens[j] < oddsAndEvens[j - 1]) {
      aux = oddsAndEvens[j];
      oddsAndEvens[j] = oddsAndEvens[j - 1];
      oddsAndEvens[j - 1] = aux;
    }
  }
}

console.log(oddsAndEvens); // será necessário alterar essa linha 😉
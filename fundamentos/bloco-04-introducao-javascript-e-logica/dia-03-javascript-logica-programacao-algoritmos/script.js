//Exercício 1 - Calcula 10 fatorial
let result = 10;

for (let i = 9; i >= 1; i -= 1) {
    result = result * i;
}

console.log(result);

//Inverte letras da palavra
let word = 'tryber';
let invertWord = '';

for(let i = word.length - 1; i >= 0; i -= 1) {
    invertWord += word[i];
}

console.log(invertWord);
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

//Retorna maior e menor palavra em um array (bubble sort)
let array = ['java', 'javascript', 'python', 'html', 'css'];
let teste = '';

for (let i = 0; i < array.length; i += 1) {

    for(let j = 0; j < array.length - i - 1; j += 1) {

        if(array[j + 1].length > array[j].length) {

            let aux = array[j];
            array[j] = array[j + 1];
            array[j + 1] = aux;

        }

        teste += '|' + array[j];

    }

    console.log(teste);
    teste = '';
}

console.log("Maior palavra é " + array[0]);
console.log("Menor palavra é " + array[array.length - 1]);

//Retorna maior número primo entre 0 e 50
let verf = 0;
let primos = [];

for(let i = 1; i <= 50; i += 1) {
    for(let j = 1; j <= 50; j += 1) {
        if(i % j === 0) {
            verf += 1;
            if(verf > 2) {
                break;
            }
        }
    }
    if(verf === 2) {
        primos.push(i);
    }
    verf = 0;
}
console.log(primos);
console.log("Maior número primo é " + primos[primos.length - 1]);
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Imprime todos os elementos do array
for(let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
}

//Soma todos os elementos do array
let soma = 0;
for(let i = 0; i < numbers.length; i += 1) {
    soma += numbers[i];
}
console.log(soma);

//Imprime média aritmética
let media = soma / numbers.length;
console.log(media);

//Verifica se média é maior que 20
if(media > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}

//Verifica maior valor no array
let maior = false;
let maiorResult = 0;
for(i = 0; i < numbers.length; i += 1) {
    for(j = 0; j < numbers.length; j += 1) {
        if(numbers[i] < numbers[j]) {
            maior = false;
            break;
        } else {
            maior = true;
        }
    }
    if(maior) {
        maiorResult = numbers[i];
        break;
    }
}

console.log(maiorResult);

//Retorna quantidade de ímpares do array
let impares = 0;
for(i = 0; i < numbers.length; i += 1) {
    if(numbers[i] % 2 !== 0 ) {
        impares += 1;
    }
}

if(impares > 0) {
    console.log("O array tem " + impares + " valores ímpares.");
} else {
    console.log("Nenhum valor ímpar encontrado");
}
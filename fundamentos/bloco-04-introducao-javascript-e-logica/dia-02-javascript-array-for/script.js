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
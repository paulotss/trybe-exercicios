let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Ordem crescente com bubble sort method
for(i = 0; i < numbers.length; i += 1) {
    for(j = 0; j < numbers.length - i - 1; j += 1) {
        if(numbers[j] > numbers[j+1]) {
            let pos = numbers[j];
            numbers[j] = numbers[j+1];
            numbers[j+1] = pos;
        }
    }
}

console.log(numbers);

//Ordem decrescente com bubble sort
for(i = 0; i < numbers.length; i += 1) {
    for(j = 0; j < numbers.length - i - 1; j += 1) {
        if(numbers[j] < numbers[j+1]) {
            let pos = numbers[j];
            numbers[j] = numbers[j+1];
            numbers[j+1] = pos;
        }
    }
}

console.log(numbers);

//Cria array com multiplicação entre valores
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let mult = [];
for(i = 0; i < numbers.length; i += 1) {
    if(numbers[i+1]) {
        mult.push(numbers[i] * numbers[i + 1])
    } else {
        mult.push(numbers[i] * 2);
    }
}

console.log(mult);

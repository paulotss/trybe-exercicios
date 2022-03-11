//Não valida se o número romano é válido!
function converteEmRomanos(str) {

    const arr = str.split('');
    const arrConv = [];

    for(let val of arr) {
        switch(val) {
            case 'I' :
                arrConv.push(1);
                break;
            case 'V' :
                arrConv.push(5);
                break;
            case 'X' :
                arrConv.push(10);
                break;
            case 'L' :
                arrConv.push(50);
                break;
            case 'C' :
                arrConv.push(100);
                break;
            case 'D' :
                arrConv.push(500);
                break;
            case 'M' :
                arrConv.push(1000);
                break;
            default :
                return "Erro! Letra inválida";
        }
    }

    for(let i = 0; i < arrConv.length; i += 1) {
        if((arrConv[i] < 3 && arrConv[i + 1] < 3) || arrConv[i + 1] <= arrConv[i]) {
            let aux = arrConv[i] + arrConv[i + 1];
            arrConv.shift();
            arrConv.shift();
            arrConv.unshift(aux);
            i -= 1;
        } else if (arrConv[i + 1]){
            let aux = arrConv[i + 1] - arrConv[i];
            arrConv.shift();
            arrConv.shift();
            arrConv.unshift(aux);
            i -= 1;
        }
    }

    return arrConv[0];

}

console.log(converteEmRomanos('IV'));

function arrayOfNumbers(vector) {
    const pares = [];
    for(let i = 0; i < vector.length; i += 1) {
        for(let j = 0; j < vector[i].length; j += 1) {
            if(vector[i][j] % 2 === 0) {
                pares.push(vector[i][j]);
            }
        }
    }
    return pares;
}

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
console.log(arrayOfNumbers(vector));

function numberOfItems(arr) {
    const items = {};
    for(let i = 0; i < arr.length; i += 1) {
        
        if(!items[arr[i]]) {

            items[arr[i]] = 1;

            for(let j = 1; j < arr.length; j += 1) {
                if(arr[i] === arr[j]) {
                    items[arr[i]] += 1;
                }
            }

        }
        
    }
    return items;
}

const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
];

let items = numberOfItems(basket)

console.log("Sua cesta possui:")

for(let key in items) {
    console.log(items[key] + ": " + key);
}
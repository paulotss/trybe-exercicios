function verificaPalindromo(word) {
    let test = false;
    let arr = word.split('');
    let arrRev = word.split('');
    arrRev.reverse();
    for(let key in arr) {
        if(arr[key] === arrRev[key]) {
            test = true;
        } else {
            test = false;
            break;
        }
    }
    return test;
}

console.log(verificaPalindromo('desenvolvimento'));

function maiorValor(arr) {
    let test;

    for(let key in arr) {
        for(let val of arr) {
            if(arr[key] >= val) {
                test = true;
            } else {
                test = false;
                break;
            }
        }
        if(test) {
            return key;
        }
    }
}

arrTeste = [2, 3, 6, 7, 10, 1];

console.log(maiorValor(arrTeste));

function menorValor(arr) {
    let test;

    for(let key in arr) {
        for(let val of arr) {
            if(arr[key] <= val) {
                test = true;
            } else {
                test = false;
                break;
            }
        }
        if(test) {
            return key;
        }
    }
}

arrTeste = [2, 4, 6, 7, 10, 0, -3];

console.log(menorValor(arrTeste));

function maiorNome(arr) {
    let keys = []
    for(let val of arr) {
        keys.push(val.length);
    }
    return arr[maiorValor(keys)];
}

let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(maiorNome(nomes));

function maisRepete(arr) {
    let cont = 0;
    let hist = 0;
    let result;
    for(let val1 of arr) {
        for(let val2 of arr) {
            if(val1 === val2) {
                cont += 1;
            }
        }
        if(cont > hist) {
            result = val1;
        }
        hist = cont;
        cont = 0;
    }
    return result;
}

arrTeste2 = [2, 3, 2, 5, 8, 2, 3];

console.log(maisRepete(arrTeste2));
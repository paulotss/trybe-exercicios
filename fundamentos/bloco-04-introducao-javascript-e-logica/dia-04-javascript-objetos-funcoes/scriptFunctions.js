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
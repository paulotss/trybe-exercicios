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
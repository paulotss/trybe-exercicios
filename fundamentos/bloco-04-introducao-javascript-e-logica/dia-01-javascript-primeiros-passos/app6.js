function maiorNum(a, b) {
    let result;
    
    if(a > b) {
        result = a;
    } else if(a < b) {
        result = b;
    } else {
        result = "Iguais";
    }

    return result;
}

console.log(maiorNum(10, 13));
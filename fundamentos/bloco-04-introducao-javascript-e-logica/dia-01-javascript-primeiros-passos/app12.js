function par(n1, n2, n3) {
    let result;

    if (n1 % 2 === 0 || n2 % 2 === 0 || n3 % 2 === 0) {
        result = true;
    } else {
        result = false;
    }
    return result;
}

console.log(par(3, 5, 7));


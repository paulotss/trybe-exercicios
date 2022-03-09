//Bônus - Quadrado de asteriscos com lado n
let n = 10;
let linha = '';
for(let i = 0; i < n; i += 1) {
    for(let j = 0; j < n; j += 1) {
        linha += '*';
    }
    console.log(linha);
    linha = '';
}

//Bônus - Triângulo com base n
let t = 10;
linha = '';
for(let i = 0; i < t; i += 1) {
    for(let j = 0; j <= i; j += 1) {
        linha += '*';
    }
    console.log(linha);
    linha = '';
}

//Bônus - Triângulo invertudo com base n
let it = 10;
linha = '';
for (let i = it; i > 0; i -= 1) {
    for (let j = 1; j <= 10; j += 1) {
        if(j >= i) {
            linha += '*';
        } else {
            linha += ' ';
        }
    }
    console.log(linha);
    linha = '';
}
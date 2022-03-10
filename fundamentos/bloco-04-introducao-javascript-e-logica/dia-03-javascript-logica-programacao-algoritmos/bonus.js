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

//Bônus - Triângulo invertido com base n
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

//Bônus - Pirâmide com base n
let p = 11;
let alt = 1;
linha = '';
if(p % 2 === 0 || p < 3) {
    console.log("Erro - A base de ser ímpar e maior que 3");
} else {
    let meio = ((p-1) / 2) + 1
    for(let i = 0; i < p; i += 1) {
        if(alt <= meio) {
            for(let j = 1; j <= p; j += 1) {
                if( j >= meio - i && j <= meio + i ) {
                    linha += '*';
                } else {
                    linha += ' ';
                }
            }
            alt += 1;
        } else {
            break;
        }
        console.log(linha);
        linha = '';
    }
}
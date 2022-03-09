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
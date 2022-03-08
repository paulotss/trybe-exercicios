let valorCusto = -1;
let valorVenda = 2000;

if (valorCusto < 0 || valorVenda < 0) {
    console.log("Valores de entrada inválidos");
} else {
    let valorCustoTotal = valorCusto + (valorCusto * (20 / 100));
    let lucro = valorVenda - valorCustoTotal;
    console.log(lucro);
}
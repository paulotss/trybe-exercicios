function lucro(valorCusto, valorVenda) {
    let result;

    if (valorCusto < 0 || valorVenda < 0) {
        result = "Valores de entrada inválidos";
    } else {
        let valorCustoTotal = valorCusto + (valorCusto * (20 / 100));
        result = valorVenda - valorCustoTotal;
    }
    return result;
}

console.log(lucro(1800, 3000));


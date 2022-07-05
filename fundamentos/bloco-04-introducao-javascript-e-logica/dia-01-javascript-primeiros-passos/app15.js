function inss(salarioBruto) {
    let result;
    let aliquota;

    if (salarioBruto <= 1556.94) {
        aliquota = 8;
        result = salarioBruto - (salarioBruto * (aliquota / 100));
    } else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
        aliquota = 9;
        result = salarioBruto - (salarioBruto * (aliquota / 100));
    } else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
        aliquota = 11;
        result = salarioBruto - (salarioBruto * (aliquota / 100));
    } else if (salarioBruto > 5189.82) {
        result = salarioBruto - 570.88;
    }
    return result;
}

//INSS

function ir(salarioLiquido) {
    let result;
    let aliquota;

    if (salarioLiquido <= 1903.98) {
        result = salarioLiquido;
    } else if (salarioLiquido > 1903.98 && salarioLiquido <= 2826.65) {
        aliquota = 7.5;
        result = salarioLiquido - ((salarioLiquido * (aliquota / 100)) - 142.80);
    } else if (salarioLiquido > 2826.65 && salarioLiquido <= 3751.05) {
        aliquota = 15;
        result = salarioLiquido - ((salarioLiquido * (aliquota / 100)) - 354.80);
    } else if (salarioLiquido > 3751.05 && salarioLiquido <= 4664.68) {
        aliquota = 22.5;
        result = salarioLiquido - ((salarioLiquido * (aliquota / 100)) - 636.13);
    } else if (salarioLiquido > 4664.68) {
        aliquota = 27.5;
        result = salarioLiquido - ((salarioLiquido * (aliquota / 100)) - 869.36);
    }
    return result;
}

//IR


console.log(ir(inss(3000)));
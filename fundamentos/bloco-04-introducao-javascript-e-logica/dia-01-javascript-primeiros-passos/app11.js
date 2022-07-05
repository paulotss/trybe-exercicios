function avaliacao(nota) {
    let result;

    if(nota <= 100 && nota >= 0) {
        if (nota >= 90) {
            result = "A";
        } else if (nota >= 80) {
            result = "B";
        } else if (nota >= 70) {
            result = "C";
        } else if (nota >= 60) {
            result = "D";
        } else if (nota >= 50) {
            result = "E";
        } else {
            result = "F";
        }
    } else {
        result = "Nota inválida";
    }
    return result;
}

console.log(avaliacao(0));

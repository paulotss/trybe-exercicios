function sinal(val) {
    let result;
    if (val > 0) {
        result = "positive";
    } else if (val < 0) {
        result = "negative";
    } else {
        result = "zero";
    }
    return result;
}

console.log(sinal(-8));
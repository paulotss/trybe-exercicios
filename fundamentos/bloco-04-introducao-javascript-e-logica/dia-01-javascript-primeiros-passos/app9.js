function ang(ag1, ag2, ag3) {
    let total = ag1 + ag2 + ag3;
    let result;

    if (ag1 > 0 && ag2 > 0 && ag3 > 0) {
        if (total === 180) {
            result = true;
        } else {
            result = false;
        }
    } else {
        result = "Erro";
    }
    return result;
}

console.log(ang(50, 50, 80));
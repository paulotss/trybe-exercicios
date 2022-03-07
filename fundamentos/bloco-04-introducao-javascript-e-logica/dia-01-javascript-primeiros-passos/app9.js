const ag1 = 50;
const ag2 = 50;
const ag3 = 80;

let total = ag1 + ag2 + ag3;



if (ag1 > 0 && ag2 > 0 && ag3 > 0) {
    if (total === 180) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log("Erro");
}
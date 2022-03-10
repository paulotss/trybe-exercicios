function xadrez(peca) {
    peca = peca.toLowerCase();
    let result;

    switch (peca) {
        case "bispo" : 
            result = "Diagonais";
            break;
        
        case "peão" :
            result = "Frente";
            break;
        
        case "torre" :
            result = "Vertival/Horizontal";
            break;
        
        case "cavalo" :
            result = "Forma L";
        
        case "rainha" :
            result = "Vertical/Horizontal/Diagonal";
            break;
        
        case "rei" :
            result = "Qualquer casa adjacente";
            break;
        
        default :
            result = "Peça inválida";
    }
    return result;

}

console.log(xadrez('BISPO'));
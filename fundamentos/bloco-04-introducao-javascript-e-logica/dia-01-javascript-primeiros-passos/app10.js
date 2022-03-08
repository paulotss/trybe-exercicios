let peca = "BISPO";

peca = peca.toLowerCase();

switch (peca) {
    case "bispo" : 
        console.log("Diagonais");
        break;
    
    case "peão" :
        console.log("Frente");
        break;
    
    case "torre" :
        console.log("Vertival/Horizontal");
        break;
    
    case "cavalo" :
        console.log("Forma L");
    
    case "rainha" :
        console.log("Vertical/Horizontal/Diagonal");
        break;
    
    case "rei" :
        console.log("Qualquer casa adjacente");
        break;
    
    default :
        console.log("Peça inválida");
}
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};

//001
console.log('Bem vinda ' + info.personagem);

//002
info['recorrente'] = 'Sim';
console.log(info);

//003
for(let key in info) {
    console.log(key);
}

//004
for(let key in info) {
    console.log(info[key]);
}

//005
for(let key in info) {
    switch(key) {
        case 'personagem' :
            console.log(info[key] + ' e ' + info2[key]);
            break;
        case 'origem' :
            console.log(info[key] + ' e ' + info2[key]);
            break;
        case 'nota' :
            console.log(info[key] + ' e ' + info2[key]);
            break;
        case 'recorrente' : 
            if(info[key] === 'Sim' && info2[key] === 'Sim') {
                console.log('Ambos recorrentes');
            } else {
                console.log(info[key] + ' e ' + info2[key]);
            }
            break;
        default :
            console.log('Erro');
    }
}

//006
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
      {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
      }
    ],
};

console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo);

//007

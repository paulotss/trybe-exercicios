let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
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
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  let result;
  result = names.reduce((acc, val) => acc += val.match(/a/ig).length, 0);
  return result;
}

console.log(containsA());
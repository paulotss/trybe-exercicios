const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  let result;
  result = arrays.reduce((acc, val) => {
    for (let i of val) {
      acc.push(i);
    }
    return acc;
  });
  return result;
}

console.log(flatten());
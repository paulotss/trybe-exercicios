function fatorial(num) {
  let result = num;
  for (let i = num - 1; i > 0; i -= 1) {
    result *= i;
  }
  return result;
}

console.log(fatorial(4));

function greatWord(str) {
  const arr = str.split(' ');
  let result;
  for (let i = 0; i < arr.length - 1; i += 1) {
    result = arr[i].length > arr[i + 1].length ? arr[i] : arr[i + 1];
  }
  return result;
}

console.log(greatWord("Antônio foi no banheiro e não sabemos o que aconteceu"));
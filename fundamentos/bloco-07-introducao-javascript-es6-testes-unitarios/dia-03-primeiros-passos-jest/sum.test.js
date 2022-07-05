const {sum, myRemove, myFizzBuzz} = require('./sum');

describe('Requisito 1', () => {
  it('Teste se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toEqual(9);
  });
  test('Teste se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toEqual(0);
  });
  it('Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
    expect(() => {sum(4, '5')}).toThrow();
  });
  it('erro é parameters must be numbers', () => {
    expect(() => {sum(4, '5')}).toThrow('parameters must be numbers');
  })
});

describe('Requisito 2', () => {
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    const arr = [1, 2, 3, 4];
    expect(myRemove(arr, 3)).toEqual([1, 2, 4]);
  });
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    const arr = [1, 2, 3, 4];
    expect(myRemove(arr, 3)).not.toEqual(arr);
  });
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    const arr = [1, 2, 3, 4];
    expect(myRemove(arr, 5)).toEqual(arr);
  });
});

describe('Requisito 3', () => {
  it('Número divisível por 3 e 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('Número divisível por 3', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  });
  it('Número divisível por 5', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });
  it('Número não é divisível por 3 e 5', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });
  it('Não é um número', () => {
    expect(myFizzBuzz('5')).toBe(false);
  });
});
const sum = require('./sum');

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
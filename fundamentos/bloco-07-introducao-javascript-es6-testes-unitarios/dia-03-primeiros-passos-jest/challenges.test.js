const {encode, decode} = require('./challenges');

describe('Encode e Decode', () => {
  it('Testa se encode é função', () => {
    expect(typeof encode).toBe('function');
  });
  it('Testa se decode é função', () => {
    expect(typeof decode).toBe('function');
  });
  it('a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5', () => {
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
  });
  it('1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u', () => {
    expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
  });
  it('Demais letras não são convertidas', () => {
    expect(encode('qwrty')).toBe('qwrty');
  });
  it('Demais números não são convertidos', () => {
    expect(decode('06789')).toBe('06789');
  });
  it('encode - String com o mesmo número de caracteres', () => {
    expect(encode('aeiou').length).toBe(5);
  });
  it('decode - String com o mesmo número de caracteres', () => {
    expect(decode('12345').length).toBe(5);
  });
})
const searchEmployee = require('./professionalBoard');

describe('Testes para searchEmployee', () => {
  it('Verifica se está declarada', () => {
    expect(searchEmployee).toBeDefined();
  });
  it('Verifica se é função', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  it('Verifica se 4678-2 lastName return Dodds', () => {
    expect(searchEmployee('4678-2', 'lastName')).toBe('Dodds');
  });
  it('Se id não existir retorna ID não identificada', () => {
    expect(searchEmployee('12345', 'lastName')).toBe('ID não identificada');
  });
  it('Testa se propriedade não existe returna Informação indisponível', () => {
    expect(searchEmployee('4678-2', 'carro')).toBe('Informação indisponível');
  });
});
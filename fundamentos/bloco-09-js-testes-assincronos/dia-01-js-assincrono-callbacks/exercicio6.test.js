// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./exercicio6");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    getPokemonDetails((pokemon) => pokemon.name === 'null', (erro, message) => {
      try {
        expect(erro.message).toBe('Não temos esse pokémon para você :(');
        done();
      } catch (e) {
        done(e);
      }
    })
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    getPokemonDetails((pokemon) => pokemon.name === 'Squirtle', (erro, message) => {
      try {
        expect(message).toBe('Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun');
        done();
      } catch (e) {
        done(e);
      }
    });
  });
});
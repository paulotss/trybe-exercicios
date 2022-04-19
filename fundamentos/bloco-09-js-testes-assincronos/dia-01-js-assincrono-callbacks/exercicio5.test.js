const { it, beforeEach, expect, describe } = require("@jest/globals");
//const { describe } = require("yargs");
const { uppercase } = require("./exercicio5");

describe('Exercicio 5' , () => {

  it('Verifica a chamada da callback da uppercase', (done) => {
    
    uppercase('paulo', (result) => {
      try {
        expect(result).toBe('PAULO');
        done();
      } catch (e) {
        done(e);
      }
    })
    
  });
})
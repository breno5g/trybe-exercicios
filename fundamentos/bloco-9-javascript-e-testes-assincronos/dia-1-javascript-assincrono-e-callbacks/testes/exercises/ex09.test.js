// 9 - A fim de evitar que futuros treinadores sejam prejudicados, o Professor Carvalho pediu que você o ajude a escrever testes para o sistema que distribui os pokémons. Crie um novo arquivo .test.js ou .spec.js e copie o código abaixo. Complete os testes para a função getPokemonDetails de acordo com as especificações.

// Verifique se a importação do arquivo correto está sendo feita.
const { expect } = require('@jest/globals');
const { not } = require('expect');
const { getPokemonDetails } = require('./ex08');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokemon que não existe no banco de dados', (done) => {
    // Escreva aqui seu código
    const notFound = new Error('Não temos esse pokémon para você :(');

    getPokemonDetails(
      (pokemon) => pokemon.name === 'Pikachu',
      (error, result) => {
        expect(error).toEqual(notFound);
        done();
      },
    );
  });

  it('retorna um pokemon que existe no banco de dados', (done) => {
    // Escreva aqui seu código
    const expectedString =
      'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';

    getPokemonDetails(
      (pokemon) => pokemon.name === 'Charmander',
      (error, result) => {
        expect(result).toEqual(expectedString);
        done();
      },
    );
  });
});

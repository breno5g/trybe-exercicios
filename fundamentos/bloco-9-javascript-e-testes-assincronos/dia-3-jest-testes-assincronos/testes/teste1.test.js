const getSuperHero = require('./teste1');

test('Verifica se o nome do herói é Wonder Woman', async () => {
  const hero = await getSuperHero();
  expect(hero).toBe('Batman');
});

// Verifica erro
// test('Testa se o retorno da requisição com url alterada, retorna o erro, com async/await', async () => {
//   const error = await getSuperHero();
//   expect(error).toMatch('erro');
// });

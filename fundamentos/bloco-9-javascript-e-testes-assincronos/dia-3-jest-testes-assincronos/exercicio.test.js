// githubApi.test.js

// 1 - O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios e retorna uma lista como resultado. Dada a URL 'https://api.github.com/orgs/tryber/repos' , faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' se encontram nessa lista.

// const fetch = require('node-fetch');

// const getRepos = (url) =>
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => data.map((repo) => repo.name));

// implemente seus testes aqui

// const lista = [
//   'sd-01-week4-5-project-todo-list',
//   'sd-01-week4-5-project-meme-generator',
// ];

// const lista = [
//   'sd-01-week10-movie-card-library-tests',
//   'sd-03-block5-project-color-guess-tests',
// ];

// test('Testando se tem os repositorios da variavel lista', async () => {
//   const repos = await getRepos('https://api.github.com/orgs/tryber/repos');
//   const res = repos.filter((repo) => lista.includes(repo));
//   expect(res).toEqual(lista);
// });

// 2 - Para este exercício, tente adivinhar a saída dos console.log dos testes abaixo sem executá-los, e veja se compreendeu bem o funcionamento do beforeEach e do afterEach .

beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

// 1 - before
// 1 - test
// 1 - after
// 1 - before
// 2 - before
// 2 - test
// 2 - after
// 1 - after

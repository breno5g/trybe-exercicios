// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('teste de mock v1', async () => {
//   // global.fetch = () => {
//   //   return Promise.resolve({
//   //     // Cria uma promisse, pois é isso que o fetch espera
//   //     /*
//   //       Dentro da promisse tem um objeto com uma chave json,
//   //       que é uma função por isso usamos res.json()
//   //     */
//   //     json: () =>
//   //       /*
//   //         A chave json também retorna uma promisse mas
//   //         dessa vez com o objeto que devemos usar
//   //       */
//   //       Promise.resolve({
//   //         joke: 'É pave ou pra cume?',
//   //       }),
//   //   });
//   // };

//   global.fetch = jest.fn().mockResolvedValue({
//     json: jest.fn().mockResolvedValue({
//       joke: 'É pave ou pra cume?',
//     }),
//   });

//   render(<App />);
//   const renderedJoke = await screen.findByText('É pave ou pra cume?');
//   expect(renderedJoke).toBeInTheDocument();
// });

// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });

  render(<App />);
  const renderedJoke = await screen.findByText(
    'Whiteboards ... are remarkable.',
  );
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith('https://icanhazdadjoke.com/', {
    headers: { Accept: 'application/json' },
  });
});

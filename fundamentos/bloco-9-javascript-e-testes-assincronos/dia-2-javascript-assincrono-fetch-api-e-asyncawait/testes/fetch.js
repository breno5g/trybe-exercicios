// Pending

// const fetch = require('node-fetch');

// const fetchJoke = () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   console.log(fetch(url));
// };

// fetchJoke();

// Then para esperar a resposta

// const fetch = require('node-fetch');

// const fetchJoke = () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data.value));
// };

// fetchJoke();

// Catch para tratar o erro

// const fetch = require('node-fetch');

// const fetchJoke = () => {
//   const url = 'api.chucknorris.io/jokes/random?category=dev';

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data.value))
//     .catch((err) => console.log(`${err}`));
// };

// fetchJoke();

// Versão do fetch embarcado no js
// Funciona apenas com o auxilio de um navegador

// const URL = 'https://api.chucknorris.io/jokes/random?category=dev';

// fetch(URL)
//   .then((res) => res.json())
//   .then((res) => console.log(res.value));

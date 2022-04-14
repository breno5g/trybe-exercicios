const axios = require('axios');

const fetch = async () => {
  const promises = [];
  for (let id = 1; id < 10; id++) {
    const res = axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    promises.push(res);
  }

  Promise.all(promises).then((res) => {
    res.forEach((poke) => console.log(poke.data.name));
  });
  // resolvedPromises.forEach((res) => console.log(res.data.name));
};

fetch();

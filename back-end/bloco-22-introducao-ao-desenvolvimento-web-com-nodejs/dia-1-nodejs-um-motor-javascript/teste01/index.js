const axios = require('axios');

const fetch = async () => {
  const res = await axios.get('https://api.chucknorris.io/jokes/random');
  console.log(res.data.value);
};

fetch();

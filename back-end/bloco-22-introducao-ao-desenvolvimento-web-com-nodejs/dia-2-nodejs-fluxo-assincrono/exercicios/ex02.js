const { farofa } = require('./ex01');

const n1 = Math.floor(Math.random() * 100 + 1);
const n2 = Math.floor(Math.random() * 100 + 1);
const n3 = Math.floor(Math.random() * 100 + 1);

farofa(n1, n2, n3)
  .then((res) => console.log(res))
  .catch((err) => console.log(err.message));

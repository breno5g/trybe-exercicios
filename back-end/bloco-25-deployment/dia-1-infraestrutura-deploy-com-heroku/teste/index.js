const express = require('express');

const app = express();

app.get('/', (_req, res) => {
  res.send('Farofinha de ovo');
});

app.listen(3000, (_req, _res) => {
  console.log('Server on and hosting');
});

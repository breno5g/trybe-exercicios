const express = require('express');
require('dotenv').config();
const route = require('./routes');
const app = express();
app.use(express.json());

// app.get('/', (_req, res) => {
//   return res.status(200).json({message: 3000});
// });

app.use('/movies', route.movies);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('O pai tá on');
});

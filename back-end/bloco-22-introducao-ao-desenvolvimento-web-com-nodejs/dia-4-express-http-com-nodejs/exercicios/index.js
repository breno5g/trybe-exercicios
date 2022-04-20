import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

// 01 - Crie uma rota GET /ping
// Sua rota deve retornar o seguinte JSON: { message: 'pong' }

app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' });
});

// 2 - Crie uma rota POST /hello
// Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
// Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" } .

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({ message: `Hello ${name}` });
});

// 03 - Crie uma rota POST /greetings
// Sua rota deve receber o seguinte JSON: { "name": "<nome do usuário>", "age": <idade do usuário> } .
// Caso a pessoa usuária tenha idade superior a 17 anos, devolva o JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 - OK .
// Caso a pessoa usuária tenha 17 anos ou menos, devolva o JSON { "message": "Unauthorized" } com o status code 401 - Unauthorized .

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (parseInt(age) <= 17) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  return res.status(200).json({ message: `Hello ${name}` });
});

// 04 - Crie uma rota PUT /users/:name/:age.
// Sua rota deve retornar o seguinte JSON: { "message": "Seu nome é <name> e você tem <age> anos de idade" } .

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  return res
    .status(200)
    .json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

app.listen(3001, () => {
  console.log('O pai tá on');
});

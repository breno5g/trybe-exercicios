// 05 - Crie uma API de dados das personagens de Simpsons
// Crie um arquivo chamado simpsons.json e popule com os seguintes dados:

import express from 'express';
import bodyParser from 'body-parser';
import { getSimpsons, addNewSimpson, generateToken } from './helpers/index.js';

const app = express();

app.use(bodyParser.json());

// bonus 01 - Adicione autenticação a todos os endpoints.
// O token deve ser enviado através do header Authorization .
// O token deve ter exatamente 16 caracteres.
// Caso o token seja inválido ou inexistente, a resposta deve possuir o status 401 - Unauthorized e o JSON { message: 'Token inválido!' } .

const validateAuthorization = (req, res) => {
  const token = req.headers.authorization;
  if (!token || token.length !== 16) {
    return res.status(401).json({ message: 'Token inválido!' });
  }
};

// 06 Crie um endpoint GET /simpsons
// O endpoint deve retornar um array com todos os simpsons.

app.get('/simpsons', validateAuthorization, async (req, res) => {
  const simpsons = await getSimpsons();
  if (!simpsons) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
  return res.status(200).json(simpsons);
});

// 07 - Crie um endpoint GET /simpsons/:id
// O endpoint deve retornar o personagem com o id informado na URL da requisição.
// Caso não exista nenhum personagem com o id especificado, retorne o JSON { message: 'simpson not found' } com o status 404 - Not Found .

app.get('/simpsons/:id', validateAuthorization, async (req, res) => {
  const { id } = req.params;
  const simpsons = await getSimpsons();
  const selectedSimpson = simpsons.find((char) => char.id === id);

  if (!selectedSimpson) {
    return res.status(404).json({ message: 'simpson not found' });
  }

  return res.status(200).json(selectedSimpson);
});

// 08 - Crie um endpoint POST /simpsons .
// Este endpoint deve cadastrar novos personagens.
// O corpo da requisição deve receber o seguinte JSON: { id: <id-da-personagem>, name: '<nome-da-personagem>' } .
// Caso já exista uma personagem com o id informado, devolva o JSON { message: 'id already exists' } com o status 409 - Conflict .
// Caso a personagem ainda não exista, adicione-a ao arquivo simpsons.json e devolva um body vazio com o status 204 - No Content . Para encerrar a request sem enviar nenhum dado, você pode utilizar res.status(204).end(); .

app.post('/simpsons', validateAuthorization, async (req, res) => {
  try {
    const simpsons = await getSimpsons();
    const { id, name } = req.body;
    const verifyIfIdExists = simpsons.find((pers) => pers.id === id.toString());
    if (verifyIfIdExists) {
      return res.status(409).json({ message: 'id already exists' });
    }

    await addNewSimpson({ id, name });
    return res.status(204).end();
  } catch (err) {
    console.log(err.message);
    return res.status(500).end();
  }
});

// bonus 02 - Crie uma rota POST /signup
// A rota deve receber, no body da requisição, os campos email , password , firstName e phone .
// Caso algum dos campos não esteja preenchido, a response deve possuir status 401 - Unauthorized e o JSON { message: 'missing fields' } .
// Caso todos os parâmetros estejam presentes, a rota deve gerar um token aleatório válido, e a resposta deve conter o status 200 - OK , e o JSON { token: '<token-aleatorio>' } .

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'missing fields' });
  }

  return res.status(200).json({ token: generateToken() });
});

app.listen(3001, () => {
  console.log('Tamo on');
});

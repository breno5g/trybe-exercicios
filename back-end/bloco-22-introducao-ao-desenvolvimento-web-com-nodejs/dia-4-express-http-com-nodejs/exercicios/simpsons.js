// 05 - Crie uma API de dados das personagens de Simpsons
// Crie um arquivo chamado simpsons.json e popule com os seguintes dados:

import express from 'express';
import bodyParser from 'body-parser';
import { getSimpsons, addNewSimpson } from './helpers/index.js';

const app = express();

app.use(bodyParser.json());

// 06 Crie um endpoint GET /simpsons
// O endpoint deve retornar um array com todos os simpsons.

app.get('/simpsons', async (req, res) => {
  const simpsons = await getSimpsons();
  if (!simpsons) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
  return res.status(200).json(simpsons);
});

// 07 - Crie um endpoint GET /simpsons/:id
// O endpoint deve retornar o personagem com o id informado na URL da requisição.
// Caso não exista nenhum personagem com o id especificado, retorne o JSON { message: 'simpson not found' } com o status 404 - Not Found .

app.get('/simpsons/:id', async (req, res) => {
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

app.post('/simpsons', async (req, res) => {
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

app.listen(3001, () => {
  console.log('Tamo on');
});

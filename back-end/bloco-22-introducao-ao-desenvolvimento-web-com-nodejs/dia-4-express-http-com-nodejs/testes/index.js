import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get('/recipes', function (req, res) {
  // localcompare faz a comparação se a string deve vir antes ou depois e retorna um numero indicando a ordem
  const arr = recipes.sort((a, b) => a.name.localeCompare(b.name));
  return res.json(arr);
});

// app.get('/recipes/search', (req, res) => {
//   const { name } = req.query;
//   const arr = recipes.filter((recipe) => recipe.name.includes(name));
//   if (!arr) {
//     return res
//       .status(404)
//       .send({ message: 'Não foi possivel achar a receita' });
//   }
//   return res.json(arr);
//   // http://localhost:3001/recipes/search?name=Macarrão
// });

app.post('/recipes/add', (req, res) => {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price });
  res.status(201).json({ message: 'Recipe created with success' });
});

// caso algum maluco queira usar o fetch pra isso...
// fetch(`http://localhost:3001/recipes/`, {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     id: 4,
//     name: 'Macarrão com Frango',
//     price: 30
//   })
// });

app.get('/recipes/search', function (req, res) {
  const { name, maxPrice, minPrice } = req.query;
  const filteredRecipes = recipes.filter(
    (r) =>
      r.name.includes(name) &&
      r.price < parseInt(maxPrice) &&
      r.price >= parseInt(minPrice)
  );
  res.status(200).json(filteredRecipes);
});

app.get('/drinks/search', (req, res) => {
  const { name } = req.query;
  const arr = drinks.filter((drink) =>
    drink.name.toLowerCase().includes(name.toLowerCase())
  );

  if (!arr) return res.status(404).send({ message: 'Deu ruim' });
  return res.json(arr);
});

app.get('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const arr = drinks.sort((a, b) => a.name.localeCompare(b.name));
  const arrSorted = arr.find((drink) => drink.id === Number(id));
  if (!arrSorted) return res.status(404).send({ message: 'Deu ruim aqui' });
  if (id === 'all') return res.json(arr);
  return res.json(arrSorted);
});

app.get('/validateToken', function (req, res) {
  const token = req.headers.authorization;
  if (token.length !== 16) {
    return res.status(401).json({ message: 'Invalid Token!' });
  }

  res.status(200).json({ message: 'Valid Token!' });
});

app.listen('3001', () => {
  console.log('Tamo no ar');
});

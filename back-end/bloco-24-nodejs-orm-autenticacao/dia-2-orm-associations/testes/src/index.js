const express = require('express');
const { Address, Employee, Book, User } = require('./models');
require('dotenv').config();

const app = express();
app.use(express.json());

app.get('/employees', async (_req, res) => {
  try {
    const employees = await Employee.findAll({
      // vê se inclui a model Address com o nome addresses
      include: { model: Address, as: 'addresses' },
      // Se o relacionamento for 1:1 ele retorna separado os endereços
      // Se for 1:N ele retorna um array com os endereços
    });

    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
});

// app.get('/employees/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     // Poderia ser um find by pk também, só muda a posição do parametro id
//     const employee = await Employee.findOne({
//       where: { id },
//       include: [
//         {
//           model: Address,
//           as: 'addresses',
//           attributes: { exclude: ['number'] },
//         },
//       ],
//     });

//     if (!employee)
//       return res.status(404).json({ message: 'Funcionário não encontrado' });

//     return res.status(200).json(employee);
//   } catch (e) {
//     console.log(e.message);
//     res.status(500).json({ message: 'Algo deu errado' });
//   }
// });

// Nem funcionalidade do sequelize o lazy loading é... foda
app.get('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findOne({ where: { id } });

    if (!employee)
      return res.status(404).json({ message: 'Funcionário não encontrado' });

    if (req.query.includeAddresses === 'true') {
      const addresses = await Address.findAll({ where: { employeeId: id } });
      return res.status(200).json({ employee, addresses });
    }

    return res.status(200).json(employee);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.get('/usersbooks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { userId: id },
      include: [{ model: Book, as: 'books', through: { attributes: [] } }],
    });

    if (!user)
      return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('O pai tá on');
});

const { questionInt } = require('readline-sync');

const start = () => {
  const number = questionInt('Insira o numero desejado: ');

  const res = new Promise((resolve, reject) => {
    if (!number || number <= 0) reject(new Error('Numero invalido'));
    if (number % 3 === 0 && number % 5 === 0) resolve('FizzBuzz');
    if (number % 3 === 0) resolve('fizz');
    if (number % 5 === 0) resolve('buzz');
  });

  res.then((msg) => console.log(msg)).catch((err) => console.log(err));
};

start();

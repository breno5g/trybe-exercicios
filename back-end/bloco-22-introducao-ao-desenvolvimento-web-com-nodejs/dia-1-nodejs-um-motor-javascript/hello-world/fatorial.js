const { questionInt } = require('readline-sync');

const fatorial = () => {
  const initial = questionInt('Insira o valor para ser calculado: ');

  if (initial % 1 !== 0 || initial < 0) {
    console.log("O numero inserido é invalido");
    return false;
  }
  let res = initial;

  for (let i = initial - 1; i > 0; i--) {
    res *= i;
  }

  console.log(`A fatorial de ${initial} é ${res}.`);
};

fatorial();

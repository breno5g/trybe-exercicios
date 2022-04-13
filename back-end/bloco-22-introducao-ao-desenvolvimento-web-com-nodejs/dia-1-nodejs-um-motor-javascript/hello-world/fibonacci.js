const { questionInt } = require('readline-sync');

function fibonacci(n) {
  let res = [1, 1];
  for (let i = 0; i < n; i++) {
    const n = res[res.length - 2] + res[res.length - 1];
    res = [...res, n];
  }
  res.forEach((res) => console.log(res));
}

// Para fazer ele imprimir os numeros na quantida N, utilizo o - 2 para "eliminar" os inputs primarios.
// console.log(fibonacci(10 - 2));
// fibonacci(n - 2);

const start = () => {
  const n = questionInt('insira o valor de N: ');

  if (n <= 0) {
    console.log('Insira um valor valido!');
    start();
    return false;
  }

  fibonacci(n - 2);
};

start();

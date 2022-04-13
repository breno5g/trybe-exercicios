const readline = require('readline-sync');

const start = () => {
  const pitaco = readline.questionInt('Escolha um numero de 0 a 10: ');
  const sorted = Math.round(Math.random() * 10);

  if (pitaco === sorted) {
    console.log(`Congratulations my friendo`);
  } else {
    console.log(`miou, o numero sorteado foi ${sorted}`);
  }

  const playAgain = readline.question('Deseja jogar novamente? (y OR n) ');
  if (playAgain.toLowerCase() === 'y') {
    start();
  } else {
    console.log('Okay, nem queria mesmo');
  }
};

start();

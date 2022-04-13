const readline = require('readline-sync');

const pitaco = readline.questionInt('Escolha um numero de 0 a 10: ');
const sorted = Math.round(Math.random() * 10);

if (pitaco === sorted) {
  console.log(`Congratulations my friendo`);
} else {
  console.log(`miou, o numero sorteado foi ${sorted}`);
}

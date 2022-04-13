const readline = require('readline-sync');

console.log('=-=-=-=-=-=-= Calculadora de velocidade =-=-=-=-=-=-=');
console.log('');

const dist = readline.questionInt('Qual a distancia? ');
const temp = readline.questionInt('Qual o tempo? ');

console.log(
  `A velocidade é de ${(dist / temp).toFixed(2)} ${
    dist / temp > 1 ? 'metros' : 'metro'
  } por segundo`
);

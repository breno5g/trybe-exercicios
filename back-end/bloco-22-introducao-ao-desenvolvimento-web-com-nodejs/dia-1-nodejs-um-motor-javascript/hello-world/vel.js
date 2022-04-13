const readline = require("readline-sync");

const dist = readline.questionInt("Qual a distancia? ");
const temp = readline.questionInt("Qual o tempo? ");

console.log(`A velocidade é de ${(dist / temp).toFixed(2)} ${dist / temp > 1 ? "metros" : "metro"} por segundo`);

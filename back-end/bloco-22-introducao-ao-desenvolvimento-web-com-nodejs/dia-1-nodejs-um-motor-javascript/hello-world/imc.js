const readline = require("readline-sync");

const weight = readline.questionFloat("Qual é o seu peso (KG)? ");
const height = readline.questionFloat("Qual é sua altura (Metros)? ");

const imc = weight / (height ** 2);

console.log(`Seu IMC é de ${imc.toFixed(2)}`);

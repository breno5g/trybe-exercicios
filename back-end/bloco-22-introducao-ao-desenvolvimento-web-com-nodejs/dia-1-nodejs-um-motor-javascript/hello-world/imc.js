const readline = require('readline-sync');

console.log('=-=-=-=-=-=-= Calculadora de IMC =-=-=-=-=-=-=');
console.log('');

const weight = readline.questionFloat('Qual é o seu peso (KG)? ');
const height = readline.questionFloat('Qual é sua altura (Metros)? ');

const imc = weight / height ** 2;

if (imc <= 18.5) {
  console.log(`Seu IMC é de ${imc.toFixed(2)} | Abaixo do peso (magreza)`);
}
if (imc >= 18.5 && imc <= 24.9) {
  console.log(`Seu IMC é de ${imc.toFixed(2)} | Peso normal`);
}
if (imc >= 24.9 && imc <= 29.9) {
  console.log(`Seu IMC é de ${imc.toFixed(2)} | Acima do peso (sobrepeso)`);
}
if (imc >= 29.9 && imc <= 34.9) {
  console.log(`Seu IMC é de ${imc.toFixed(2)} | Obesidade grau I`);
}
if (imc >= 34.9 && imc <= 39.9) {
  console.log(`Seu IMC é de ${imc.toFixed(2)} | Obesidade grau II`);
}
if (imc >= 40) {
  console.log(`Seu IMC é de ${imc.toFixed(2)} | Obesidade grau III e IV`);
}

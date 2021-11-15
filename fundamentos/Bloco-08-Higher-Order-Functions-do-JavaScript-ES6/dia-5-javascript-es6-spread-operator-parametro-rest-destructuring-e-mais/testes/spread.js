// Exemplo que eu não conhecia

const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

// console.log(imc(...patientInfo)); // 20.76

// exemplo 02

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

// console.log(Math.max(...randomNumbers)); // 800
// console.log(Math.min(...randomNumbers)); // 5

// exemplo 3

const people = {
  id: 101,
  name: 'Alysson',
  age: 25,
};

const about = {
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer',
};

const customer = { ...people, ...about };
// console.log(customer); /* {
//   id: 101,
//   name: 'Alysson',
//   age: 25,
//   address: 'Av. Getúlio Vargas, 1000',
//   occupation: 'Developer'
// } */

// Para fixar
// Para fixar e praticar, vamos fazer uma salada de frutas com itens adicionais que você desejar. Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens , faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread .

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['mamão', 'banana', 'kiwi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'sabao', 'creme de barbear'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));

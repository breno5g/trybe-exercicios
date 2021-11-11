// Tabuada

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Normal
const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

// numbers.forEach(multipliesFor2);

// forEach
// numbers.forEach((n) => {
//   console.log(`${n} * 2 = ${n * 2}`)
// })

// UpperCase

const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

names.forEach((name, index) => {
  names[index] = name.toUpperCase();
});
// console.log(names);

// Exercicio
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

emailListInData.forEach((email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
});
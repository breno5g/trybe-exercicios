// 1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente 

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione se código aqui

// console.log(people.sort((a, b) => {
//   return a.age - b.age
// }));

// 2 - Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente .

console.log(people.sort((b, a) => {
  return a.age - b.age
}));
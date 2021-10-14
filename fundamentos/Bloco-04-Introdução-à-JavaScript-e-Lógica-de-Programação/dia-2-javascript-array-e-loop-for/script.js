let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 01 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

// for (let n of numbers) {
//   console.log(n);
// }

// 02 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

// let sum = 0;
// for (let n of numbers) {
//   sum += n;
// }

// console.log(sum);

// 03 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

// let sum = 0;
// for (let n of numbers) {
//   sum += n;
// }

// console.log(sum / numbers.length);

// 04 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// let sum = 0;
// for (let n of numbers) {
//   sum += n;
// }

// let res =
//   sum / numbers.length > 20
//     ? console.log('valor maior que 20')
//     : console.log('valor menor ou igual a 20');

// o5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;

// let bigger = 0;
// for (let n of numbers) {
//   if (n > bigger) {
//     bigger = n;
//   }
// }

// console.log(bigger);

//  06 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// let odd = 0;
// for (let n of numbers) {
//   if (n % 2 != 0) {
//     odd++;
//   }
// }

// let res =
//   odd > 1 ? console.log(odd) : console.log('nenhum valor ímpar encontrado');

// 07 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;

// let smaller = numbers[0];
// for (let n of numbers) {
//   if (n < smaller) {
//     smaller = n;
//   }
// }

// console.log(smaller);

// 08 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

// let arr = [];

// for (let i = 1; i <= 25; i++) {
//   arr.push(i);
// }

// console.log(arr);

// 09 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let arr = [];

for (let i = 1; i <= 25; i++) {
  arr.push(i);
}

for (let n of arr) {
  console.log(n / 2);
}

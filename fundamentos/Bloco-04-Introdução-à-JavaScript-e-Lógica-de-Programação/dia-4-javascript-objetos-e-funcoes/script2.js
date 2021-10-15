// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

// function farofa(string) {
//   let str = '';
//   for (let i = string.length - 1; i >= 0; i--) {
//     str += string[i];
//   }
//   if (str == string) {
//     console.log('Palindromo top');
//   } else {
//     console.log('tutu');
//   }
// }

// farofa('ararar');

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// let arr = [2, 3, 6, 7, 10, 1];

// let bigger = 0;
// for (let farofa in arr) {
//   if (arr[farofa] > bigger) {
//     bigger = farofa;
//   }
// }
// console.log(bigger);

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// let arr = [2, 3, 6, 7, 10, -3];

// let smaller = arr[0];
// for (let farofa in arr) {
//   if (arr[farofa] < smaller) {
//     smaller = farofa;
//   }
// }
// console.log(smaller);

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// let arr = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

// let bigger = '';
// for (let farofa of arr) {
//   if (farofa.length > bigger.length) {
//     bigger = farofa;
//   }
// }
// console.log(bigger);

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

let arr = [2, 3, 2, 5, 8, 2, 3];
let count = [];

let counter = 0;

let pudim = [...new Set(arr)];

for (let farofa of pudim) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === farofa) {
      counter++;
      // count[i] = { id: `${farofa}`, repet: counter };
      if (count[arr.indexOf(farofa)] != undefined) {
        count[arr.indexOf(farofa)].repet = counter;
      } else {
        count[pudim.indexOf(farofa)] = { id: farofa, repet: counter };
      }
    }
  }
  counter = 0;
}

console.log(count);

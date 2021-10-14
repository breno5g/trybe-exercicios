// 01 - 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

// let n = 5;
// let res = '';
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     res += '*';
//   }
//   console.log(res);
//   res = '';
// }

// 02 - 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

// let n = 5;
// let res = '';
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     res += '*';
//   }
//   console.log(res);
//   res = '';
// }

// 03 - Agora inverta o lado do triângulo. Por exemplo:

let n = 5;
let res = '';
let space = n - 1;
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < n; j++) {
    if (j < space) {
      res += ' ';
    } else {
      res += '*';
    }
  }
  console.log(res);
  res = '';
  space--;
}

// 4- Depois, faça uma pirâmide com n asteriscos de base:

// let n = 5;
// let res = '';
// let mid = (n + 1) / 2;
// let left = mid - 1;
// let right = mid - 1;
// for (let i = 0; i <= mid; i++) {
//   for (let j = 0; j <= n; j++) {
//     if (j > left && j < right) {
//       res += '*';
//     } else {
//       res += ' ';
//     }
//   }
//   console.log(res);
//   res = '';
//   left -= 1;
//   right += 1;
// }

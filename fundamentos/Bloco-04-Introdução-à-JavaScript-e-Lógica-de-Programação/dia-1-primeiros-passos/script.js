// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:

// const a = 10;
// const b = 2;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

// const a = 10;
// const b = 13;

// if (a > b) {
//   console.log(`O maior numero é ${a}`);
// } else {
//   console.log(`O maior numero é ${b}`);
// }

// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

// const a = 50;
// const b = 30;
// const c = 10;

// if (a > b && a > c) {
//   console.log(a);
// } else if (b > c) {
//   console.log(b);
// } else {
//   console.log(c);
// }

// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

// const n1 = 10;

// console.log(n1 >= 0 ? "positive" : "negative");

// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

// let a = 65;
// let b = 100;
// let c = 15;

// let somaDosAngulos = a + b + c;

// let positivoEOperante = a > 0 && b > 0 && c > 0;

// if (positivoEOperante) {
//   if (somaDosAngulos === 180) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// } else {
//   console.log("Erro: ângulo inválido");
// }

// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

const peca = 'RAiNha';

switch (peca.toLowerCase()) {
  case 'peão':
    console.log('Uma casa em linha reta ou duas na primeira movimentação');
    break;
  case 'torre':
    console.log('Quantidade indefinida de casa no eixo x e y');
    break;
  case 'bispo':
    console.log('Quantidade indefinida de casa no eixo x/y');
    break;
  case 'cavalo':
    console.log('Movimento em L');
    break;
  case 'rei':
    console.log('Um movimento para qualquer direção');
    break;
  case 'rainha':
    console.log('Quantidade indefinida de movimentos para qualquer eixo');
    break;
  default:
    console.log('Por favor insira uma peça valida');
}

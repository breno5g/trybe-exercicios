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

// const peca = 'RAiNha';

// switch (peca.toLowerCase()) {
//   case 'peão':
//     console.log('Uma casa em linha reta ou duas na primeira movimentação');
//     break;
//   case 'torre':
//     console.log('Quantidade indefinida de casa no eixo x e y');
//     break;
//   case 'bispo':
//     console.log('Quantidade indefinida de casa no eixo x/y');
//     break;
//   case 'cavalo':
//     console.log('Movimento em L');
//     break;
//   case 'rei':
//     console.log('Um movimento para qualquer direção');
//     break;
//   case 'rainha':
//     console.log('Quantidade indefinida de movimentos para qualquer eixo');
//     break;
//   default:
//     console.log('Por favor insira uma peça valida');
// }

// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

// const nota = 90;

// if (nota > 100 || nota < 0) {
//   console.log('err');
// } else if (nota >= 90) {
//   console.log('A');
// } else if (nota >= 80) {
//   console.log('B');
// } else if (nota >= 70) {
//   console.log('C');
// } else if (nota >= 60) {
//   console.log('D');
// } else if (nota >= 50) {
//   console.log('E');
// } else {
//   console.log('F');
// }

// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

// const n1 = 10;
// const n2 = 5;
// const n3 = 283;

// let teste = n1 % 2 == 0 || n2 % 2 == 0 || n3 % 2 == 0;

// console.log(teste);

// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

// Com ternario

// const n1 = 10;
// const n2 = 6;
// const n3 = 283;

// let teste =
//   n1 % 2 == 1 || n2 % 2 == 1 || n3 % 2 == 1
//     ? console.log(true)
//     : console.log(false);

// Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

function lucro(custo, venda, unidades) {
  if (custo >= 0 && venda >= 0) {
    return (venda - (custo + (custo / 100) * 20)) * unidades;
  } else {
    console.log('Num zei');
  }
}

console.log(lucro(50, 75, 1000));

// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

// function taCaro(sal) {
//   let salarioFinal = inss(sal);
//   salarioFinal = ir(salarioFinal);
//   console.log(salarioFinal);
// }

// function inss(sal) {
//   if (sal <= 1556.94) {
//     sal = sal - (sal / 100) * 8;
//   } else if (sal >= 1556.94 && sal <= 2594.92) {
//     sal = sal - (sal / 100) * 9;
//   } else if (sal >= 2594.92 && sal <= 5189.82) {
//     sal = sal - (sal / 100) * 11;
//   } else {
//     sal = sal - 570.88;
//   }

//   return sal;
// }

// function ir(sal) {
//   if (sal >= 1903.99 && sal <= 2826.65) {
//     sal -= (sal / 100) * 7.5 - 142.8;
//   } else if (sal >= 2826.65 && sal <= 3751.05) {
//     sal -= (sal / 100) * 15 - 354.8;
//   } else if (sal >= 3751.05 && sal <= 4664.68) {
//     sal -= (sal / 100) * 22.5 - 636.13;
//   } else {
//     sal -= (sal / 100) * 27.5 - 869.36;
//   }
//   return sal;
// }

// taCaro(3000);

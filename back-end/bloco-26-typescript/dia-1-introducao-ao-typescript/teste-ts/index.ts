// // let yes: boolean = true; // cria uma variável de nome "yes" e diz que o tipo é boleano e o valor é true
// // let no: boolean = false; // cria uma variável de nome "no" e diz que o tipo é boleano e o valor é false

// // // cria uma variável de nome "x" e diz que o tipo é number mas não seta o valor
// // // isso não funciona com const
// // let x: number;

// // let y: number = 0;
// // let z: number = 123.456;

// // let s: string;
// // let empty: string = '';
// // let abc: string = 'abc';

// // let nullValue = null;
// // let undefinedValue = undefined;

// // let flag = true; // o compilador irá inferir o tipo boolean
// // const numberPI = 3.1416; // o compilador irá inferir o tipo number
// // let message = 'Hello World!'; // o compilador irá inferir o tipo string

// // /////////////////////////////////////////////////////////

// // enum StudentStatus {
// //   // Active = 1, // Se quiser que comece de 1, mas o padrão é 0
// //   Active,
// //   Inactive,
// //   Paused,
// // }

// // let newStudentStatus: StudentStatus = StudentStatus.Inactive; // referenciamos um enum usando EnumName.Value
// // console.log(newStudentStatus); //saída: 2

// // enum StatusCodes {
// //   OK = 200,
// //   BadRequest = 400,
// //   Unauthorized,
// //   PaymentRequired,
// //   Forbidden,
// //   NotFound,
// // }

// // const ok = StatusCodes.OK;
// // const indiceOk = StatusCodes['OK'];
// // const stringBadRequest = StatusCodes[400];

// // console.log(ok); //saída: 200
// // console.log(indiceOk); //saída: 200
// // console.log(stringBadRequest); //saída: BadRequest
// // console.log(StatusCodes.NotFound);

// // enum WeekDays {
// //   domingo = 1,
// //   segunda,
// //   terca,
// //   quarta,
// //   quinta,
// //   sexta,
// //   sabado,
// // }

// // console.log(WeekDays);

// enum RainbowColors {
//   Red = 'vermelho',
//   orange = 'laranja',
//   yellow = 'amarelo',
//   green = 'verde',
//   blue = 'azul',
//   indigo = 'indigo',
//   violet = 'violeta',
// }

// console.log(RainbowColors.Red);

// enum Actions {
//   salvar = 1,
//   imprimir,
//   abrir,
//   visualizar,
//   fechar,
// }

// console.log(Actions.abrir);

// enum CardinalPoints {
//   Norte = 'N',
//   Leste = 'L',
//   Sul = 'S',
//   Oeste = 'O',
// }

// console.log(CardinalPoints.Leste);

// ./index.ts

import * as Exercise from './exercises';

console.log(Exercise.greeter('Maria'));
console.log(Exercise.personAge('Maria', 40));
console.log(`A soma do array é igual a ${Exercise.sumArray([3, 6, 9])}`);

console.log(
  `Triângulo de base 10cm e altura 25cm: ${Exercise.triangle(10, 25)}cm²`
);
console.log(
  `Triângulo de base 5cm e altura 30cm: ${Exercise.triangle(5, 30)}cm²`
);
console.log(
  `Triângulo de base 100cm e altura 200cm: ${Exercise.triangle(100, 200)}cm²`
);

console.log(`Quadrado de lado 10cm: ${Exercise.square(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Exercise.square(5)}cm²`);
console.log(`Quadrado de lado 100cm: ${Exercise.square(100)}cm²`);

console.log(
  `Retângulo de base 10cm e altura 25cm: ${Exercise.rectangle(10, 25)}cm²`
);
console.log(
  `Retângulo de base 5cm e altura 30cm: ${Exercise.rectangle(5, 30)}cm²`
);
console.log(
  `Retângulo de base 100cm e altura 200cm: ${Exercise.rectangle(100, 200)}cm²`
);

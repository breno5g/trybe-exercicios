// class Animal {
//   // Namoral, isso não deveria nem ser ensinado, que forma de declaração porca
//   constructor(public name: string, private birthDate: Date) { }

//   get age() {
//     /*Para operar com datas, vamos operar somente com milissegundos. Uma data
//     é o número de milissegundos desde o dia 01/01/1970 (era Unix).*/
//     const timeDiff = Math.abs(
//       Date.now() -
//       new Date(this.birthDate).getTime()
//     );

//     /*Convertendo de volta para o número de anos inteiros, considerando anos bissextos.
//     Tente entender a lógica abaixo: como converter de milissegundos para anos?*/
//     return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
//   }
// }

// class Mammal extends Animal {
//   walk() {
//     console.log(`${this.name} está andando!`);
//   }
// }

// const tiger = new Mammal(
//   'Tigre',
//   new Date(Date.parse('May 03, 2020')),
// );

// const main = (animal: Animal) => {
//   console.log(animal.age);
// };

// main(tiger);
// tiger.walk();

//\\//\\/\\//\\/\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\\//\\//\\

// Exemplo bem mais ou menos esse aqui do course
// class Superclass {
//   public isSuper = true;
//   // constructor() {

//   // }
//   public sayHello() {
//     console.log('Hello world');
//   }
// }

// class SubClass extends Superclass {}

// function myFunc(obj: Superclass) {
//   obj.sayHello();
// }

// const sub = new SubClass();
// const superIns = new Superclass();

// myFunc(sub);
// myFunc(superIns);

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

// interface Animal {
//   name: string;
//   age: number;

//   getBirthDate(): Date;
// }

// class Bird implements Animal {
//   constructor(public name: string, private birthDate: Date) {}

//   get age() {
//     const timeDiff = Math.abs(Date.now() - new Date(this.birthDate).getTime());
//     return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
//   }

//   getBirthDate() {
//     return this.birthDate;
//   }

//   fly() {
//     console.log(`${this.name} está voando!`);
//   }
// }

// const parrot = new Bird('Papagaio', new Date(Date.parse('Aug 16, 2015')));

// console.log(parrot.age);
// parrot.fly();

// /*
// Saída (código executado em Mar/2022):

// Papagaio está voando!
// */

// interface MyInterface {
//   myNumber: number;
//   myFunc(param: number): string;
// }

// class MyClass implements MyInterface {
//   // o texto abaixo está no course e me recuso a fazer isso
//   // Faça o atributo myNumber ser inicializado diretamente nos parâmetros do construtor da MyClass.
//   public myNumber = 0;
//   // E sim, sei que declarando no construtor não é necessario um valor default, mas isso é tosco

//   public myFunc(param: number): string {
//     return `myNumber + param = ${this.myNumber + param}`;
//   }
// }

// const objQueMeDeixaDepressivoDeTaoFeio = new MyClass();

// console.log(objQueMeDeixaDepressivoDeTaoFeio);
// console.log(objQueMeDeixaDepressivoDeTaoFeio.myFunc(10));

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

// Parei esse exemplo no meio, tá chato, mal escrito e prefiro pensar em algo depois
// interface Logger {
//   log(param: string): void;
// }

// class ConsoleLogger implements Logger {
//   public log(param: string) {
//     console.log(param);
//   }
// }


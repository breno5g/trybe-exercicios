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

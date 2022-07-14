// class Cake {
//   We can define the body of a class" constructor
//   function by using the keyword "constructor"
//   with a list of class variables.
//   constructor(name, toppings, price, cakeSize) {
//     this.name = name;
//     this.cakeSize = cakeSize;
//     this.toppings = toppings;
//     this.price = price;
//   }

//   As a part of ES2015+ efforts to decrease the unnecessary
//   use of "function" for everything, you'll notice that it's
//   dropped for cases such as the following. Here an identifier
//   followed by an argument list and a body defines a new method

//   addTopping(topping) {
//     this.toppings.push(topping);
//   }

//   Getters can be defined by declaring get before
//   an identifier/method name and a curly body.
//   get allToppings() {
//     return this.toppings;
//   }

//   get qualifiesForDiscount() {
//     return this.price > 5;
//   }

//   Similar to getters, setters can be defined by using
//   the "set" keyword before an identifier
//   set cakeSize(size) {
//     if (size < 0) {
//       throw new Error(
//         'Cake must be a valid size - either small, medium or large'
//       );
//     }
//     this._cakeSize = size;
//   }

//   get cakeSize() {
//     return this._cakeSize;
//   }
// }
// Usage
// const cake = new Cake('chocolate', ['chocolate chips'], 5, 'large');

// class BirthdayCake extends Cake {
//   surprise() {
//     console.log('Happy Birthday!');
//   }
// }

// const birthdayCake = new BirthdayCake(
//   'chocolate',
//   ['chocolate chips'],
//   5,
//   'large'
// );
// birthdayCake.surprise();

// class Cookie {
//   constructor(flavor) {
//     this.flavor = flavor;
//   }

//   showTitle() {
//     console.log(`The flavor of this cookie is ${this.flavor}.`);
//   }
// }

// class FavoriteCookie extends Cookie {
//   showTitle() {
//     super.showTitle();
//     console.log(`${this.flavor} is amazing.`);
//   }
// }

// let myCookie = new FavoriteCookie('chocolate');
// myCookie.showTitle();

// class CookieWithPrivateField {
//   #privateField;
// }

// class CookieWithPrivateMethod {
//   #privateMethod() {
//     return 'delicious cookies';
//   }
// }

// const teste = new CookieWithPrivateField();
// teste. // Tem nada no "."

//\\//\\//\\//\\//\\//\\//\\//\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

// console.log(this); // arquivos mjs usam strict mode, então é undefined
// console.log(globalThis); // aqui temos uma gambiarra para resolver isso

//\\//\\//\\//\\//\\//\\ Seção gambiarras do js//\\//\\//\\//\\//\\//\\

// const newObject = new Object();

// console.log(newObject);

// Object.defineProperty(newObject, 'someKey', {
//   value: 'for more control of the property\'s behavior',
//   writable: true,
//   enumerable: true,
//   configurable: true
// });

// console.log(newObject);

// const defineProp = (obj, key, value) => {
//   const config = {
//     value: value,
//     writable: true,
//     enumerable: true,
//     configurable: true,
//   };
//   Object.defineProperty(obj, key, config);
// };

// const person = Object.create(Object.prototype);
// // console.log(person.__proto__);

// defineProp(person, 'car', 'Delorean');
// defineProp(person, 'dateOfBirth', '1981');
// defineProp(person, 'hasBeard', false);

// console.log(person);

// const driver = Object.create(person);

// // Set some properties for the driver
// defineProp(driver, 'topSpeed', '100mph');

// console.log(driver);
// console.log(driver.__proto__);

// // Get an inherited property (1981)
// console.log(driver.dateOfBirth);

// // Get the property we set (100mph)
// console.log(driver.topSpeed);

//\\//\\//\\//\\//\\//\\//\\//\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

// class Car {
//   constructor(model, year, miles) {
//     this.model = model;
//     this.year = year;
//     this.miles = miles;
//   }

//   toString() {
//     return `${this.model} has done ${this.miles} miles`;
//   }
// }

// // Usage:

// // We can create new instances of the car
// let civic = new Car('Honda Civic', 2009, 20000);
// let mondeo = new Car('Ford Mondeo', 2010, 5000);

// // and then open our browser console to view the
// // output of the toString() method being called on
// // these objects
// console.log(civic.toString());
// console.log(mondeo.toString());

//\\//\\//\\//\\//\\//\\//\\ Object literals //\\//\\//\\//\\//\\//\\//\\

// ES2015+ keywords/syntax used: const, method declaration, template literals for string interpolation
// const myModule = {
//   myProperty: 'someValue',
//   // object literals can contain properties and methods.
//   // e.g we can define a further object for module configuration:
//   myConfig: {
//     useCaching: true,
//     language: 'en',
//   },
//   // a very basic method
//   saySomething() {
//     console.log('Where is Paul Irish debugging today?');
//   },
//   // output a value based on the current configuration
//   reportMyConfig() {
//     console.log(
//       `Caching is: ${this.myConfig.useCaching ? 'enabled' : 'disabled'}`
//     );
//   },
//   // override the current configuration
//   updateMyConfig(newConfig) {
//     if (typeof newConfig === 'object') {
//       this.myConfig = newConfig;
//       console.log(this.myConfig.language);
//     }
//   },
// };

// // Outputs: What is Paul Irish debugging today?
// myModule.saySomething();

// // Outputs: Caching is: enabled
// myModule.reportMyConfig();

// // Outputs: fr
// myModule.updateMyConfig({
//   language: 'fr',
//   useCaching: false,
// });

// // Outputs: Caching is: disabled
// myModule.reportMyConfig();

//\\//\\//\\//\\//\\//\\//\\//\\// Singleton \\//\\//\\//\\//\\//\\//\\//\\//\\


// Usage:
// import MySingleton from './patterns/MySingleton.mjs';
// import MyBadSingleton from './patterns/MyBadSingleton.mjs';

// const singleA = new MySingleton();
// const singleB = new MySingleton();
// console.log(singleA.getRandomNumber() === singleB.getRandomNumber()); // true

// const badSingleA = new MyBadSingleton();
// const badSingleB = new MyBadSingleton();
// console.log(badSingleA.getRandomNumber() !== badSingleB.getRandomNumber()); // true

// Note: as we are working with random numbers, there is a
// mathematical possibility both numbers will be the same,
// however unlikely. The above example should otherwise still
// be valid.

// Tive um **** de um mind blowing

// class maycon {
//   constructor() {

//   }

//   metodo() {
//     return Math.random();
//   }
// }

// const teste1 = new maycon();
// const teste2 = new maycon();

// console.log(teste1.metodo());
// console.log(teste2.metodo());
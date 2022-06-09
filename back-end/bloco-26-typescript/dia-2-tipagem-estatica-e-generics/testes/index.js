// type Point = {
//   // Type para variaveis e interface para classes
//   x: number;
//   y: number;
// };
// function printCoord(pt: Point) {
//   console.log('O valor da cordenada x é: ' + pt.x);
//   console.log('O valor da coordenada y é: ' + pt.y);
// }
// printCoord({ x: 100, y: 100 });
/////\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\\\\
////\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\/\\\\\
// type BirdType = {
//   name: string;
//   specie: string;
//   lenght: number;
// };
// const cleitin: BirdType = {
//   name: 'Cleitin',
//   specie: 'Cleitacio',
//   lenght: 50,
// };
/////\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\\\\
////\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\/\\\\\
// type MatterStateType = {
//   state: 'solido' | 'liquido' | 'gasoso';
// };
// // Não funfa pois não está na tipagem
// // const portugues: MatterStateType = {
// //   state: 'chata',
// // };
// const water: MatterStateType = {
//   state: 'solido',
// };
// type CPFType = {
//   cpf: string | number;
// };
// const CPF: CPFType = {
//   // cpf: "192.168.0-1"
//   cpf: 19216801,
// };
// type OSType = {
//   os: 'bom gosto' | 'burgues' | 'padraozinho';
// };
// const computer: OSType = {
//   os: 'bom gosto',
// };
// type VowelType = {
//   letter: 'a' | 'e' | 'i' | 'o' | 'u';
// };
// const voewl: VowelType = {
//   letter: 'a',
// };
/////\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\\\\
////\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\/\\\\\
// enum EyeColor {
//   Black = 'Pretos',
//   Blue = 'Azuis',
//   Green = 'Verdes',
//   Brown = 'Castanhos',
// }
// class Person {
//   name: string;
//   birthDate: Date;
//   eyeColor?: EyeColor;
//   // Supostamente passando "?" no final do parametro ele fica opcional...
//   // mas pra mim ainda retorna undefined, no course não retorna nada
//   constructor(name: string, birthDate: Date, eyeColor?: EyeColor) {
//     this.name = name;
//     this.birthDate = birthDate;
//     this.eyeColor = eyeColor;
//   }
//   speak(): void {
//     console.log(`${this.name} está falando.`);
//   }
//   eat(): void {
//     console.log(`${this.name} está comendo.`);
//   }
//   walk(): void {
//     console.log(`${this.name} está andando.`);
//   }
// }
// const eu = new Person('Breno', new Date('2000-03-08'));
// console.log(eu);
var Person = /** @class */ (function () {
    function Person(fullName, cpf) {
        this.fullName = fullName;
        this.cpf = cpf;
    }
    Object.defineProperty(Person.prototype, "getCpf", {
        get: function () {
            return this.cpf;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setCpf", {
        set: function (value) {
            this.cpf = value;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var eu = new Person('Breno', '192.168.0-1');
console.log(eu);
console.log(eu.getCpf);
eu.setCpf = '192.168.254-254';
console.log(eu.getCpf);

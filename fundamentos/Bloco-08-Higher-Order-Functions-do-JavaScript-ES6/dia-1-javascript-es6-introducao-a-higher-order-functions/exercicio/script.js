const newEmployees = (callback) => {
  const employees = {
    id1: callback("Pedro Guerra"), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback("Luiza Drummond"), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback("Carla Paiva"), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

function generator(name) {
  return {name, email: `${name.split(" ").join("-")}@trybe.com`}
}

// console.log(newEmployees(generator))

// Exercicio 2

function sorteio(number, callback) {
  let sortedNumber = Math.floor(Math.random() * 5 + 1)
  return callback(number, sortedNumber) ? "Ganhou" : "Perdeu"
}

function checker(n1, n2) {
  return n1 === n2;
}

// console.log(sorteio(3, checker))

// Exercicio 3 

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

function verify(template, answers, callback) {
  let contador = 0;
  for (let index = 0; index < template.length; index += 1) {
    const returner = callback(template[index], answers[index]);
    contador += returner;
  }
  return `Resultado final: ${contador} corretas`;
}

// console.log(verify(RIGHT_ANSWERS, STUDENT_ANSWERS, (a, b) => {
//   if (a === b) {
//     return 1;
//   } if (b === 'N.A') {
//     return 0;
//   }
//   return -0.5;
// }));

// Bonus;

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamageCalc = (player) => {
  return Math.floor((Math.random() * (player.strength - 15 + 1) + 15));
}

const warriorDamageCalc = (player) => {
  let max = player.strength * player.weaponDmg;
  return Math.floor((Math.random() * (max - player.strength + 1) + player.strength));
}

const mageDamageCalc = (player) => {
  let max = player.intelligence * 2;
  let turn = {
    damage: "Not enough mana",
    manaSpent: 0
  }
  if (player.mana > 15) {
    turn.damage = Math.floor((Math.random() * (max - player.intelligence + 1) + player.intelligence));
    turn.manaSpent = 15;
  }
  return turn;
}

const gameAction = {
  warriorTurn: (hof) => {
    let damage = hof(warrior)
    warrior.damage = damage;
    dragon.healthPoints -= damage;
  },
  mageTurn: (hof) => {
    let damage = hof(mage);
    mage.damage = damage.damage;
    mage.mana = mage.mana - damage.manaSpent;
    dragon.healthPoints -= damage.damage;
  },
  dragonTurn: (hof) => {
    let damage = hof(dragon);
    dragon.damage = damage;
    warrior.healthPoints -= damage;
    mage.healthPoints -= damage;
  },
  membersLogs: () => {
    return battleMembers;
  }
}

gameAction.warriorTurn(warriorDamageCalc)
gameAction.mageTurn(mageDamageCalc)
gameAction.dragonTurn(dragonDamageCalc)

console.log(gameAction.membersLogs())
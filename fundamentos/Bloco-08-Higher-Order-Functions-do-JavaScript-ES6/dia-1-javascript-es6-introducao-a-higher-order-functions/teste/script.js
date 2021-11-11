const acordaBacuri = () => "Acordando!!"
const baterUmRango = () => "Bora tomar café!!"
const durmaBacuri = () => "Partiu dormir!!"

// Ao chamar a função doingThings:
function doingThings(param) {
  return param();
};

console.log(doingThings(acordaBacuri))
console.log(doingThings(baterUmRango))
console.log(doingThings(durmaBacuri))

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!
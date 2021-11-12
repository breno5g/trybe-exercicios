// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((a, b) => a + b.split("").reduce((a1, b1) => {
    if (b1 === "a" || b1 === "A") return a1 += 1;
    return a1
  }, 0), 0);
}

console.log(containsA())
const fs = require('fs').promises;
const readline = require('readline-sync');

const init = async () => {
  const archives = ['simpsonFamily.json', 'simpsons.json', 'fileAll.json'];

  const message = archives.map(
    (mariotto, index) => `${index + 1} - ${mariotto}`
  );

  console.log('Escolha qual arquivo deseja alterar \n');
  console.log(message.join('\n'));

  const select = readline.questionInt('Insira o numero desejado: ');

  if (select > 3 || !select || select <= 0) {
    reject(new Error('valor inserido invalido'));
  }

  const word = readline.question('Insira a palavra que quer substituir: ');
  const substitute = readline.question(
    'Insira a palavra que será usada na substituição: '
  );
  const text = await fs
    .readFile(`./${archives[select - 1]}`, 'utf-8')
    .then((res) => res.toString());

  const output = text.replace(new RegExp(word, 'g'), substitute);
  console.log(output);

  const destino = readline.question(
    '\nInsira o nome do arquivo de destino (com extensão): '
  );

  fs.writeFile(`./${destino}`, output);
};
// (function teste(param) {
//   console.log(param);
// })('parametro bonito');

init();

const fs = require('fs').promises;
const readline = require('readline-sync');

const archives = ['simpsonFamily.json', 'simpsons.json', 'fileAll.json'];

const message = archives.map((mariotto, index) => `${index + 1} - ${mariotto}`);

console.log('Escolha qual arquivo deseja ler');
console.log(message.join('\n'));

const select = readline.questionInt('Insira o numero desejado: ');

fs.readFile(`./${archives[select - 1]}`, 'utf-8')
  .then((res) => {
    console.log(`\nEste é o conteudo do arquivo ${archives[select - 1]}\n`);
    console.log(res.toString());
  })
  .catch((err) => console.log(err.message));

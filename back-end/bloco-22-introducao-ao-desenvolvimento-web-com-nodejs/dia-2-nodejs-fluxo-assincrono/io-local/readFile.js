// Sem promises

// const fs = require('fs');

// const nomeDoArquivo = 'meu-arquivo.txt';

// fs.readFile(nomeDoArquivo, 'utf8', (err, data) => {
//   if (err) {
//     console.error(
//       `Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err.message}`
//     );
//     process.exit(1);
//   }
//   console.log(`Conteúdo do arquivo: ${data}`);
// });

// Com promises

const fs = require('fs').promises;

const nomeDoArquivo = 'meu-arquivo.txt';

// Com then
// fs.readFile(nomeDoArquivo, 'utf8')
//   .then((data) => {
//     console.log(`Conteúdo do arquivo: ${data}`);
//   })
//   .catch((err) => {
//     console.error(
//       `Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`
//     );
//     process.exit(1); // Encerra a execução do script e informa ao sistema operacional que houve um erro com código
//   });

// Async / await

// const pudim = async () => {
//   const res = await fs.readFile(nomeDoArquivo, 'utf-8');
//   console.log(res);
// };

// Async / await + try / catch

const pudim = async () => {
  try {
    const res = await fs.readFile(nomeDoArquivo, 'utf-8');
    console.log(res);
  } catch (err) {
    console.log(err.message);
    // explicação sobre o process
    // https://nodejs.dev/learn/how-to-exit-from-a-nodejs-program
    process.exit(1);
  }
};

pudim();

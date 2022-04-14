const fs = require('fs').promises;

// Async / await que já fiz os testes antes
// async function main() {
//   try {
//     await fs.writeFile('./meu-arquivo.txt', 'Meu textão');
//     console.log('Arquivo escrito com sucesso!');
//   } catch (err) {
//     console.error(`Erro ao escrever o arquivo: ${err.message}`);
//   }
// }

// main()

// Permite que você passe um array de promises e junta todas as prmises em uma promise unica
// Promise.all([
//   fs.readFile('file1.txt'),
//   fs.readFile('file2.txt'),
//   fs.readFile('file3.txt'),
// ])
//   .then(([file1, file2, file3]) => {
//     const fileSizeSum = file1.byteLength + file2.byteLength + file3.byteLength;
//     console.log(`Lidos 3 arquivos totalizando ${fileSizeSum} bytes`);
//   })
//   .catch((err) => {
//     console.error(`Erro ao ler arquivos: ${err.message}`);
//   });

Promise.all([
  fs.readFile('file1.txt'),
  fs.readFile('file2.txt'),
  fs.readFile('file3.txt'),
])
  .then((params) => {
    // Okay, acho que tô entendendo como trabalhar de boa com o raw buffer
    // a conversão para string é rapida e sincrona
    params.forEach((file) => {
      console.log(file.toString('utf-8'));
    });
  })
  .catch((err) => console.log(err));

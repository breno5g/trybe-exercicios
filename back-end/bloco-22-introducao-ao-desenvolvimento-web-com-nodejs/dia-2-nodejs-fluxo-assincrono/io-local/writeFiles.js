const fs = require('fs').promises;

// Uma promise igual a utilizada no ultimo teste, mas com writeFile (escreve nos arquivos)
// O write file sobreescreve tudo do arquivo
// fs.writeFile('./meu-arquivo.txt', 'Meu textão')
//   .then(() => {
//     console.log('Arquivo escrito com sucesso!');
//   })
//   .catch((err) => {
//     console.error(`Erro ao escrever o arquivo: ${err.message}`);
//   });

// o append "acrescenta" ao final do arquivo
fs.appendFile('./meu-arquivo.txt', '\n Meu textão')
  .then(() => {
    console.log('Arquivo escrito com sucesso!');
  })
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  });

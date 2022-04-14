const fs = require('fs');

fs.readFile('./arquivo.txt', (err, content) => {
  if (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
    return;
  }
  // console.log(content) //Pesquisar o que quer dizer o resultado disso (me parecem posições na mememoria)
  // Update - aquilo é um raw buffer / uma referencia para a memoria bruta alocada fora do node
  console.log(`Arquivo lido com sucesso. Conteúdo: ${content.toString('utf8')}`);
});

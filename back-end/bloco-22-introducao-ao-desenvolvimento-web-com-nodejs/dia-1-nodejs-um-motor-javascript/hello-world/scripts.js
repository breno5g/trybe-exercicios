const readline = require('readline-sync');

const scripts = [
  { name: 'imc', path: './imc.js' },
  { name: 'vel', path: './vel.js' },
  { name: 'sort', path: './sort.js' },
];

const message = scripts.map((scr, index) => `N-${index + 1} - ${scr.name}`);

message.unshift('Escolha um numero para rodar os script: ');

/*
  stack overflow é lindo demais
  https://stackoverflow.com/questions/9270409/explode-string-and-make-a-line-break-after-each-word
*/

const messageToShow = message.join('\n');

console.log(messageToShow);

const selectedOption = readline.questionInt(
  'Insira o numero da opção selecionada: '
);

// Consegui rodar utilizando o require mas não achei conteudo sobre isso. *lembrar de revisar*
// Acho que por dar um require num arquivo com execução "automatica" e não atribuir a nenhuma variavel, ele executa diretamente

require(scripts[selectedOption - 1].path);

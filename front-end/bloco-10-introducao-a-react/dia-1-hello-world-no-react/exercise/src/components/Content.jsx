import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido',
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei',
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei',
  },
];

const teste = conteudos.map((cont) => (
  <ul key={cont.conteudo}>
    <li>O conteudo é: {cont.conteudo}</li>
    <li>O bloco é: {cont.bloco}</li>
    <li>O status é: {cont.status}</li>
  </ul>
));

console.log(teste);

class Content extends React.Component {
  render() {
    return <div>{teste}</div>;
  }
}

export default Content;

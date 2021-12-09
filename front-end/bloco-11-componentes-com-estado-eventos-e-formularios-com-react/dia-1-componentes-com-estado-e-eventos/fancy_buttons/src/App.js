import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      clicks1: 0,
      clicks2: 0,
      clicks3: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    // Faz a `ligação` do `this` com o handle click
  }

  handleClick(props) {
    // console.log(this);
    // console.log(props);
    this.setState((state) => ({
      [`clicks${props}`]: state[`clicks${props}`] + 1,
    }));
    // É utilizado a arrow function para manter a ordem de precedencia, pois o react trabalha de forma assincrona e dependendo da velocidade da requisição pode dar problema
  }

  render() {
    return (
      <>
        <button type='button' onClick={() => this.handleClick('1')}>
          Foi clicado {this.state.clicks1} vezes
        </button>
        <button type='button' onClick={() => this.handleClick('2')}>
          Foi clicado {this.state.clicks2} vezes
        </button>
        <button type='button' onClick={() => this.handleClick('3')}>
          Foi clicado {this.state.clicks3} vezes
        </button>
        {/* <h1>Numero de cliques: {this.state.clicks}</h1> */}
      </>
    );
  }
}

export default App;

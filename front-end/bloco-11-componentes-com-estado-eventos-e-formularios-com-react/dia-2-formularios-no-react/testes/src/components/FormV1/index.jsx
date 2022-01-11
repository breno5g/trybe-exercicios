import React, { Component } from 'react';
import styles from './styles.module.scss';

export class FormV1 extends Component {
  constructor() {
    super();

    this.state = {
      estadoFavorito: '',
      nome: '',
      email: '',
      idade: 0,
      vaiComparecer: false,
      palavraChaveFavorita: '',
    };

    this.handleValueChange = this.handleValueChange.bind(this);
  }

  // Handler v1
  // handleValueChange(e) {
  //   if (typeof this.state[e.target.name] !== 'boolean') {
  //     this.setState((state) => ({
  //       [e.target.name]: e.target.value,
  //     }));
  //   } else {
  //     this.setState((state) => ({
  //       [e.target.name]: !state[e.target.name],
  //     }));
  //   }
  // }

  // Handler v2
  handleValueChange({ target }) {
    const name = target.name;
    const value = target.type !== 'checkbox' ? target.value : target.checked;

    this.setState(() => ({
      [name]: value,
    }));
  }

  render() {
    return (
      <div className={styles.main}>
        <h1>
          Estados e React: ferramenta incrivel ou reagindo a regionalismos?
        </h1>
        <form>
          <label>
            Diga qual é o seu Estado favorito! Do Brasil ou do React, você quem
            sabe!
            <textarea
              name="estadoFavorito"
              value={this.state.estadoFavorito}
              onChange={this.handleValueChange}
            ></textarea>
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleValueChange}
            />
          </label>
          <label>
            Nome
            <input
              name="nome"
              type="text"
              value={this.state.name}
              onChange={this.handleValueChange}
            />
          </label>
          <label>
            Idade
            <input
              name="idade"
              type="number"
              value={this.state.idade}
              onChange={this.handleValueChange}
            />
          </label>
          <label>
            Vai comparecer a conferênia?
            <input
              name="vaiComparecer"
              type="checkbox"
              onChange={this.handleValueChange}
            />
          </label>
          <label>
            Escolha sua palavra chave favorita:
            <select
              name="palavraChaveFavorita"
              value={this.state.palavraChaveFavorita}
              onChange={this.handleValueChange}
            >
              <option value="estado">Estado</option>
              <option value="evento">Evento</option>
              <option value="props">Props</option>
              <option value="hooks">Hooks</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

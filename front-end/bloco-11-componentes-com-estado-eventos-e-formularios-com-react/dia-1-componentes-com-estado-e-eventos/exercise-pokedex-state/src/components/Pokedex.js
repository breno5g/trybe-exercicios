import React from 'react';
import Pokemon from './Pokemon';
import { Buttons } from './Buttons/Buttons';

class Pokedex extends React.Component {
  constructor() {
    super();

    this.state = {
      pokeType: 'all',
      pokeIndex: 0,
    };

    this.filterPokemons = this.filterPokemons.bind(this);
    this.setType = this.setType.bind(this);
    this.setIndex = this.setIndex.bind(this);
  }

  filterPokemons() {
    if (this.state.pokeType === 'all') return this.props.pokemons;
    return this.props.pokemons.filter(
      (pokemon) => pokemon.type === this.state.pokeType,
    );
  }

  setType(type) {
    this.setState(() => ({
      pokeType: type,
    }));
  }

  setIndex(filtered) {
    this.setState((state) => ({
      pokeIndex: (state.pokeIndex + 1) % filtered,
      // Code by Lucas Marçal Coutinho
    }));
  }

  render() {
    const filtered = [...this.filterPokemons()];
    const pokemon = [filtered[this.state.pokeIndex]];
    return (
      <>
        <div className="pokedex">
          {pokemon.map((pokemon) => (
            <Pokemon key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
        <Buttons
          pokemons={this.props.pokemons}
          setType={this.setType}
          filtered={filtered}
          setIndex={this.setIndex}
        />
      </>
    );
  }
}

export default Pokedex;

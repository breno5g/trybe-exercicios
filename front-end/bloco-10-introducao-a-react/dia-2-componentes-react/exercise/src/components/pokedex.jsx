import React from "react"
import data from "../data"
import Pokemon from './pokemon'

function Pokedex() {
  return (
    <div className="cards">
      {data.map((pokemon) => <Pokemon pokemon={pokemon} key={pokemon.id}/>)}
    </div>
  )
}

export default Pokedex
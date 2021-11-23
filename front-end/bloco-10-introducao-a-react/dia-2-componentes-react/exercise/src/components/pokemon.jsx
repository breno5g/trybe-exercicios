import React from "react"

function Pokemon(props) {
  const {name, type, averageWeight, image, id} = props.pokemon
  return (
    <div className={`${type} card`}>
      <figure>
        <img src={image} alt={name}></img>
      </figure>
      <div className="infos">
        <span>{name}</span>
        <span>{type}</span>
        <span>{averageWeight.value}{averageWeight.measurementUnit}</span>
      </div>
      <span className="pokeNumber">{id}</span>
    </div>
  )
}

export default Pokemon
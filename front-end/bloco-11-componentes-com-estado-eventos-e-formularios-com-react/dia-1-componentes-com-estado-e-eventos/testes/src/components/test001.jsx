import React from "react"

// V1 função fora da classe
// function handleClick(param) {
//   console.log(param.target.textContent)
// }

// function FirstEx(props) {
//   return (
//     <>
//       <button onClick={handleClick}>botão 1</button>
//       <button onClick={handleClick}>botão 2</button>
//       <button onClick={handleClick}>botão 3</button>
//     </>
//   )
// }

// Construindo objeto com class

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  greeting() {
    return "Olá, " + this.name
  }
}

class Alumni extends Person {
  constructor(name, age, classes) {
    super(name, age);
    this.classes = classes
  }
}

class FirstEx extends React.Component {
  handleClick(name, age) {
    console.log(new Alumni(name, age).greeting())
  }

  render() {
    return (
      <>
      <button onClick={() => this.handleClick("Breno", 21)}>botão 1</button>
      <button onClick={() => this.handleClick("Lucas", 20)}>botão 2</button>
      <button onClick={() => this.handleClick("Peixonauta", 12)}>botão 3</button>
      </>
    )
  }
}

export default FirstEx
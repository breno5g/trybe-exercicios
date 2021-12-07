import React, { useEffect, useState } from 'react';

function Counter (props) {
  const [count, setCount] = useState(props.count)

  // Onload use effect
  useEffect(() => {
    setCount(Number(localStorage.getItem("countState")))
    // Função que será executada apenas quando o elemento for removido da tela
    return () => {console.log("No more counter")};
  }, []) 
  // O colchetes define qual estado o useEffect irá observar,
  // Passando o array vazio ele irá executar apenas uma vez

  // Use effect para update
  useEffect(() => {
    document.title = count;
    localStorage.setItem("countState", count)
  }, [count]) // observa o estado count

  const add = () => {
    setCount(count + 1)
  }

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={add}>Add</button>
    </>
  )
}

export default Counter;
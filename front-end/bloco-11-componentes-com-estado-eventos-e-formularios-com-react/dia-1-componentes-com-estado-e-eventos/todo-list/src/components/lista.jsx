import React from "react"

function Done(props) {
  if (props.done) {
    return <img src="./assets/icons8-undone.png" alt="done" />
  }
  return <img src="./assets/icons8-done.png" alt="done" />
}

function List(props) {
  return (
    <ul>
      {props.items.map((item) => 
          <li key={item.id} className={item.done ? "done" : ""}>
            {item.text}
            <div>
              <button onClick={() => {props.onDone(item)}}>
                <Done done={item.done}/>
              </button>
              <button onClick={() => {props.onDeleteItem(item)}}>
                <img src="./assets/icons8-trash.svg" alt="trash" />
              </button>
            </div>
          </li>
      )}
    </ul>
  )
}

export default List
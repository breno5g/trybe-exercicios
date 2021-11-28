import React, { useEffect, useState } from "react";
import Item from './components/item';
import List from './components/lista';
import TodoForm from './components/todoForm';
import "./Todo.css"

function Todo() {
  const [items, setItems] = useState([])

  function onAddItem(text) {
    const item = new Item(text)
    setItems([...items, item])
  }

  useEffect(() => {
     const savedItems = JSON.parse(localStorage.getItem("savedItems"));
     if (savedItems) setItems(savedItems)
  }, []) 

  useEffect(() => {
    localStorage.setItem("savedItems", JSON.stringify(items))
  }, [items])

  function onDeleteItem(item) {
    const filteredItems = items.filter(e => e.id !== item.id);

    setItems(filteredItems);
  }

  function onDone(item) {
    const doneController = items.map(e => {
      if (e.id === item.id) {
        e.done = !e.done
      }
      return e
    })

    setItems(doneController)
  }

  return (
    <div className="container">
      <h1>Hello, world!</h1>
      <TodoForm onAddItem={onAddItem}/>
      <List onDone={onDone} onDeleteItem={onDeleteItem} items={items}/>
    </div>
  )
}

export default Todo
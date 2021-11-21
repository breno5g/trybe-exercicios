import React from 'react';

const Task = (value) => {
  return <li>{value}</li>;
};

const foods = ['Farofa', 'pudim', 'brigadeiro', 'tutu'];

class Todo extends React.Component {
  render() {
    return <ul>{foods.map((food) => Task(food))}</ul>;
  }
}

export default Todo;

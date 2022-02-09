import React, { Component, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import addTask from './actions/addTask';

function App(props) {
  const [text, setText] = useState('');

  const { tasks, handleAddTask } = props;
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="insira o texto"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleAddTask(text);
          }}
        >
          Adicionar
        </button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li>{task.text}</li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  // é necessario passar primeiro o nome do reducer e depois dos states
  tasks: state.taskList.tasks,
});

const mapDispatchToProps = (dispatch) => ({
  handleAddTask: (text) => dispatch(addTask(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App;

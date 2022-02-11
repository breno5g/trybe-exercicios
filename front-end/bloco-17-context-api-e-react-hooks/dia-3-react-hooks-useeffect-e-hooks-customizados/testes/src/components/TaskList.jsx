import React, { useState } from 'react';
import useArray from '../hooks/useArray';

const TaskList = () => {
  const [text, setText] = useState('');
  const { tasks, addTask } = useArray();
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="insira a tarefa"
          value={text}
          onChange={({ target: { value } }) => setText(value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            addTask(text);
            setText('');
          }}
        >
          Criar
        </button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

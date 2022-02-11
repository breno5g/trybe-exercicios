import { useState } from 'react';

const useArray = (props) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return { tasks, addTask };
};

export default useArray;

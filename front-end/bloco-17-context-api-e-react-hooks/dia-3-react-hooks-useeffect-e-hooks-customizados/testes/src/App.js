import { useContext } from 'react';
import './App.css';
import TaskList from './components/TaskList';

import { Context } from './Provider';

function App() {
  // const { number, timer, isMultiple } = useContext(Context);
  return (
    // <div className="App">
    //   <p>{`Número aleatório: ${number}`}</p>
    //   <p>{isMultiple && 'Acerto'}</p>
    //   <p>Tempo: {timer}</p>
    // </div>
    <TaskList />
  );
}

export default App;

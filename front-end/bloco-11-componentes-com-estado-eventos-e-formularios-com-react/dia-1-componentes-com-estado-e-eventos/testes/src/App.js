import { useState } from 'react';
import './App.css';

import Counter from './components/test003v2';

function App() {
  const [show, setShow] = useState(true)

  setTimeout(() => {
    setShow(false);
  }, 5000)

  if (show) {
    return (
      <>
        <Counter count={2}/>
      </>
    );
  } else {
    return (
      <>
        <span>No more counter</span>
      </>
    );
  }
}

export default App;

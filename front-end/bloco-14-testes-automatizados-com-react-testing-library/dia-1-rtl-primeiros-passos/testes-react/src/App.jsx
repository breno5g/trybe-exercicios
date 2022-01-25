import { useState } from 'react';
import './App.css';
import ValidEmail from './components/ValidEmail';

function App() {
  const [email, setEmail] = useState("");
  const [savedEmail, setSavedEmail] = useState("")

  function handleChange({target: {value}}) {
    setEmail(value)
  }

  function handleSaveEmail(e) {
    e.preventDefault()
    setSavedEmail(email)
    setEmail("")
  }

  return (
    <div className="App">
      <form>
        <label htmlFor="email">
          Email
          <input 
            type="email" 
            name="email" 
            id="email" 
            value={email}
            onChange={handleChange}
          />
        </label>
        {/* <label htmlFor="password">
          Password
          <input type="password" name="password" id="password" />
        </label> */}
        <button data-testid="send-btn" onClick={handleSaveEmail}>Enviar</button>
      </form>
      <ValidEmail email={ savedEmail } />
    </div>
  );
}

export default App;

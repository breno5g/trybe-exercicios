import React, { Component } from 'react';
import RickAndMorty from './components/RickAndMorty';
import { DadJokes } from './components/DadJokes';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        {/* <RickAndMorty /> */}
        <DadJokes />
      </>
    );
  }
}

export default App;

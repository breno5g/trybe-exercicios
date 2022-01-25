import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        <Routes />
      </BrowserRouter>
    );
  }
}

export default App;

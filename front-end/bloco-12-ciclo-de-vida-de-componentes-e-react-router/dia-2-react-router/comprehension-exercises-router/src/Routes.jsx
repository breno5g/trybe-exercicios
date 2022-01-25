import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';

class Routes extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/users">
          <Users greetingsMessage="Hello" />
        </Route>
      </div>
    );
  }
}

export default Routes;

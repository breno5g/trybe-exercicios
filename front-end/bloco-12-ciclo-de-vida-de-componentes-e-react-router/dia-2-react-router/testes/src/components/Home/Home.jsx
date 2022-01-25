import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import style from './styles.module.css';

class Home extends Component {
  render() {
    return (
      <div>
        <header className={style.header}>
          <h1>Teste</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}

export default Home;

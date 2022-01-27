import React from 'react';
import { Link } from 'react-router-dom';

export function Header(props) {
  return (
    <header className="App-header">
      <h1>Meu portifólio</h1>
      <ul>
        <li>
          <Link to="/about">Sobre</Link>
          <Link to="/projects">Projetos</Link>
          <Link to="/contact">Contato</Link>
        </li>
      </ul>
    </header>
  );
}

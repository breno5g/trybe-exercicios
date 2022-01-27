import React from 'react';
import App from './App';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderWithRouter from './renderWithRouter';

describe('teste das rotas', () => {
  it('Testa se a rota "/" renderiza a home', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/');

    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('Testa se ao clicar no link "Sobre" redireciona para a pagina "about"', () => {
    const { history } = renderWithRouter(<App />);

    const aboutBtn = screen.getByRole('link', { name: 'Sobre' });

    userEvent.click(aboutBtn);

    expect(history.location.pathname).toBe('/about');
  });

  it('Testa se ao clicar no link "Projetos" redireciona para a pagina "projects"', () => {
    const { history } = renderWithRouter(<App />);

    const aboutBtn = screen.getByRole('link', { name: 'Projetos' });

    userEvent.click(aboutBtn);

    expect(history.location.pathname).toBe('/projects');
  });
  it('Testa se ao clicar no link "Contato" redireciona para a pagina "contact"', () => {
    const { history } = renderWithRouter(<App />);

    const aboutBtn = screen.getByRole('link', { name: 'Contato' });

    userEvent.click(aboutBtn);

    expect(history.location.pathname).toBe('/contact');
  });
});

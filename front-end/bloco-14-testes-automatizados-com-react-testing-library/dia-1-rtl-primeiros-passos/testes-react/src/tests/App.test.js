import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe("Testes da tela de email", () => {
  it('Testa o input de email', () => {
    // renderiza o componente a ser testado
    render(<App />);
    // Pega o componente que está em tela pela label
    const inputEmail = screen.getByLabelText("Email") // case sensitive
    // const inputEmail = screen.getByLabelText(/Email/i) // no case sensitive
  
    // Testa se o elemento está em tela
    expect(inputEmail).toBeInTheDocument()
    // Testa se o elemento tem o tipo correto
    expect(inputEmail.type).toBe("email")
  });
  
  // it("Testa se existem dois botões na tela", () => {
  //   render(<App />);
  //   // Pega o elemento pela função/tipo
  //   // Funciona tanto para tag button quanto para input com type button
  //   const buttons = screen.getAllByRole("button")
  
  //   expect(buttons).toHaveLength(2)
  // })
  
  it("Testa se o botão de enviar está sendo renderizado", () => {
    render(<App />);
    // Seleciona o botão pelo texto dentro dele
    // const button = screen.getByText("Enviar")
    // Seleciona pelo test id
    const button = screen.getByTestId("send-btn")
  
    expect(button).toBeInTheDocument()
  })
  
  it("Testa se ao digitar um texto no input e clicar em 'Enviar' o texto é renderizado", () => {
    render(<App />);
  
    // Selecionando nos elementos necessarios
    const emailInput = screen.getByLabelText(/Email/i);
    const sendButton = screen.getByTestId("send-btn");
    const renderedEmail = screen.getByTestId("rendered-email");
  
    // Disparando os eventos
    userEvent.type(emailInput, "trybe@betrybe.com");
    userEvent.click(sendButton);
  
    // Executando os testes
    expect(renderedEmail).toHaveTextContent("trybe@betrybe.com");
    expect(emailInput).toHaveValue("")
  
  })
})
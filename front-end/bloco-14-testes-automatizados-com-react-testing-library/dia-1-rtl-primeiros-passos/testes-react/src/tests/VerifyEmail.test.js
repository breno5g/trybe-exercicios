import { render, screen } from '@testing-library/react';
import ValidEmail from "../components/ValidEmail"

describe("Testa a validação do email", () => {
  it("teste com email certo", () => {
    render(<ValidEmail email={"trybe@betrybe.com"} />);
  
    // Selecionando nos elementos necessarios
    const renderedEmail = screen.getByTestId("rendered-email");
    const isValid = screen.getByText('Email Valido')
  
    // Disparando os eventos
    // Sem eventos para esse teste
  
    // Executando os testes
    expect(renderedEmail).toHaveTextContent("trybe@betrybe.com");
    expect(isValid).toBeInTheDocument()
  })

  it("teste com email errado", () => {
    render(<ValidEmail email={"farofa"} />);
  
    // Selecionando nos elementos necessarios
    const renderedEmail = screen.getByTestId("rendered-email");
    const isInvalid = screen.getByText(/Email inválido/i)
  
    // Disparando os eventos
    // Sem eventos para esse teste
  
    // Executando os testes
    expect(renderedEmail).toHaveTextContent("farofa");
    expect(isInvalid).toBeInTheDocument()
  })
})
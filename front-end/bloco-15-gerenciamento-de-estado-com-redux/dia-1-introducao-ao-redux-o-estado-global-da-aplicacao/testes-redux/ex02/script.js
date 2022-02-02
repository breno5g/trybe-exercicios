const ESTADO_INICIAL_1 = {
  nome: 'Rodrigo',
  sobrenome: 'Santos da Silva',
  endereco: 'Rua Soldado Mathias, 765',
  cidade: 'Belo Horizonte',
};

const ESTADO_INICIAL_2 = {
  nome: 'Bruna',
  sobrenome: 'Santana Oliveira',
  endereco: 'Rua Holanda, 332',
  cidade: 'São Paulo',
};

const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
  switch (action.type) {
    case 'PRIMEIRO_REDUCER':
      return {
        ...state,
        nome: 'Respeite',
        sobrenome: 'Cleide',
        endereco: 'Inferno',
        cidade: 'Sei lá onde o inferno fica',
      };
    default:
      return state;
  }
};

const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
  switch (action.type) {
    case 'SEGUNDO_REDUCER':
      return {
        ...state,
        nome: 'Capeta',
        sobrenome: 'Marido de cleide',
        endereco: 'Inferno',
        cidade: 'Sei lá onde o inferno fica x2',
      };
    default:
      return state;
  }
};

const combinedReducers = Redux.combineReducers({
  meuPrimeiroReducer,
  meuSegundoReducer,
});

const store = Redux.createStore(combinedReducers);

window.onload = () => {
  setTimeout(() => {
    store.dispatch({ type: 'PRIMEIRO_REDUCER' });
    store.dispatch({ type: 'SEGUNDO_REDUCER' });
  }, 3000);
};

store.subscribe(() => {
  const { meuPrimeiroReducer, meuSegundoReducer } = store.getState();
  document.getElementById('nome-1').textContent = meuPrimeiroReducer.nome;
  document.getElementById('sobrenome-1').textContent =
    meuPrimeiroReducer.sobrenome;
  document.getElementById('endereco-1').textContent =
    meuPrimeiroReducer.endereco;
  document.getElementById('cidade-1').textContent = meuPrimeiroReducer.cidade;

  document.getElementById('nome-2').textContent = meuSegundoReducer.nome;
  document.getElementById('sobrenome-2').textContent =
    meuSegundoReducer.sobrenome;
  document.getElementById('endereco-2').textContent =
    meuSegundoReducer.endereco;
  document.getElementById('cidade-2').textContent = meuSegundoReducer.cidade;
});

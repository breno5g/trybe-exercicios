// O redux já foi importado via cdn, está no head do html
// const Redux = require('redux');

const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case 'NEXT_COLOR':
      return {
        ...state,
        index: (state.index + 1) % 6,
      };
    case 'PREVIOUS_COLOR':
      return {
        ...state,
        index: state.index === 0 ? state.colors.length - 1 : state.index - 1,
      };
    case 'NEW_COLOR':
      return {
        ...state,
        colors: [...state.colors, criarCor()],
        index: state.colors.length,
      };
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

document.getElementById('previous').addEventListener('click', () => {
  // Não é possivel executar uma arrow function dentro do dispatch... aparentemente
  // Mas você pode enviar o objeto direto
  store.dispatch({ type: 'PREVIOUS_COLOR' });
  // Assim seria feito sem usar o subscribe
  // changeColor();
});

document.getElementById('next').addEventListener('click', () => {
  store.dispatch({ type: 'NEXT_COLOR' });
  // Assim seria feito sem usar o subscribe
  // changeColor();
});

document.getElementById('newColor').addEventListener('click', () => {
  store.dispatch({ type: 'NEW_COLOR' });
});

// Assim seria feito sem usar o subscribe
// function changeColor() {
//   const color = store.getState().colors[store.getState().index];
//   document.getElementById('value').innerHTML = color;
// }

// O subscribe funciona de forma semelhante ao useEffect
store.subscribe(() => {
  const { colors, index } = store.getState();
  document.getElementById('value').innerHTML = colors[index];
  document.body.style.backgroundColor = colors[index];
});

function criarCor() {
  const oneChar = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
    cor += oneChar[aleatorio()];
  }
  return cor;
}

const Redux = require('redux');

const fazerLogin = (email) => ({
  type: 'LOGIN', // Tipo de ação que usaremos para filtrar no switch
  email,
});

const ESTADO_INICIAL = {
  login: false,
  email: '',
};

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default:
      // No switch, sempre precisamos ter um caso default!
      return state;
  }
};

const store = Redux.createStore(reducer);

store.dispatch(fazerLogin('brenosantos145@gmail.com'));

console.log(store.getState());

// loginValidation.test.js
// const {
//   greetingMessage,
//   loginErrorMessage,
//   verifyCredentials,
// } = require('./loginValidation.js');

// describe('a função verifyCredentials()', () => {
//   it('verifyCredentials() calls the correct function depending on the user and password input', () => {
//     const user = {
//       userName: 'Bob',
//       password: 123456,
//     };

//     const { userName, password } = user;

//     expect(verifyCredentials({ userName, password })).toBe(
//       'Hello, Joana! Que bom ter você de volta',
//     );
//   });

//   it('greetingMessage() returns a message in the format: `Hello, ${user}! Que bom ter você de volta`', () => {
//     expect(greetingMessage('Lucas')).toBe(
//       'Hello, Lucas! Que bom ter você de volta',
//     );
//   });

//   it("loginErrorMessage() returns a message in the format: `Pessoa usuária '${user}' não encontrada, tente novamente!`", () => {
//     expect(loginErrorMessage('Bob')).toBe(
//       "Pessoa usuária 'Bob' não encontrada, tente novamente!",
//     );
//   });
// });

// Teste v1

describe('Descrição do teste', () => {});

describe('Descrição do teste', () => {});

describe('Descrição do teste', () => {
  test('Descrição do caso a ser testado', () => {
    // Match .toBe compara valores primitivos
    expect('string').toBe('Farofa');
  });
  // Match .toEqual faz uma busca pelos propriedades de um objeto
  test('Descrição do caso a ser testado', () => {
    expect({ 1: 1, 2: 2, 3: 3 }).toEqual({ 1: 1, 2: 2, 3: 3 });
  });
  // Matcher .toMatch faz uma busca por strings
  test('Descrição do caso a ser testado', () => {
    expect('String que será dada como input').toMatch('input');
  });
});

// tem mais um monte

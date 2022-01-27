function generateRandomNumber() {
  return parseInt(Math.random() * 100);
}

test('Ex 01', () => {
  generateRandomNumber = jest.fn().mockReturnValue(10);

  generateRandomNumber();
  generateRandomNumber();
  generateRandomNumber();
  generateRandomNumber();

  expect(generateRandomNumber).toHaveBeenCalled();
  expect(generateRandomNumber()).toBe(10);
  expect(generateRandomNumber).toHaveBeenCalledTimes(5);
});

test('Ex 02', () => {
  generateRandomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(generateRandomNumber(10, 5)).toBe(2);
  expect(generateRandomNumber).toHaveBeenCalled();
  expect(generateRandomNumber).toHaveBeenCalledTimes(1);
});

test('Ex 03', () => {
  generateRandomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

  expect(generateRandomNumber(2, 2, 2)).toBe(8);

  generateRandomNumber.mockReset();

  generateRandomNumber.mockImplementationOnce((a) => a * 2);

  expect(generateRandomNumber(5)).toBe(10);
});

function number1(string) {
  return string.toUpperCase();
}

function number2(string) {
  return string[0];
}

function number3(string1, string2) {
  return string1 + string2;
}

test('Criando uma implementação que faça a função 1 retornar em caixa baixa', () => {
  number1 = jest.fn().mockImplementation((string) => string.toLowerCase());

  expect(number1('TESTE')).toBe('teste');

  number1.mockRestore();

  expect(number1('teste')).toBe('TESTE');
});

test('Criando uma implementação que faça a função 2 retornar a ultima letra', () => {
  number2 = jest.fn().mockImplementation((string) => string[string.length - 1]);

  expect(number2('teste')).toBe('e');
});

test('Criando uma implementação que faça a função 2 retornar a concatenação de 3 string', () => {
  number3 = jest
    .fn()
    .mockImplementation((string, str2, str3) => string + str2 + str3);

  expect(number3('teste', 'pudim', 'farofa')).toBe('testepudimfarofa');
});

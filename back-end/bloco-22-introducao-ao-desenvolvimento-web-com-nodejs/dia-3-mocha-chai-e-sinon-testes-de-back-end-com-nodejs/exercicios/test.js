import { assert, expect } from 'chai';
import { isPositive } from './index.js';

describe('Testa se o numero é positivo', () => {
  it('5 é?', () => {
    expect(isPositive(5)).equal('positive');
  });
  it('2 é?', () => {
    expect(isPositive(2)).equal('positive');
  });
  it('23918 é?', () => {
    expect(isPositive(23918)).equal('positive');
  });
});
describe('Testa se o numero é negativo', () => {
  it('-5 é?', () => {
    expect(isPositive(-5)).equal('negative');
  });
  it('-2 é?', () => {
    expect(isPositive(-2)).equal('negative');
  });
  it('-23918 é?', () => {
    expect(isPositive(-23918)).equal('negative');
  });
});
describe('Testa se o numero é neutro', () => {
  it('0 é?', () => {
    expect(isPositive(0)).equal('neutral');
  });
});

describe('Caso o valor não seja um numero', () => {
  it('Teste com uma string', () => {
    try {
      isPositive('string');
    } catch (err) {
      expect(err.message).to.equal('Isso aqui num é número não, meu querido');
    }
  });
});

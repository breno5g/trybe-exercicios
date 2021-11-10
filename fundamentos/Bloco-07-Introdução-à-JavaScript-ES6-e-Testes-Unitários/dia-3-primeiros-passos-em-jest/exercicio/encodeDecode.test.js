// Desafio 9
function encode(string) {
  let code = [
    { letter: /[a]/g, value: '1' },
    { letter: /[e]/g, value: '2' },
    { letter: /[i]/g, value: '3' },
    { letter: /[o]/g, value: '4' },
    { letter: /[u]/g, value: '5' },
  ];
  for (let cod of code) {
    string = string.replace(cod.letter, cod.value);
  }
  return string;
}

function decode(string) {
  // seu código aqui
  let code = [
    { letter: /[1]/g, value: 'a' },
    { letter: /[2]/g, value: 'e' },
    { letter: /[3]/g, value: 'i' },
    { letter: /[4]/g, value: 'o' },
    { letter: /[5]/g, value: 'u' },
  ];
  for (let cod of code) {
    string = string.replace(cod.letter, cod.value);
  }
  return string;
}

// Testes
describe('Encode e decode', () => {
  it('Estão declaradas', () => {
    expect(encode).toBeDefined();
    expect(decode).toBeDefined();
  });
  it('São funções', () => {
    expect(typeof encode).toEqual('function');
    expect(typeof decode).toEqual('function');
  });
  it('Está convertendo as vogais corretamente', () => {
    expect(encode('aeiou')).toBe('12345');
  });
  it('Está convertendo os numeros corretamente', () => {
    expect(decode('12345')).toBe('aeiou');
  });
  it('Está convertendo apenas o que foi definido', () => {
    expect(encode('Pudim')).toBe('P5d3m');
    expect(decode('P5d3m')).toBe('Pudim');
  });
  it('Cumprimento da string retornada', () => {
    expect(encode('Pudim').length).toBe(5);
  });
});

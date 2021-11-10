// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
  // Implemente seu código aqui
  let arr = Object.values(professionalBoard);
  let keys = Object.keys(arr);
  for (let pro of arr) {
    if (pro.id === id) {
      if (detail in pro) {
        return pro[detail];
      }
      throw new Error('Informação indisponível.');
    }
  }
  throw new Error('ID não identificada');
};

// console.log(searchEmployee('8579-6', 'Pudim'));

// Testes

describe('Teste bonus', () => {
  it('Checando se existe e é uma função', () => {
    expect(searchEmployee).toBeDefined();
    expect(typeof searchEmployee).toBe('function');
  });
  it('Testando o retorno correto da função', () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
    expect(searchEmployee('4456-4', 'lastName')).toBe('Zuckerberg');
    expect(searchEmployee('5569-4', 'specialities')).toEqual([
      'Frontend',
      'Redux',
      'React',
      'CSS',
    ]);
  });
  it('Testando casos de erro no id', () => {
    expect(() => searchEmployee('pudim', 'firstName')).toThrowError(
      'ID não identificada',
    );
  });
  it('Testando casos de erro na informação', () => {
    expect(() => searchEmployee('1256-4', 'firstFarofa')).toThrowError(
      'Informação indisponível.',
    );
  });
});

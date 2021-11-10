function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// teste

describe('Fizzbuzz', () => {
  it('Divisivel', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(9)).toBe('fizz');
    expect(myFizzBuzz(10)).toBe('buzz');
  });
  it('Não divisivel', () => {
    expect(myFizzBuzz(7)).toBe(7);
    expect(myFizzBuzz('7')).toBeFalsy();
  });
});

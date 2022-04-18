export const isPositive = (number) => {
  if (typeof number !== 'number') {
    throw new Error('Isso aqui num é número não, meu querido');
  }
  if (number < 0) return 'negative';
  if (number > 0) return 'positive';
  return 'neutral';
};

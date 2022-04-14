const farofa = (a, b, c) => {
  const res = new Promise((resolve, reject) => {
    if (
      typeof a !== 'number' ||
      typeof b !== 'number' ||
      typeof c !== 'number'
    ) {
      reject(new Error('Informe apenas números'));
    }

    const result = (a + b) * c;

    if (result < 50) reject(new Error('Valor muito baixo'));

    resolve(result);
  });

  return res;
};

// farofa(10, 10, 10)
// .then((resp) => console.log(resp))
// .catch((err) => console.log(err.message));

module.exports = {
  farofa,
};

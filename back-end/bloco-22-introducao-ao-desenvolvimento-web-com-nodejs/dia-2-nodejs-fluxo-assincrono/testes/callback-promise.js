// const login = (password) => {
//   if (password.length < 8) {
//     throw new Error('Senha muito curta');
//   }
//   return 'Tá suave meu cumpadi';
// };

// // console.log(login('vaica'));
// try {
//   const res = login('vaiCarai');
//   console.log(res);
// } catch (err) {
//   console.log(err.message);
// }

const loginPromise = (passwd) => {
  const promise = new Promise((resolve, reject) => {
    if (passwd.length < 8) {
      reject(new Error('Tá errado isso aqui'));
    }

    resolve('Tá suave cumpadi');
  });

  return promise;
};

const farofa = async () => {
  // Then
  loginPromise('passwd')
    .then((res) => console.log(res))
    .catch((err) => console.log(err.message));
  // with try/catch
  // try {
  //   const res = await loginPromise('passwd');
  //   console.log(res);
  // } catch (err) {
  //   console.log(err.message);
  // }
};

farofa();

const { json } = require('stream/consumers');

const fs = require('fs').promises;

// fs.readFile('./simpsons.json', 'utf-8').then((res) => {
//   const arr = JSON.parse(res);
//   arr.forEach((tutu) => {
//     console.log(`id - ${tutu.id}, name - ${tutu.name}`);
//   });
// });

// const searchById = async (id) => {
//   const simpson = await fs.readFile('./simpsons.json', 'utf-8').then((res) => {
//     const arr = JSON.parse(res);
//     return arr;
//   });

//   const res = new Promise((resolve, reject) => {
//     const mandioca = simpson.find((pudim) => pudim.id === id.toString());
//     if (!mandioca) reject(new Error('Num achei um personagem com esse id não'));

//     resolve(mandioca);
//   });

//   return res;
// };

// searchById(1)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err.message));

// const removeSimpsons = async () => {
//   const simpson = await fs.readFile('./simpsons.json', 'utf-8').then((res) => {
//     const arr = JSON.parse(res);
//     return arr;
//   });

//   const newJson = simpson.filter(
//     (taFaltandoCriatividade) =>
//       taFaltandoCriatividade.id !== '10' && taFaltandoCriatividade.id !== '6'
//   );

//   fs.writeFile('./simpsons.json', JSON.stringify(newJson));
// };

// removeSimpsons();

// const createNewJson = async () => {
//   const simpson = await fs.readFile('./simpsons.json', 'utf-8').then((res) => {
//     const arr = JSON.parse(res);
//     return arr;
//   });

//   const options = ['1', '2', '3', '4'];

//   const newJson = simpson.filter((taFaltandoCriatividade) =>
//     options.includes(taFaltandoCriatividade.id)
//   );

//   fs.writeFile('./simpsonFamily.json', JSON.stringify(newJson));
// };

// createNewJson();

const changeSimpson = async () => {
  const simpson = await fs
    .readFile('./simpsonFamily.json', 'utf-8')
    .then((res) => {
      const arr = JSON.parse(res);
      return arr;
    });

  const newJson = simpson.map((taFaltandoCriatividade) => {
    if (taFaltandoCriatividade.id === 'Nelson Muntz') {
      return {
        ...taFaltandoCriatividade,
        name: 'Maggie Simpson',
      };
    }
    return taFaltandoCriatividade;
  });

  fs.writeFile('./simpsonFamily.json', JSON.stringify(newJson));
};

changeSimpson();

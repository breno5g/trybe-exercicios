import fs from 'fs/promises';

export const getSimpsons = async () => {
  const file = await fs.readFile('simpsons.json', 'utf-8');
  return JSON.parse(file);
};

export const addNewSimpson = async ({ id, name }) => {
  const simpsons = await getSimpsons();
  simpsons.push({ id: id.toString(), name });
  await fs.writeFile('simpsons.json', JSON.stringify(simpsons, null, 2));
};

const fs = require('fs');
const path = require('path');

const readFile = (fileName) => {
  const filePath = path.join(__dirname, '..', `database/${fileName}`);
  const file = fs.readFileSync(filePath, 'utf-8');
  return file;
};

const writeFile = (fileName, newObj) => {
  const filePath = path.join(__dirname, '..', `database/${fileName}`);
  const file = [...JSON.parse(readFile(fileName))];
  file.push(newObj);
  fs.writeFileSync(filePath, JSON.stringify(file, null, 2));
};

module.exports = {
  readFile,
  writeFile,
};

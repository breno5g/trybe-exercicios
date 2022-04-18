const fs = require('fs');

let getNames = fs.readFileSync('./data/arquivo1.txt', 'utf-8');
let getBuys = fs.readFileSync('./data/arquivo2.txt', 'utf-8');

getNames = getNames.split('\n');
getBuys = getBuys.split('\n');

const formated = (param) => {
  return param.map((tutu) => tutu.split(' - '));
};

const names = formated(getNames);
const buys = formated(getBuys);

const json = names.map((text, index) => {
  return { [text[0]]: text[1], [buys[index][0]]: buys[index][1] };
});

fs.writeFileSync('./res.json', JSON.stringify(json));

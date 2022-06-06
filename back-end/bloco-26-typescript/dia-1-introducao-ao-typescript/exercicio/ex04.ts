import months from './ex02';
import seasons from './ex03';
import readline from 'readline-sync';

const north = {
  [seasons.autumn]: [
    months.september,
    months.october,
    months.november,
    months.december,
  ],
  [seasons.winter]: [
    months.december,
    months.january,
    months.february,
    months.march,
  ],
  [seasons.spring]: [months.march, months.april, months.may, months.june],
  [seasons.summer]: [months.june, months.july, months.august, months.september],
};

const south = {
  [seasons.autumn]: [months.march, months.april, months.may, months.june],
  [seasons.winter]: [months.june, months.july, months.august, months.september],
  [seasons.spring]: [
    months.september,
    months.october,
    months.november,
    months.december,
  ],
  [seasons.summer]: [
    months.december,
    months.january,
    months.february,
    months.march,
  ],
};

const hemispheres: any = {
  Norte: north,
  Sul: south,
};

const selectedMonth = readline.keyInSelect(
  Object.keys(months),
  'Selecione o mês:'
);

const selectedHemisphere = readline.keyInSelect(
  Object.keys(hemispheres),
  'Selecione o hemisferio:'
);

const hemispheresBeleuza = Object.keys(hemispheres)[selectedHemisphere];
const monthsBelezuza = Object.values(months)[selectedMonth];

const actualSeason = Object.entries(hemispheres[hemispheresBeleuza])
  .map((value: any) => {
    if (value[1].includes(monthsBelezuza)) return value[0];
  })
  .filter((value) => value);

console.log(`O mês selecionado foi: ${monthsBelezuza}`);
console.log(`O hemisferio selecionado foi: ${hemispheresBeleuza}`);

console.log(`A estação atual é: ${actualSeason}`);

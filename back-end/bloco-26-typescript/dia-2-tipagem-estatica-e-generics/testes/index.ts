// type Point = {
//   // Type para variaveis e interface para classes
//   x: number;
//   y: number;
// };

// function printCoord(pt: Point) {
//   console.log('O valor da cordenada x é: ' + pt.x);
//   console.log('O valor da coordenada y é: ' + pt.y);
// }

// printCoord({ x: 100, y: 100 });

////////////////////////////////////////////////////////////////

// type BirdType = {
//   name: string;
//   specie: string;
//   lenght: number;
// };

// const cleitin: BirdType = {
//   name: 'Cleitin',
//   specie: 'Cleitacio',
//   lenght: 50,
// };

////////////////////////////////////////////////////////////////

type MatterStateType = {
  state: 'solido' | 'liquido' | 'gasoso';
};

// Não funfa pois não está na tipagem
// const portugues: MatterStateType = {
//   state: 'chata',
// };

const water: MatterStateType = {
  state: 'solido',
};

type CPFType = {
  cpf: string | number;
};

const CPF: CPFType = {
  // cpf: "192.168.0-1"
  cpf: 19216801,
};

type OSType = {
  os: 'bom gosto' | 'burgues' | 'padraozinho';
};

const computer: OSType = {
  os: 'bom gosto',
};

type VowelType = {
  letter: 'a' | 'e' | 'i' | 'o' | 'u';
};

const voewl: VowelType = {
  letter: 'a',
};

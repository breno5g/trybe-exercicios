import ILens from '../../interfaces/Lens';

const lensMock: ILens = {
  antiGlare: true,
  blueLightFilter: true,
  degree: 1.2
}

const lensMockWithId: ILens & {_id: string} = {
  _id: "83721937897123asda",
  ...lensMock
}

const lensMocksArray: ILens[] = [
  {...lensMock},
  {...lensMock},
  {...lensMock},
]

export {lensMock, lensMockWithId, lensMocksArray}
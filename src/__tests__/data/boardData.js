// prettier-ignore
const BaseBoardData = {
  rows: 9,
  cols: 9,
  mines: 10,
  solution: [
    '0',  '1',  'M',  '1',  '1',  '1',  '1',  '0',  '0',
    '1',  '2',  '2',  '1',  '2',  'M',  '2',  '0',  '0',
    '1',  'M',  '2',  '1',  '2',  'M',  '3',  '1',  '1',
    '1',  '2',  'M',  '1',  '1',  '1',  '2',  'M',  '1',
    '0',  '1',  '1',  '2',  '1',  '1',  '1',  '1',  '1',
    '0',  '0',  '0',  '1',  'M',  '2',  '1',  '1',  '0',
    '0',  '0',  '1',  '2',  '2',  '3',  'M',  '2',  '0',
    '0',  '0',  '1',  'M',  '1',  '2',  'M',  '2',  '0',
    '0',  '0',  '1',  '1',  '1',  '1',  '1',  '1',  '0',
  ],
  current: [
    'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',
    'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',
    'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',
    'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',
    'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',
    'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',
    'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',
    'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',
    'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',
  ],
}

// prettier-ignore
export const RevealEmptyCell = {
  ...BaseBoardData,
  index: 46,
  expected: [
    'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',
    'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',
    'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',
    '1',  '2',  'H',  'H',  'H',  'H',  'H',  'H',  'H',
    '0',  '1',  '1',  '2',  'H',  'H',  'H',  'H',  'H',
    '0',  '0',  '0',  '1',  'H',  'H',  'H',  'H',  'H',
    '0',  '0',  '1',  '2',  'H',  'H',  'H',  'H',  'H',
    '0',  '0',  '1',  'H',  'H',  'H',  'H',  'H',  'H',
    '0',  '0',  '1',  'H',  'H',  'H',  'H',  'H',  'H',
  ]
}
// prettier-ignore
export const RevealNumberedCell = {
  ...BaseBoardData,
  index: 4,
  expected: [
    'H',  'H',  'H',  'H',  '1',  'H',  'H',  'H',  'H',
    'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',
    'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',
    'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',
    'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',
    'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',
    'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',
    'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',
    'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',
  ]
}
// prettier-ignore
export const RevealMinedCell = {
  ...BaseBoardData,
  index: 2,
  expected: [
    'H',  'H',  'M',  'H',  'H',  'H',  'H',  'H',  'H',
    'H',  'H',  'H',  'H',  'H',  'M',  'H',  'H',  'H',
    'H',  'M',  'H',  'H',  'H',  'M',  'H',  'H',  'H',
    'H',  'H',  'M',  'H',  'H',  'H',  'H',  'M',  'H',
    'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',
    'H',  'H',  'H',  'H',  'M',  'H',  'H',  'H',  'H',
    'H',  'H',  'H',  'H',  'H',  'H',  'M',  'H',  'H',
    'H',  'H',  'H',  'M',  'H',  'H',  'M',  'H',  'H',
    'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',
  ]
}
// prettier-ignore
export const RevealNonHiddenCell = {
  ...BaseBoardData,
  index: 3,
  current: [
    'H',  'H',  'H',  '1',  'H',  'H',  'H',  'H',  'H',
    'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',
    'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',
    'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',
    'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',
    'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',
    'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',
    'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',
    'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',
  ],
  expected: [
    'H',  'H',  'H',  '1',  'H',  'H',  'H',  'H',  'H',
    'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',
    'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',
    'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',
    'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',
    'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',
    'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',
    'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',
    'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',
  ]
}

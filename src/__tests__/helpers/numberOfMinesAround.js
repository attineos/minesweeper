import { numberOfMinesAround } from '../../utils/helpers'
import { CellStatus } from '../../utils/constants'

test('For a 3x3 board, with mines on 0,1 and 5; numberOfMines should returned', () => {
  // prettier-ignore
  const board = [
    CellStatus.MINE, CellStatus.MINE,    0,
    0,       0, CellStatus.MINE,
    0,       0,    0
  ]
  const rows = 3
  const cols = 3

  expect(numberOfMinesAround({ rows, cols, board, index: 2 })).toEqual(2)
  expect(numberOfMinesAround({ rows, cols, board, index: 3 })).toEqual(2)
  expect(numberOfMinesAround({ rows, cols, board, index: 4 })).toEqual(3)
  expect(numberOfMinesAround({ rows, cols, board, index: 6 })).toEqual(0)
  expect(numberOfMinesAround({ rows, cols, board, index: 7 })).toEqual(1)
  expect(numberOfMinesAround({ rows, cols, board, index: 8 })).toEqual(1)
  expect(numberOfMinesAround({ rows, cols, board, index: 9 })).not.toBeDefined()
  expect(numberOfMinesAround({ rows, cols, board, index: -1 })).not.toBeDefined()
})

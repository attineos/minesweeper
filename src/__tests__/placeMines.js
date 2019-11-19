import placeMines from '../utils/placeMines'
import { CellStatus } from '../utils/constants'

/*
 * Check, for a set of rows, cols and mines, that the board is correctly generated
 * */
function testBoard(rows, cols, mines) {
  const size = rows * cols
  const board = placeMines({ rows, cols, mines })

  expect(board).toHaveLength(size)
  expect(board.filter(val => val === CellStatus.MINE)).toHaveLength(mines)
}

it('should generate a board 3x3 with 1 mine', () => {
  const rows = 3
  const cols = 3
  const mines = 1

  testBoard(rows, cols, mines)
})

it('should generate a board 10x6 with 10 mines', () => {
  const rows = 10
  const cols = 6
  const mines = 10

  testBoard(rows, cols, mines)
})

it('should generate a board 6x9 with 5 mines', () => {
  const rows = 6
  const cols = 9
  const mines = 5

  testBoard(rows, cols, mines)
})

it('should generate a board full of mines, if there is more mines given than the sizes of the board', () => {
  const rows = 3
  const cols = 3
  const mines = 50

  const mineBoard = placeMines({ rows, cols, mines }).filter(cell => cell === CellStatus.MINE)

  expect(mineBoard).toHaveLength(rows * cols)
  expect(mineBoard).not.toHaveLength(mines)
})

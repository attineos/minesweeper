import { forEach, range, shuffle, take } from 'lodash'
import { numberOfMinesAround } from './helpers'
import { CellStatus } from './constants'

function placeMines({ rows, cols, mines }) {
  const boardSize = rows * cols
  const minesPositions = take(shuffle(range(boardSize)), mines)

  const board = []

  forEach(minesPositions, mine => {
    board[mine] = CellStatus.MINE
  })

  for (let index = 0; index < boardSize; index++) {
    if (board[index] === CellStatus.MINE) continue

    board[index] = numberOfMinesAround({ board, index, cols, rows })
  }

  return board
}

export default placeMines

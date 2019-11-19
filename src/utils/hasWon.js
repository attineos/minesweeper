import { every } from 'lodash'
import { CellStatus } from './constants'

function hasWon({ board, solution }) {
  return every(board, (cell, index) => {
    if (cell === CellStatus.MINE) return false
    if (cell !== CellStatus.HIDDEN && cell !== CellStatus.FLAGGED) return true

    return solution[index] === CellStatus.MINE
  })
}

export default hasWon

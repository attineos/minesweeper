import { forEach, isEmpty } from 'lodash'
import { generatePositions } from './helpers'
import { CellStatus } from './constants'

export function revealCell(index, { board, solution, cols, rows }) {
  // The cell is already revealed or flagged
  if (board[index] !== CellStatus.HIDDEN) {
    return board
  }

  const resultBoard = [...board]

  // The cell is a mine
  if (solution[index] === CellStatus.MINE) {
    forEach(solution, (cell, index) => {
      if (cell === CellStatus.MINE) {
        resultBoard[index] = CellStatus.MINE
      }
    })

    return resultBoard
  }

  if (solution[index] > 0) {
    resultBoard[index] = solution[index]
  } else {
    let positionsToVisit = [index]

    while (!isEmpty(positionsToVisit)) {
      const index = positionsToVisit.shift()

      if (resultBoard[index] !== CellStatus.HIDDEN || solution[index] === CellStatus.MINE) {
        continue
      }

      resultBoard[index] = solution[index]
      if (resultBoard[index] === 0) {
        positionsToVisit = [...positionsToVisit, ...generatePositions({ cols, rows, index })]
      }
    }
  }

  return resultBoard
}

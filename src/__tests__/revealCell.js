import {
  RevealEmptyCell,
  RevealMinedCell,
  RevealNonHiddenCell,
  RevealNumberedCell,
} from './data/boardData'
import { revealCell } from '../utils/revealCell'

it('should not change the board, if the cell is already revealed', () => {
  const { current, expected, index, solution } = RevealNonHiddenCell

  const result = revealCell({ board: current, solution, index })

  expect(result).toEqual(expected)
})

it('should changed only the value, if it s a number', () => {
  const { current, expected, index, solution } = RevealNumberedCell

  const result = revealCell({ board: current, solution, index })

  expect(result).toEqual(expected)
})

it('should show all mines, if the index  is a mine', () => {
  const { current, expected, index, solution } = RevealMinedCell

  const result = revealCell({ board: current, solution, index })

  expect(result).toEqual(expected)
})

it('should reveal a part of the board, if it is empty', () => {
  const { cols, rows, current, expected, index, solution } = RevealEmptyCell

  const result = revealCell({ board: current, solution, rows, index, cols })

  expect(result).toEqual(expected)
})

import React, { useCallback, useContext, useReducer } from 'react'
import { isEmpty, isNil } from 'lodash'
import placeMines from '../utils/placeMines'
import { revealCell } from '../utils/revealCell'
import { BoardStatus, CellStatus, Difficulty } from '../utils/constants'
import hasWon from '../utils/hasWon'

const types = {
  CHOOSE_DIFFICULTY: 'CHOOSE_DIFFICULTY',
  FLAG: 'FLAG',
  RESET: 'RESET',
  REVEAL: 'REVEAL',
}

function isGameOver(status) {
  return status === BoardStatus.WIN || status === BoardStatus.LOST
}

function toggleFlag({ board, index, flags }) {
  switch (board[index]) {
    case CellStatus.FLAGGED: {
      const resultBoard = [...board]
      resultBoard[index] = CellStatus.HIDDEN

      return {
        board: resultBoard,
        flags: flags - 1,
      }
    }
    case CellStatus.HIDDEN: {
      const resultBoard = [...board]
      resultBoard[index] = CellStatus.FLAGGED

      return {
        board: resultBoard,
        flags: flags + 1,
      }
    }
    default:
      return {
        board,
        flags,
      }
  }
}

function generateBoard(difficulty) {
  const { rows, cols, mines } = Difficulty[difficulty]

  return {
    difficulty,
    board: Array.from({ length: rows * cols }, () => CellStatus.HIDDEN),
    flags: 0,
    solution: placeMines({ rows, cols, mines }),
    status: BoardStatus.START,
  }
}

function boardReducer(state, action) {
  switch (action.type) {
    case types.RESET:
      return generateBoard(state.difficulty)
    case types.CHOOSE_DIFFICULTY:
      return generateBoard(action.difficulty)
    case types.REVEAL: {
      const { index } = action
      const { difficulty, solution, status } = state
      const { cols, rows } = Difficulty[difficulty]

      if (isGameOver(status)) {
        return state
      }

      // Reveal the cell
      const board = revealCell(index, {
        board: state.board,
        cols,
        rows,
        solution,
      })

      // Check if the game is over or not
      const newStatus =
        solution[index] === CellStatus.MINE
          ? BoardStatus.LOST
          : hasWon({ board, solution })
          ? BoardStatus.WIN
          : BoardStatus.IN_PROGRESS

      return {
        ...state,
        board,
        status: newStatus,
      }
    }
    case types.FLAG: {
      const { index } = action
      const { board, flags, status } = state

      if (isGameOver(status)) {
        return state
      }

      return {
        ...state,
        ...toggleFlag({ board, index, flags }),
      }
    }
    default:
      throw new Error('Unknown type')
  }
}

const BoardContext = React.createContext()
const BoardDispatchContext = React.createContext()

function useBoard() {
  const context = useContext(BoardContext)
  if (isNil(context)) {
    throw new Error('useBoard must be inside a BoardProvider')
  }

  return context
}

function useBoardDispatch() {
  const dispatch = useContext(BoardDispatchContext)
  if (isNil(dispatch)) {
    throw new Error('useBoardDispatch must be inside a BoardProvider')
  }

  const resetBoard = useCallback(() => dispatch({ type: types.RESET }), [dispatch])
  const revealCell = useCallback(index => dispatch({ type: types.REVEAL, index }), [dispatch])
  const toggleFlag = useCallback(index => dispatch({ type: types.FLAG, index }), [dispatch])
  const chooseDifficulty = useCallback(
    difficulty => dispatch({ type: types.CHOOSE_DIFFICULTY, difficulty }),
    [dispatch],
  )

  return {
    chooseDifficulty,
    resetBoard,
    revealCell,
    toggleFlag,
  }
}

const INITIAL_DIFFICULTY = 'MEDIUM'

function BoardProvider({ children }) {
  const [{ board, difficulty, flags, status }, dispatch] = useReducer(
    boardReducer,
    INITIAL_DIFFICULTY,
    generateBoard,
  )

  return (
    <BoardContext.Provider value={{ board, difficulty, flags, status }}>
      <BoardDispatchContext.Provider value={dispatch}>
        {!isEmpty(board) && children}
      </BoardDispatchContext.Provider>
    </BoardContext.Provider>
  )
}

export { useBoard, useBoardDispatch }
export default BoardProvider

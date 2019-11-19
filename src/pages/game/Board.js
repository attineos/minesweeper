import { map, split, toNumber } from 'lodash'
import styled from 'styled-components'
import { useBoard } from '../../providers/BoardProvider'
import { Difficulty } from '../../utils/constants'
import Cell from './Cell'
import React from 'react'

const vhTOpx = themeValue => {
  const value = toNumber(split(themeValue, /[a-z]*$/g, 1)[0])
  const y = window.innerHeight || document.documentElement.clientHeight

  return `${(y * value) / 100}px`
}

const StyledBoard = styled.div`
  border: ${({ theme }) => `${theme.spaces.s1} solid ${theme.components.board.borderColor}`};
  display: grid;
  grid-template: ${({ cols, rows, theme }) =>
    `repeat(${rows},  ${vhTOpx(theme.components.cell.size)}) / repeat(${cols}, ${vhTOpx(
      theme.components.cell.size,
    )})`};
  position: absolute;
  z-index: 2;
`

function Board() {
  const { board, difficulty } = useBoard()
  const { rows, cols } = Difficulty[difficulty]

  return (
    <StyledBoard cols={cols} rows={rows}>
      {map(board, (cell, index) => (
        <Cell key={index} cell={cell} index={index} />
      ))}
    </StyledBoard>
  )
}

export default Board

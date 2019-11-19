import React from 'react'
import styled, { css } from 'styled-components'
import { useBoardDispatch } from '../../providers/BoardProvider'
import { CellStatus } from '../../utils/constants'
import Flag from '../../icons/target'
import Bomb from '../../icons/nuclearBomb'

const backgroundColorAndHover = color => css`
  background-color: ${color};

  &:hover {
    background-color: ${color};
  }
`

function getCellStyle(cell) {
  switch (cell) {
    case CellStatus.FLAGGED:
      return css`
        ${({ theme }) => backgroundColorAndHover(theme.components.cell.backgroundFlagged)};
        cursor: default;

        svg {
          fill: ${({ theme }) => theme.components.cell.flaggedColor};
        }
      `
    case CellStatus.MINE:
      return css`
        ${({ theme }) => backgroundColorAndHover(theme.colors.transparent)}

        svg {
          fill: ${({ theme }) => theme.components.cell.minedColor};
          transform: rotate(45deg) translateX(-4px);
          width: ${({ theme }) => theme.components.cell.size};
        }
      `
    case CellStatus.HIDDEN:
      return css`
        ${({ theme }) => `
          background-color: ${theme.components.cell.hiddenColor};

          &:hover {
            background-color: ${theme.components.cell.backgroundHiddenHover};
          }
        `}
      `
    default:
      return css`
        ${({ theme }) => `
          background-color: ${theme.colors.transparent};
          color: ${theme.components.cell[cell].color};

          &:hover {
            background-color: ${theme.colors.transparent};
          }
        `}
      `
  }
}
const StyledCell = styled.button`
  ${({ cell }) => getCellStyle(cell)}

  ${({ theme }) => `
    border: ${theme.spaces.s1} solid ${theme.components.cell.borderColor};
    font-size: ${theme.fonts.fontSize.fs2d5};
    margin: ${theme.spaces.sh0};
    padding: ${theme.spaces.sh0d5};
  `};

  user-select: none;
  font-weight: bold;
  background-size: contain;
  cursor: pointer;
  overflow: hidden;

  &:focus {
    outline: none;
  }
`

function Cell({ cell, index }) {
  const { revealCell, toggleFlag } = useBoardDispatch()

  const shouldShowContent = cell !== CellStatus.HIDDEN && cell !== 0

  const handleRightClick = e => {
    e.preventDefault()
    toggleFlag(index)
  }

  const handleClick = () => {
    revealCell(index)
  }

  const showCellContent = cell => {
    switch (cell) {
      case CellStatus.FLAGGED:
        return <Flag />
      case CellStatus.MINE:
        return <Bomb />
      default:
        return cell
    }
  }

  return (
    <StyledCell cell={cell} onClick={handleClick} onContextMenu={handleRightClick}>
      {shouldShowContent && showCellContent(cell)}
    </StyledCell>
  )
}

export default React.memo(Cell)

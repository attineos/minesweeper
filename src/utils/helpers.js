import { reduce } from 'lodash'
import { CellStatus } from './constants'

export function indexToCoords({ index, cols }) {
  return {
    x: Math.trunc(index / cols),
    y: Math.trunc(index % cols),
  }
}

export function coordsToIndex({ x, y, cols }) {
  return x * cols + y
}

function areCoordsInBoard({ x, y, cols, rows }) {
  return !(x < 0 || x >= rows || y < 0 || y >= cols)
}

export function generatePositions({ cols, rows, index }) {
  const { x, y } = indexToCoords({ index, cols })

  const post = []
  for (let xAround = x - 1; xAround <= x + 1; xAround++) {
    for (let yAround = y - 1; yAround <= y + 1; yAround++) {
      if (
        !areCoordsInBoard({ x: xAround, y: yAround, cols, rows }) ||
        (xAround === x && yAround === y)
      )
        continue
      post.push(coordsToIndex({ x: xAround, y: yAround, cols }))
    }
  }

  return post
}

export function numberOfMinesAround({ board, cols, rows, index }) {
  const { x, y } = indexToCoords({ index, cols })

  if (!areCoordsInBoard({ x, y, cols, rows })) {
    return
  }

  const positions = generatePositions({ cols, rows, index })

  return reduce(
    positions,
    (acc, position) => {
      const content = +(board[position] === CellStatus.MINE)
      return acc + content
    },
    0,
  )
}

import { coordsToIndex, indexToCoords } from '../../utils/helpers'

test('index 23, on a 10 cols board, should returned [2,3]', () => {
  const index = 23
  const cols = 10
  const expected = { x: 2, y: 3 }

  const result = indexToCoords({ index, cols })

  expect(result).toEqual(expected)
})

test('Coords [5,1] on a 6 cols boards, should returned 31', () => {
  const { x, y } = { x: 5, y: 1 }
  const cols = 6
  const expected = 31

  const result = coordsToIndex({ x, y, cols })

  expect(result).toEqual(expected)
})

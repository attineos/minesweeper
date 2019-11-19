import { generatePositions } from '../../utils/helpers'

function checkGeneratePosition(index, expected) {
  const cols = 3
  const rows = 3

  const result = generatePositions({ cols, rows, index })

  expect(result).toEqual(expected)
}

test('On a 3x3 board, generatePositions on the index 0 should return 3 positions', () => {
  const index = 0
  const expected = [1, 3, 4]

  checkGeneratePosition(index, expected)
})

test('On a 3x3 board, generatePositions on the index 1 ([0, 1]) should return 5 positions', () => {
  const index = 1
  const expected = [0, 2, 3, 4, 5]

  checkGeneratePosition(index, expected)
})

test('On a 3x3 board, generatePositions on the index 2 ([0, 2]) should return 3 positions', () => {
  const index = 2
  const expected = [1, 4, 5]

  checkGeneratePosition(index, expected)
})

test('On a 3x3 board, generatePositions on the index 3 ([1, 0]) should return 5 positions', () => {
  const index = 3
  const expected = [0, 1, 4, 6, 7]

  checkGeneratePosition(index, expected)
})

test('On a 3x3 board, generatePositions on the index 4 ([1, 1]) should return 8 positions', () => {
  const index = 4
  const expected = [0, 1, 2, 3, 5, 6, 7, 8]

  checkGeneratePosition(index, expected)
})

test('On a 3x3 board, generatePositions on the index 5 ([1, 2]) should return 5 positions', () => {
  const index = 5
  const expected = [1, 2, 4, 7, 8]

  checkGeneratePosition(index, expected)
})

test('On a 3x3 board, generatePositions on the index 6 ([2, 0]) should return 3 positions', () => {
  const index = 6
  const expected = [3, 4, 7]

  checkGeneratePosition(index, expected)
})

test('On a 3x3 board, generatePositions on the index 7 ([2, 1]) should return 5 positions', () => {
  const index = 7
  const expected = [3, 4, 5, 6, 8]

  checkGeneratePosition(index, expected)
})

test('On a 3x3 board, generatePositions on the index 8 ([2, 2]) should return 3 positions', () => {
  const index = 8
  const expected = [4, 5, 7]

  checkGeneratePosition(index, expected)
})

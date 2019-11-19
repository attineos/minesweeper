const BoardStatus = {
  START: 'START',
  IN_PROGRESS: 'IN_PROGRESS',
  WIN: 'WIN',
  LOST: 'LOST',
}

const CellStatus = {
  MINE: 'M',
  HIDDEN: 'H',
  FLAGGED: 'F',
}

const Difficulty = {
  EASY: {
    cols: 9,
    rows: 9,
    mines: 10,
  },
  MEDIUM: {
    cols: 16,
    rows: 16,
    mines: 20,
  },
  HARD: {
    cols: 30,
    rows: 16,
    mines: 99,
  },
  MEGA_EASY: {
    cols: 16,
    rows: 16,
    mines: 1,
  },
}

const Routes = {
  HOME: '/',
  GAME: '/game',
  RANKING: '/ranking',
  SETTINGS: '/settings',
  NOT_FOUND: '/404',
}

export { Difficulty, CellStatus, BoardStatus, Routes }

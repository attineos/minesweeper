import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import BoardProvider, { useBoard } from '../../providers/BoardProvider'
import Radar from '../../components/Radar'
import { useTranslation } from 'react-i18next'
import { BoardStatus, Difficulty } from '../../utils/constants'
import Board from './Board'
import Header from './Header'
import { useUsername } from '../../providers/UserProvider'

const GamePage = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: ${({ theme }) => theme.sizes.heights.hh100};
`

const Placement = styled.div`
  align-items: center;
  display: flex;
  height: ${({ theme }) => theme.sizes.heights.hh100};
  justify-content: center;
`

const EndOfGameBanner = styled.h1`
  position: absolute;
  text-align: center;
  z-index: 3;

  ${({ color, theme }) => `
    background-color: ${theme.colors[color]};
    width: ${theme.sizes.widths.ww98};
    padding: ${theme.spaces.sh1};
  `}
`

// Calculate the score of the player
function useCalculateScore() {
  const [username = ''] = useUsername()
  const { difficulty, status } = useBoard()
  const [startDate, setStartDate] = useState()

  useEffect(() => {
    if (status === BoardStatus.IN_PROGRESS) {
      setStartDate(Date.now())
    }
  }, [status, setStartDate])

  useEffect(() => {
    if (status === BoardStatus.WIN) {
      const { cols, rows, mines } = Difficulty[difficulty]
      const duration = (Date.now() - startDate) / 1000 || 1
      fetch('/api/ranking', {
        method: 'POST',
        body: JSON.stringify({
          username,
          score: Math.floor((rows * cols * mines) / duration),
        }),
      })
    }
  }, [difficulty, status, startDate, username])
}

function GameView() {
  const { status } = useBoard()
  const [t] = useTranslation()
  useCalculateScore()

  return (
    <GamePage>
      <Header />
      <Placement>
        <Board />
        <Radar shoudBlip shouldAnimate={status !== BoardStatus.START} />
        {status === BoardStatus.LOST && (
          <EndOfGameBanner color="red">{t('game.loose')}</EndOfGameBanner>
        )}
        {status === BoardStatus.WIN && (
          <EndOfGameBanner color="green">{t('game.win')}</EndOfGameBanner>
        )}
      </Placement>
    </GamePage>
  )
}

function Game() {
  return (
    <BoardProvider>
      <GameView />
    </BoardProvider>
  )
}

export default Game

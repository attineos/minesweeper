import Home from '../../icons/home'
import { BoardStatus, Difficulty, Routes } from '../../utils/constants'
import Title from '../../styles/Title'
import ChooseLevel from './ChooseLevel'
import Replay from '../../icons/replay'
import Flag from '../../icons/target'
import React, { useEffect, useState } from 'react'
import { useBoard, useBoardDispatch } from '../../providers/BoardProvider'
import { floor, toString } from 'lodash'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  ${({ theme }) => `
    margin: ${theme.spaces.sh0d5} 0;
    width: ${theme.sizes.widths.ww100};
  `}
`

const StyledDataContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  ${({ theme }) => `
    border: ${theme.spaces.s3} solid ${theme.components.container.borderColor};
    background-color: ${theme.components.container.backgroundColor};
    color: ${theme.components.container.color};
    padding: ${theme.spaces.sh1d5};
    min-width: ${theme.sizes.widths.w100};
    font-size: ${theme.fonts.fontSize.fs2};
    
    svg {
      fill: ${theme.components.svg.fillColor};
      width: ${theme.sizes.widths.wh2};
    }
  `}
`

const FlexDiv = styled.div`
  display: flex;
  align-items: center;

  svg {
    cursor: pointer;

    ${({ theme }) => `
      fill: ${theme.components.svg.fillColor};
      width: ${theme.sizes.widths.wh4};

      &:hover {
        fill: ${theme.components.svg.fillHoverColor};
      }
    `}
  }
`

function TimerContainer() {
  const { status } = useBoard()
  const [timer, setTimer] = useState(0)
  useEffect(() => {
    let interval = null
    if (status === BoardStatus.IN_PROGRESS) {
      interval = setInterval(() => {
        setTimer(timer => timer + 1)
      }, 1000)
    } else if (status === BoardStatus.START) {
      setTimer(0)
    }

    return () => clearInterval(interval)
  }, [status])

  function formatTimer(timer) {
    const hours = floor(timer / 3600)
    const minutes = floor((timer / 60) % 60)
    const seconds = toString(floor(timer % 60))

    return `${!!hours ? toString(hours) + 'h' : ''}${
      !!minutes ? toString(minutes) + 'min' : ''
    }${seconds}s`
  }

  return <StyledDataContainer>{formatTimer(timer)}</StyledDataContainer>
}

function MinesContainer() {
  const { difficulty, flags } = useBoard()
  const { mines } = Difficulty[difficulty]

  return (
    <StyledDataContainer>
      <Flag />
      {mines - flags}
    </StyledDataContainer>
  )
}

function Header() {
  const history = useHistory()
  const [t] = useTranslation()
  const { resetBoard } = useBoardDispatch()

  return (
    <InfoContainer>
      <MinesContainer />
      <FlexDiv>
        <Home onClick={() => history.push(Routes.HOME)} />
        <Title mb="sh0" ml="s8" mr="s8">
          {t('game.title')}
        </Title>
        <ChooseLevel />
        <Replay onClick={resetBoard} />
      </FlexDiv>
      <TimerContainer />
    </InfoContainer>
  )
}

export default Header

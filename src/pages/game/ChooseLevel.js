import { useBoard, useBoardDispatch } from '../../providers/BoardProvider'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { map, toLower } from 'lodash'
import { Difficulty } from '../../utils/constants'
import Select from '../../components/Select'

function ChooseLevel() {
  const [t] = useTranslation()
  const { difficulty } = useBoard()
  const { chooseDifficulty } = useBoardDispatch()

  const difficulties = map(Difficulty, (_, level) => ({
    id: level,
    label: t(`game.${toLower(level)}`),
    isSelected: difficulty === level,
  }))

  const styles = {
    container: {
      marginBottom: '0',
      marginRight: '24px',
    },
    select: {
      width: '50px',
    },
  }

  return <Select styles={styles} onClick={chooseDifficulty} options={difficulties} />
}

export default ChooseLevel

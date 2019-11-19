import React from 'react'

import { useTranslation } from 'react-i18next'

import Radar from '../components/Radar'

import Paragraph from '../styles/Paragraph'
import SubTitle from '../styles/SubTitle'
import StyledButton from '../styles/StyledButton'
import Title from '../styles/Title'
import { Routes } from '../utils/constants'

function NotFound() {
  const [t] = useTranslation()

  return (
    <Radar>
      <Title>{t('notFound.title')}</Title>
      <SubTitle>{t('notFound.subtitle')}</SubTitle>
      <Paragraph>{t('notFound.paragraph')}</Paragraph>
      <StyledButton to={Routes.HOME}>{t('global:button.backToMenu')}</StyledButton>
    </Radar>
  )
}

export default NotFound

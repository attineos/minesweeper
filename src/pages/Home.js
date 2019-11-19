import React, { useState } from 'react'
import { isEmpty } from 'lodash'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import Page from '../styles/Page'
import Paragraph from '../styles/Paragraph'
import StyledButton from '../styles/StyledButton'
import StyledInput from '../styles/StyledInput'
import SubTitle from '../styles/SubTitle'
import Title from '../styles/Title'
import { Routes } from '../utils/constants'
import { useUsername } from '../providers/UserProvider'

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`

const StyledHr = styled.hr`
  ${({ theme }) => `
    margin: ${theme.spaces.sh5};
    min-width: ${theme.sizes.widths.w600};
    width: ${theme.sizes.widths.ww50};
  `}
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;

  ${({ theme }) => `
    margin: ${theme.spaces.s5} 0;
    background:  ${theme.components.input.backgroundColor};
  `};
`

const LabelInput = styled.label`
  ${({ theme }) => `
    margin-left: ${theme.spaces.s5};
    margin-right: ${theme.spaces.s5};
    color: ${theme.colors.white};
  `};
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function Home() {
  const [t] = useTranslation()
  const [username, setUsername] = useUsername()
  const isUsernameEmpty = isEmpty(username)

  const [isFormSubmitted, setFormSubmitted] = useState(!isUsernameEmpty)

  function handleSubmit(e) {
    e.preventDefault()
    setFormSubmitted(true)
  }

  function handleChangeUsername() {
    setUsername('')
    setFormSubmitted(false)
  }

  return (
    <Page>
      <Title>{t('game.title')}</Title>
      <SubTitle>{t('home.title')}</SubTitle>
      {!isFormSubmitted ? (
        <>
          <Paragraph>{t('home.paragraph')}</Paragraph>
          <StyledForm onSubmit={handleSubmit}>
            <InputContainer>
              <LabelInput htmlFor="idUsername">{t('home.usernameInputLabel')}</LabelInput>
              <StyledInput
                id="idUsername"
                type="text"
                placeholder="4EverWinner"
                maxLength={50}
                value={username}
                onChange={value => setUsername(value)}
              />
            </InputContainer>

            <StyledButton disabled={isUsernameEmpty}>{t('global:button.confirm')}</StyledButton>
          </StyledForm>
        </>
      ) : (
        <>
          <SubTitle>{t('home.goodLuck', { username })}</SubTitle>
          <ButtonContainer>
            <StyledButton mr="s8" onClick={handleChangeUsername}>
              {t('home.changeId')}
            </StyledButton>
            <StyledButton to={Routes.GAME}>{t('home.actionButton')}</StyledButton>
          </ButtonContainer>
        </>
      )}
      <StyledHr />

      <SubTitle>{t('home.moreInfoSubtitle')}</SubTitle>
      <Paragraph>{t('home.moreInfoParagraph')}</Paragraph>
      <ButtonContainer>
        <StyledButton to={Routes.RANKING} disabled={!isFormSubmitted} mr="s8">
          {t('home.rankingButton')}
        </StyledButton>
        <StyledButton to={Routes.SETTINGS}>{t('home.settingButton')}</StyledButton>
      </ButtonContainer>
    </Page>
  )
}

export default Home

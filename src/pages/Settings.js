import React from 'react'

import { useTranslation } from 'react-i18next'

import Select from '../components/Select'

import Page from '../styles/Page'
import StyledButton from '../styles/StyledButton'
import Title from '../styles/Title'

import { useTheme } from '../providers/ThemeProvider'

import { darkTheme, lightTheme, mediumTheme } from '../theme'
import { Routes } from '../utils/constants'
import { useUsername } from '../providers/UserProvider'
import Paragraph from '../styles/Paragraph'

function Settings() {
  const [t, i18n] = useTranslation()
  const [username] = useUsername()
  const [theme, setTheme] = useTheme()

  const languageOptions = [
    {
      id: 'english',
      label: t('settings.language.english'),
      isSelected: i18n.language === 'en',
    },
    {
      id: 'french',
      label: t('settings.language.french'),
      isSelected: i18n.language === 'fr',
    },
  ]

  const themeOptions = [
    {
      id: 'dark',
      label: t('settings.theme.dark'),
      isSelected: theme === darkTheme,
    },
    {
      id: 'medium',
      label: t('settings.theme.medium'),
      isSelected: theme === mediumTheme,
    },
    {
      id: 'light',
      label: t('settings.theme.light'),
      isSelected: theme === lightTheme,
    },
  ]

  const changeLanguage = local => {
    switch (local) {
      case 'french':
        i18n.changeLanguage('fr')
        break
      default:
        i18n.changeLanguage('en')
    }
  }

  const changeTheme = theme => {
    switch (theme) {
      case 'light':
        setTheme(lightTheme)
        break
      case 'medium':
        setTheme(mediumTheme)
        break
      default:
        setTheme(darkTheme)
        break
    }
  }

  return (
    <Page>
      <Title>{t('settings.title')}</Title>
      <Paragraph>{t('settings.paragraph', { username })}</Paragraph>
      <Select
        label={t('settings.language.label')}
        id="language"
        options={languageOptions}
        onClick={changeLanguage}
      />
      <Select
        label={t('settings.theme.label')}
        id="theme"
        options={themeOptions}
        onClick={changeTheme}
      />
      <StyledButton to={Routes.HOME}>{t('global:button.back')}</StyledButton>
    </Page>
  )
}

export default Settings

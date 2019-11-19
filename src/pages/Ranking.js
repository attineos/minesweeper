import React, { Suspense, useEffect, useState } from 'react'
import styled from 'styled-components'

import { map } from 'lodash'

import { useTranslation } from 'react-i18next'

import Page from '../styles/Page'
import StyledButton from '../styles/StyledButton'
import Title from '../styles/Title'
import { Routes } from '../utils/constants'

const StyledTable = styled.table`
  border-spacing: initial;
  border: ${({ theme }) => `${theme.spaces.s1} solid ${theme.components.table.borderColor}`};
  border-bottom: 0;
`

const StyledCell = styled.div`
  ${({ theme }) => `
    border-bottom: ${theme.spaces.s1} solid ${theme.components.table.borderColor};
    padding: ${theme.spaces.sh2};
  `};
  text-align: left;

  &:first-of-type {
    font-weight: bold;
  }
`

function Ranking() {
  const [t] = useTranslation()
  const [ranking, setRanking] = useState([])

  useEffect(() => {
    fetch('/api/ranking')
      .then(response => response.json())
      .then(data => setRanking(data))
  }, [])

  const titles = [
    t('ranking.columnOneTitle'),
    t('ranking.columnTwoTitle'),
    t('ranking.columnThreeTitle'),
  ]

  return (
    <Page>
      <Title>{t('ranking.title')}</Title>
      <Suspense fallback={'Loading ranks'}>
        <StyledTable>
          <thead>
            <tr>
              {map(titles, (title, key) => (
                <StyledCell as="th" key={key}>
                  {title}
                </StyledCell>
              ))}
            </tr>
          </thead>
          <tbody>
            {map(ranking, (rank, index) => (
              <tr key={index}>
                <StyledCell as="td">{index + 1}</StyledCell>
                <StyledCell as="td">{rank.score}</StyledCell>
                <StyledCell as="td">{rank.username}</StyledCell>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </Suspense>
      <StyledButton to={Routes.HOME} mt="sh3">
        {t('global:button.back')}
      </StyledButton>
    </Page>
  )
}

export default Ranking

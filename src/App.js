import React, { Suspense } from 'react'
import styled from 'styled-components'
import ThemeProvider from './providers/ThemeProvider'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import i18n from './i18n'
import { I18nextProvider } from 'react-i18next'

import Game from './pages/game/Game'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Ranking from './pages/Ranking'
import Settings from './pages/Settings'
import { Routes } from './utils/constants'
import UserProvider from './providers/UserProvider'

const Container = styled.div`
  ${({ theme }) => `
    background: ${theme.components.container.backgroundColor};
    color: ${theme.components.container.color};
    font-family: ${theme.fonts.fontFamily.lato};
    height: ${theme.sizes.heights.hh100};
    padding: ${theme.spaces.sh0} ${theme.spaces.s15};
  `}
`

function App() {
  return (
    <ThemeProvider>
      <I18nextProvider i18n={i18n}>
        <UserProvider>
          <Suspense fallback="loading">
            <Container>
              <BrowserRouter>
                <Switch>
                  <Route exact path={Routes.HOME} component={Home} />
                  <Route path={Routes.GAME} component={Game} />
                  <Route path={Routes.RANKING} component={Ranking} />
                  <Route path={Routes.SETTINGS} component={Settings} />

                  <Route component={NotFound} />
                </Switch>
              </BrowserRouter>
            </Container>
          </Suspense>
        </UserProvider>
      </I18nextProvider>
    </ThemeProvider>
  )
}

export default App

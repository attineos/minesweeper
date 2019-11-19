import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { mediumTheme } from '../theme'

// Context providing theme of the app
const ThemeContext = React.createContext()

const useTheme = () => {
  const context = React.useContext(ThemeContext)
  if (!context) {
    throw new Error(`Cannot fetch Theme Context`)
  }
  return context
}

function MineSweeperThemeProvider({ children }) {
  const [theme, setTheme] = useState(mediumTheme)

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={[theme, setTheme]}>{children}</ThemeContext.Provider>
    </ThemeProvider>
  )
}

export { useTheme }
export default MineSweeperThemeProvider

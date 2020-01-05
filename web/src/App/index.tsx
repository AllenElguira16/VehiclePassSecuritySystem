import React, { FC, useState, useEffect } from 'react'
import {
  MuiThemeProvider,
  createMuiTheme,
  CssBaseline,
} from '@material-ui/core'
// import Dashboard from 'Pages'
import DarkModeToggler from 'App/Components/DarkModeToggler'
import { ThemeColor } from 'type'
import Header from './Components/Header'
import { useStyles } from 'Assets/styles'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import Navigation from './Components/Navigation'

const App: FC = () => {
  const [themeColor, changeThemeColor] = useState<ThemeColor>('light')

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#a20f3c',
        dark: '#6d0017',
        light: '#d94c66',
      },
      type: themeColor,
    },
    zIndex: {
      appBar: 2000,
    },
  })

  const changeTheme = () => {
    changeThemeColor(localStorage.getItem('themeColor') as ThemeColor)
  }

  useEffect(() => {
    if (!localStorage.getItem('themeColor'))
      localStorage.setItem('themeColor', 'light')

    changeTheme()
  }, [])

  const styles = useStyles()

  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{ display: 'flex' }}>
          <Header />
          <Navigation />
          <main className={styles.content}>
            <div className={styles.toolbar} />
            <Router />
          </main>
          <DarkModeToggler
            themeColor={themeColor}
            changeThemeColor={changeTheme}
          />
        </div>
      </MuiThemeProvider>
    </BrowserRouter>
  )
}

export default App

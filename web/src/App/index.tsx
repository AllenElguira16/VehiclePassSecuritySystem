import React, { FC, useState, useEffect, useContext } from 'react'
import {
  MuiThemeProvider,
  createMuiTheme,
  CssBaseline,
} from '@material-ui/core'
// import Dashboard from 'Pages'
import { ThemeColor } from 'type'
import Header from './Components/Header'
import { useStyles } from 'Assets/styles'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import Navigation from './Components/Navigation'
import NightModeState from './State/NightModeState'

import moment from 'moment'

const App: FC = () => {
  const [themeColor, changeThemeColor] = useState<ThemeColor>('light')
  const nightModeStore = useContext(NightModeState)

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
    // console.log()
    // const isNightModeInBrowser = window.matchMedia(
    //   '(prefers-color-scheme: dark)',
    // ).matches
    // if (!localStorage.getItem('themeColor')) {
    //   // if (isNightModeInBrowser)
    //   localStorage.setItem(
    //     'themeColor',
    //     isNightModeInBrowser ? 'dark' : 'light',
    //   )
    // }

    // Initialise isNightModeEnabled
    if (!localStorage.getItem('isNightModeEnabled')) {
      localStorage.setItem('isNightModeEnabled', 'false')
    } else {
      const value = localStorage.getItem('isNightModeEnabled') === 'true'
      nightModeStore.isEnabled = value
    }

    if (nightModeStore.isEnabled) {
      // if ()
      const localTime = moment().format('HH:mm')
      const { start, end } = nightModeStore.time
      if (localTime >= start && localTime <= end) {
        localStorage.setItem('themeColor', 'dark')
        changeThemeColor('dark')
      } else {
        changeThemeColor('light')
        localStorage.setItem('themeColor', 'light')
      }
      // nightModeStore.time.end
    }

    changeTheme()
  }, [nightModeStore])

  const styles = useStyles()

  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{ display: 'flex' }}>
          <Header themeColor={themeColor} changeTheme={changeTheme} />
          <Navigation />
          <main className={styles.content}>
            <div className={styles.toolbar} />
            <Router />
          </main>
        </div>
      </MuiThemeProvider>
    </BrowserRouter>
  )
}

export default App

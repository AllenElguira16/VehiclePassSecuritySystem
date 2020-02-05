import React, { FC, useEffect, useContext } from 'react'
import {
  MuiThemeProvider,
  createMuiTheme,
  CssBaseline,
} from '@material-ui/core'
// import Dashboard from 'Pages'
// import { ThemeColor } from 'type'
import Header from './Components/Header'
import { useStyles } from 'Assets/styles'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import Navigation from './Components/Navigation'
import NightModeState from './State/NightModeState'
import { observer } from 'mobx-react-lite'

// import moment from 'moment'

const App: FC = () => {
  const {
    themeColor,
    populateTime,
    changeTheme,
    isLoading,
    setDefaultTheme,
    init,
  } = useContext(NightModeState)

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

  useEffect(() => {
    init()
    // Populate Start and End values
    populateTime()

    // Initialize Theme Color
    // Light as Default Theme
    if (!localStorage.getItem('themeColor')) {
      localStorage.setItem('themeColor', 'light')
    }

    if (isLoading) populateTime()

    setInterval(() => setDefaultTheme(), 3000)

    changeTheme()
  }, [changeTheme, init, isLoading, populateTime, setDefaultTheme])

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

export default observer(App)

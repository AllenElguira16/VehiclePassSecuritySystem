import React, { FC, useState } from 'react'
import { MuiThemeProvider, createMuiTheme, CssBaseline, Fab, Switch, Tooltip } from '@material-ui/core'
import { useStyles } from 'styles'
import { Route, Switch as RouteSwitch, BrowserRouter } from 'react-router-dom'
// Pages
import Dashboard from 'Pages/Dashboard'
import Main from 'Pages/Main';

const App: FC = () => {
  const styles = useStyles()
  const [dark, toggleDarkValue] = useState(false)
  const toggleDark = () => {
    toggleDarkValue(!dark)
  }

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#a20f3c',
        dark: '#6d0017',
        light: '#d94c66',
      },
      type: dark ? 'dark' : 'light',
    },
  })

  const darkToggle = <Fab color="primary" variant="extended" aria-label="toggle-dark" className={styles.darkToggler}>
    <Tooltip title="Toggle Dark">
      <Switch checked={dark} onChange={toggleDark} value="checkedA" id="dark-switch" />
    </Tooltip>
  </Fab>

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <RouteSwitch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" component={Main} />
        </RouteSwitch>
        {darkToggle}
      </BrowserRouter>
    </MuiThemeProvider>
  )
}

export default App

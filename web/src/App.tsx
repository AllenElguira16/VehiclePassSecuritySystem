import React, { FC } from 'react'
import { MuiThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core'
import { Route } from 'react-router-dom'
import Home from 'Pages/Home'

const theme = createMuiTheme({})

const App: FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Route exact path="/" component={Home} />
    </MuiThemeProvider>
  )
}

export default App

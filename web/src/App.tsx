import React, { FC, useState } from 'react'
import { MuiThemeProvider, createMuiTheme, CssBaseline, Container, Fab, Switch, Tooltip } from '@material-ui/core'
import { useStyles } from 'styles'
import { Route } from 'react-router-dom'
import VehiclePass from 'Pages/VehiclePass'
import Dashboard from 'Pages/Dashboard'
import Header from 'Components/Common/Header'
import AboutUs from 'Pages/AboutUs'
import Home from 'Pages/Home'
import Footer from 'Components/Common/Footer'

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

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/vehicle-pass" component={VehiclePass} />
        <Route exact path="/about-us" component={AboutUs} />
      </Container>
      <Fab color="inherit" aria-label="toggle-dark" className={styles.darkToggler}>
        <Tooltip title="Toggle Dark">
          <Switch checked={dark} onChange={toggleDark} value="checkedA" />
        </Tooltip>
      </Fab>
      <Footer />
    </MuiThemeProvider>
  )
}

export default App

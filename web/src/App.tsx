import React, { FC, useState } from 'react'
import { MuiThemeProvider, createMuiTheme, CssBaseline, Container, Fab, Switch, Tooltip } from '@material-ui/core'
import { useStyles } from 'styles'
import { Route } from 'react-router-dom'
// Pages
import VehiclePass from 'Pages/VehiclePass'
import Dashboard from 'Pages/Dashboard'
import AboutUs from 'Pages/AboutUs'
import Home from 'Pages/Home'
// Components
import Header from 'Components/Common/Header'
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
      <div className={styles.mainContainer}>
        <Header />
        <Container component="main" className={styles.pageContainer}>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard/:subpages" component={Dashboard} />
          <Route exact path="/vehicle-pass" component={VehiclePass} />
          <Route exact path="/about-us" component={AboutUs} />
        </Container>
        <Footer />
      </div>
      <Fab color="primary" variant="extended" aria-label="toggle-dark" className={styles.darkToggler}>
        <Tooltip title="Toggle Dark">
          <Switch checked={dark} onChange={toggleDark} value="checkedA" id="dark-switch" />
        </Tooltip>
      </Fab>
    </MuiThemeProvider>
  )
}

export default App

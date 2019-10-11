import React, { FC } from 'react'
import { Container } from '@material-ui/core'
import { Route } from 'react-router'
import { useStyles } from 'styles'
// Pages
import VehiclePass from './VehiclePass'
import AboutUs from './AboutUs'
import Home from './Home'
// Components
import Header from 'Components/Common/Header'
import Footer from 'Components/Common/Footer'

const Main: FC = () => {
  const styles = useStyles()
  return (
    <div className={styles.mainContainer}>
      <Header />
      <div className={styles.toolbar} />
      <Container component="main" className={styles.pageContainer}>
        <Route exact path="/" component={Home} />
        <Route exact path="/vehicle-pass" component={VehiclePass} />
        <Route exact path="/about-us" component={AboutUs} />
      </Container>
      <Footer />
    </div>
  )
}

export default Main

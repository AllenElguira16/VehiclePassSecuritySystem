import React, { FC, useContext, useEffect } from 'react'
import SignIn from 'Pages/Dashboard/SignIn'
import { AdminState } from 'State'
import { CircularProgress, Grid } from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import { Route } from 'react-router-dom'
import Header from 'Components/Dashboard/Header'
// import { useStyles } from 'styles'
import Navigation from 'Components/Dashboard/Navigation'
import { useStyles } from 'Assets/styles'
import Home from './Home'
import Users from './Users'
import EditCredentials from './EditCredentials'

const Dashboard: FC = () => {
  const { state, getSignInState } = useContext(AdminState)
  const { isLoading, isLoggedIn } = state
  const styles = useStyles()

  useEffect(() => {
    getSignInState()
  }, [getSignInState])

  return (
    <div className={styles.dashboardContainer}>
      <Header />
      <div className={styles.toolbar} />
      <div style={{ display: 'flex' }}>
        <Route path="/dashboard" render={() => isLoggedIn && <Navigation />} />
        <main className={styles.dashboardContent}>
          {!isLoading ? (
            !isLoggedIn ? (
              <SignIn />
            ) : (
              <>
                <Route exact path="/dashboard" component={Home} />
                <Route exact path="/dashboard/users" component={Users} />
                <Route
                  exact
                  path="/dashboard/edit-credentials"
                  component={EditCredentials}
                />
              </>
            )
          ) : (
            <Grid container justify="center">
              <Grid item>
                <CircularProgress />
              </Grid>
            </Grid>
          )}
        </main>
      </div>
    </div>
  )
}

export default observer(Dashboard)

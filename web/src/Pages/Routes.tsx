import React, { FC, useContext, useEffect } from 'react'
import { Grid, CircularProgress } from '@material-ui/core'
import { Route, Redirect } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { AdminState } from 'State'
import SignIn from 'Pages/SignIn'
import Users from 'Pages/Users'
import History from 'Pages/History'
import EditCredentials from 'Pages/EditCredentials'
import NightModeSettings from './NightModeSettings'

const Router: FC = () => {
  const { state, getSignInState } = useContext(AdminState)
  const { isLoading, isLoggedIn } = state

  useEffect(() => {
    getSignInState()
  }, [getSignInState])

  return !isLoading ? (
    !isLoggedIn ? (
      <SignIn />
    ) : (
      <>
        <Route exact path="/" render={() => <Redirect to="/users" />} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/history" component={History} />
        <Route
          exact
          path="/night-mode-settings"
          component={NightModeSettings}
        />
        <Route exact path="/edit-credentials" component={EditCredentials} />
      </>
    )
  ) : (
    <Grid container justify="center">
      <Grid item>
        <CircularProgress />
      </Grid>
    </Grid>
  )
}

export default observer(Router)

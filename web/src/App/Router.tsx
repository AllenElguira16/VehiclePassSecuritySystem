import React, { FC, useContext, useEffect } from 'react'
import { Grid, CircularProgress } from '@material-ui/core'
import { Route, Redirect } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { AdminState } from 'App/State'
import SignIn from 'App/Pages/SignIn'
import Users from 'App/Pages/Users'
import History from 'App/Pages/History'
import EditCredentials from 'App/Pages/EditCredentials'

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

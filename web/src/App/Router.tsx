import React, { FC, useContext, useEffect } from 'react'
import { Grid, CircularProgress } from '@material-ui/core'
import {
  Route,
  Switch as RouteSwitch,
  BrowserRouter,
  Redirect,
} from 'react-router-dom'
import { useStyles } from 'Assets/styles'
import { AdminState } from 'App/State'
import Navigation from './Components/Navigation'
import SignIn from 'App/Pages/SignIn'
import Users from 'App/Pages/Users'
import History from 'App/Pages/History'
import EditCredentials from 'App/Pages/EditCredentials'
import { observer } from 'mobx-react-lite'

const Router: FC = () => {
  const { state, getSignInState } = useContext(AdminState)
  const { isLoading, isLoggedIn } = state
  const styles = useStyles()

  useEffect(() => {
    getSignInState()
  }, [getSignInState])

  console.log(isLoggedIn)

  return (
    // <RouteSwitch>
    !isLoading ? (
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
    ) //}
    // </RouteSwitch>
  )
}

export default observer(Router)

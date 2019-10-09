import React, { FC, useContext, useEffect } from 'react'
import SignIn from 'Pages/Dashboard/SignIn'
import { SignInState } from './SignIn/state'
import { CircularProgress } from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import Main from './Main'
import { Route } from 'react-router-dom'

const Dashboard: FC = () => {
  const { state, getSignInState } = useContext(SignInState)
  const { isLoading, isLoggedIn } = state

  useEffect(() => {
    getSignInState()
  }, [getSignInState])

  if (isLoading) {
    return <CircularProgress />
  }
  return <Route path="/dashboard" render={() => (!isLoggedIn ? <SignIn /> : <Main />)} />
}

export default observer(Dashboard)

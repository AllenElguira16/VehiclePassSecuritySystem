import React, { FC, useContext, useEffect } from 'react'
import SignIn from 'Pages/Dashboard/SignIn'
import { SignInState } from './SignIn/state'
import { CircularProgress, Container, Grid } from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import Main from './Main'
import { Route } from 'react-router-dom'
import Header from 'Components/Dashboard/Header';
import { useStyles } from 'styles';

const Dashboard: FC = () => {
  const { state, getSignInState } = useContext(SignInState)
  const { isLoading, isLoggedIn } = state
  const styles = useStyles();

  useEffect(() => {
    getSignInState()
  }, [getSignInState])

  return (
    <div className={styles.mainContainer}>
      <Header />
      <Container>
        {!isLoading ?
          <Route path="/dashboard" render={() => (!isLoggedIn ? <SignIn /> : <Main />)} />
          :
          <Grid container justify="center">
            <Grid item>
              <CircularProgress />
            </Grid>
          </Grid>
        }
      </Container>
    </div>
  );
}

export default observer(Dashboard)

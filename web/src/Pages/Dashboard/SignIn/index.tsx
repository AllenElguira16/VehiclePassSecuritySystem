import React, { FunctionComponent, useContext } from 'react'
import { useStyles } from 'styles'
import { Typography, Grid, TextField, Paper, Button, Avatar, FormControlLabel, Checkbox } from '@material-ui/core'
import { LockOutlined } from '@material-ui/icons'
import { SignInState } from './state'
import { observer } from 'mobx-react-lite'

const SignIn: FunctionComponent = () => {
  const { signIn, onInputChange } = useContext(SignInState)
  const styles = useStyles()

  return (
    <Grid container justify="center" spacing={8}>
      <Grid item md={6}>
        <Paper className={styles.signInContainer}>
          <Avatar>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h6">
            Dashboard Sign-in
          </Typography>
          <form onSubmit={signIn}>
            <TextField
              onChange={onInputChange('username')}
              margin="normal"
              variant="outlined"
              label="Username"
              fullWidth
            />
            <TextField
              onChange={onInputChange('password')}
              margin="normal"
              variant="outlined"
              label="Password"
              type="password"
              fullWidth
            />
            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Send
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default observer(SignIn)

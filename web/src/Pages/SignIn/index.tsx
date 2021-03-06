import React, { FunctionComponent, useContext } from 'react'
import { useStyles } from 'Assets/styles'
import {
  Typography,
  Grid,
  TextField,
  Paper,
  Button,
  Avatar,
} from '@material-ui/core'
import { LockOutlined } from '@material-ui/icons'
import { AdminState } from 'State'
import { observer } from 'mobx-react-lite'
import PasswordField from 'Components/PasswordField'

const SignIn: FunctionComponent = () => {
  const { signIn, onInputChange } = useContext(AdminState)
  const styles = useStyles()

  return (
    <Grid container justify="center" spacing={2}>
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
              label="Username"
              fullWidth
            />
            <PasswordField
              onChange={onInputChange('password')}
              label="Password"
            />
            <Button
              className={styles.marginTopMedium}
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Send
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default observer(SignIn)

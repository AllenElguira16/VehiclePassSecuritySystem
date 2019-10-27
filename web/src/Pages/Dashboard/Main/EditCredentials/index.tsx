import React, { FC, useContext } from 'react'
import {
  Paper,
  TextField,
  Button,
  Grid,
  Avatar,
  Typography,
} from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import { useStyles } from 'Assets/styles'
import { AdminState } from 'State'
import { LockOutlined } from '@material-ui/icons'

const EditCredentials: FC = () => {
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
            <div>Edit Credentials</div>
          </Typography>
          <form>
            <TextField margin="normal" label="Username" fullWidth />
            <TextField
              margin="normal"
              label="Password"
              type="password"
              fullWidth
            />
            <Button color="primary" variant="contained" fullWidth>
              Send
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default observer(EditCredentials)

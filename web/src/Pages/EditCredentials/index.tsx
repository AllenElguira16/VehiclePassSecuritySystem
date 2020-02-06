import React, { FC, useContext, useState, ChangeEvent } from 'react'
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
import Alert from 'Components/Alert'
import { Alert as AlertStateProps } from 'type'
import PasswordField from 'Components/PasswordField'

const EditCredentials: FC = () => {
  const styles = useStyles()
  const { onInputChange, update } = useContext(AdminState)
  const [alertState, setAlertState] = useState<AlertStateProps>({
    type: '',
    isOpen: false,
    msg: '',
  })

  const onUpdate = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    const response = await update()
    setAlertState({
      type: response.success ? 'success' : 'error',
      isOpen: true,
      msg: response.success || response.error,
    })
  }

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
          <form onSubmit={onUpdate}>
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
            <PasswordField
              onChange={onInputChange('rePassword')}
              label="Re-enter Password"
            />
            <Button
              className={styles.marginTopMedium}
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
            >
              Send
            </Button>
          </form>
        </Paper>
        <Alert
          type={alertState.type}
          open={alertState.isOpen}
          onClose={() => setAlertState({ ...alertState, isOpen: false })}
        >
          {alertState.msg}
        </Alert>
      </Grid>
    </Grid>
  )
}

export default observer(EditCredentials)

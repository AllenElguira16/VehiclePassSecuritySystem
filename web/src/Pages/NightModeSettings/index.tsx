import React, { FC, useContext, useState, ChangeEvent } from 'react'
import { useStyles } from 'Assets/styles'
import { Grid, Paper } from '@material-ui/core'
import NightModeState from 'State/NightModeState'
import { observer } from 'mobx-react-lite'
import Alert from 'Components/Alert'
import { Alert as AlertStateProps } from 'type'
import Forms from './Forms'

const NightModeSettings: FC = () => {
  const [alertState, setAlertState] = useState<AlertStateProps>({
    type: '',
    isOpen: false,
    msg: '',
  })
  const styles = useStyles()
  const { submit } = useContext(NightModeState)

  // useEffect(() => {
  // }, [populateTime, isLoading])

  const onSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    submit()
    setAlertState({
      type: 'success',
      isOpen: true,
      msg: 'Saved!',
    })
  }

  // if (isLoading) return <>Loading</>
  return (
    <Grid container justify="center" spacing={2}>
      <Grid item md={6}>
        <Paper className={styles.signInContainer}>
          <h2>Schedule Night Light</h2>
          <Forms onSubmit={onSubmit} />
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

export default observer(NightModeSettings)

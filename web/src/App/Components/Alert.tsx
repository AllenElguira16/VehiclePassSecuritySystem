import React, { FC, SyntheticEvent } from 'react'
import { Snackbar, SnackbarContent } from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import { useStyles } from 'Assets/styles'
import { AlertComponentProps } from 'type'

const Alert: FC<AlertComponentProps> = props => {
  const styles = useStyles()
  const onClose = (event?: SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') return

    props.onClose()
  }

  return (
    <Snackbar
      open={props.open}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      autoHideDuration={6000}
      onClose={onClose}
    >
      <SnackbarContent
        className={props.type !== '' ? styles[props.type] : ''}
        style={{ color: '#FFF' }}
        message={props.children}
      />
    </Snackbar>
  )
}

export default observer(Alert)

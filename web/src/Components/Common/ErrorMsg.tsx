import React, { FC } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core'

interface Props {
  title: string
  open: boolean
  onClose: () => void
}

const ErrorMsg: FC<Props> = props => {
  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">{props.children}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary">Close</Button>
      </DialogActions>
    </Dialog>
  )
}

export default ErrorMsg

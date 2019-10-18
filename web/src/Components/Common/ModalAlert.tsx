import React, { FC, SyntheticEvent } from 'react'
import { Snackbar, SnackbarContent } from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import { useStyles } from 'Assets/styles'

interface Props {
  type: 'success' | 'error'
  open: boolean
  onClose: () => void
}

const ModalAlert: FC<Props> = props => {
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
      <SnackbarContent className={styles[props.type]} message={props.children} />
    </Snackbar>
  )
  // return (
  //   <Dialog
  //     open={props.open}
  //     onClose={props.onClose}
  //     aria-labelledby="alert-dialog-title"
  //     aria-describedby="alert-dialog-description"
  //   >
  //     <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
  //     <DialogContent>
  //       <DialogContentText id="alert-dialog-description">{props.children}</DialogContentText>
  //     </DialogContent>
  //     <DialogActions>
  //       <Button color="primary">Close</Button>
  //     </DialogActions>
  //   </Dialog>
  // )
}

export default observer(ModalAlert)

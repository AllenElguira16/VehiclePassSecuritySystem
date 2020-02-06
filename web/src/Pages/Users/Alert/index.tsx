import React, { FC, useContext } from 'react'
import ModalAlert from 'Components/Alert'
import { AlertState } from './state'
import { observer } from 'mobx-react-lite'

const Alert: FC = () => {
  const { alertState, closeAlert } = useContext(AlertState)

  return (
    <ModalAlert
      open={alertState.isOpen}
      onClose={closeAlert}
      type={alertState.type}
    >
      {alertState.msg}
    </ModalAlert>
  )
}

export default observer(Alert)

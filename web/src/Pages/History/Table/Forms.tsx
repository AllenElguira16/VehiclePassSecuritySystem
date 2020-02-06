import React, { FC, useContext } from 'react'
import { TableRow, IconButton, TableCell } from '@material-ui/core'
import { Check, Clear } from '@material-ui/icons'
import { observer } from 'mobx-react-lite'
import { HistoryState } from 'State'
import Axios, { AxiosResponse } from 'axios'
import { AlertState } from '../Alert/state'
import { History, HistoryFormState as FormState } from 'type'

interface Props {
  type: FormState['type']
  history: History
}

// type Key = Array<keyof UserInput>

const Form: FC<Props> = props => {
  const { formState, closeAddForm, fetchHistories, historyState } = useContext(
    HistoryState,
  )
  const { openAlert } = useContext(AlertState)
  const onClose = () => {
    if (formState.currentKey !== null) formState.currentKey = null
    closeAddForm()
  }

  const onSubmit = (type: FormState['type']) => async () => {
    let dataResponse: AxiosResponse | undefined = undefined
    if (type === 'delete')
      dataResponse = await Axios.delete(`/history/${props.history.id}`)
    console.log(props.history.id)
    if (dataResponse) {
      if (dataResponse.data.success) onSuccess(dataResponse)
      else if (dataResponse.data.error)
        openAlert('error', dataResponse.data.error)
    }
    historyState.page = 0
  }

  const onSuccess = (dataResponse: AxiosResponse) => {
    fetchHistories()
    closeAddForm()
    formState.currentKey = null
    openAlert('success', dataResponse.data.success)
  }

  return (
    <TableRow>
      <TableCell colSpan={3}>Are you sure you want to delete?</TableCell>
      <TableCell>
        <IconButton onClick={onSubmit(props.type)} size="small">
          <Check />
        </IconButton>
        <IconButton onClick={onClose} size="small">
          <Clear />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}

export default observer(Form)

import React, { FC, useContext, useEffect } from 'react'
import {
  TableRow,
  IconButton,
  TableCell,
  TextField,
  MenuItem,
} from '@material-ui/core'
import { Check, Clear } from '@material-ui/icons'
import { observer } from 'mobx-react-lite'
import { useStyles } from 'Assets/styles'
import { UsersState } from 'State'
import { User, FormState, UserInput } from 'type'
import Axios, { AxiosResponse } from 'axios'
import { AlertState } from '../Alert/state'

interface Props {
  type: FormState['type']
  user?: User
}

type Key = Array<keyof UserInput>

const Form: FC<Props> = props => {
  // const {  } = useContext(UsersTableState)
  const {
    onChange,
    formState,
    closeAddForm,
    fetchUsers,
    userState,
  } = useContext(UsersState)
  const { openAlert } = useContext(AlertState)
  const styles = useStyles()
  const { userInput } = formState
  const userType = ['Employee', 'Student']
  // Close FormTable
  const onClose = () => {
    if (formState.currentKey !== null) formState.currentKey = null
    closeAddForm()
  }
  // Perform Operations before display UI
  useEffect(() => {
    if (props.type === 'edit' && props.user) {
      const { id, firstname, lastname, type, schoolID } = props.user
      formState.userInput = { id, firstname, lastname, type, schoolID }
    }
  }, [formState, props])

  const onSubmit = (type: FormState['type']) => async () => {
    let dataResponse: AxiosResponse | undefined = undefined
    if (type === 'add')
      dataResponse = await Axios.post('/user', formState.userInput)
    else if (type === 'edit')
      dataResponse = await Axios.put('/user', formState.userInput)
    else if (type === 'delete' && props.user)
      dataResponse = await Axios.delete(`/user/${props.user.id}`)

    if (dataResponse) {
      if (dataResponse.data.success) onSuccess(dataResponse)
      else if (dataResponse.data.error)
        openAlert('error', dataResponse.data.error)
    }
    userState.page = 0
  }

  const onSuccess = (dataResponse: AxiosResponse) => {
    fetchUsers()
    closeAddForm()
    formState.currentKey = null
    openAlert('success', dataResponse.data.success)
  }
  const keys: Key = ['schoolID', 'firstname', 'lastname']
  const placeholders = ['School ID', 'Firstname', 'Lastname']
  return (
    <TableRow>
      {props.type !== 'delete' ? (
        <>
          {keys.map((key, i) => (
            <TableCell align="left" key={i}>
              <TextField
                label={placeholders[i]}
                value={userInput[key]}
                onChange={onChange(key)}
              />
            </TableCell>
          ))}
          <TableCell align="left">
            <TextField
              label="Type"
              className={styles.textField}
              value={userInput.type}
              onChange={onChange('type')}
              select
            >
              {userType.map(type => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </TextField>
          </TableCell>
          <TableCell align="left" />
        </>
      ) : (
        <TableCell colSpan={6}>Are you sure you want to delete?</TableCell>
      )}
      <TableCell align="right">
        <IconButton size="small" onClick={onSubmit(props.type)}>
          <Check />
        </IconButton>
        <IconButton size="small" onClick={onClose}>
          <Clear />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}

export default observer(Form)

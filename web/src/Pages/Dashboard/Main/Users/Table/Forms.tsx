import React, { FC, useContext, useEffect } from 'react'
import {
  TableRow,
  IconButton,
  TableCell,
  TextField,
  MenuItem,
  Box,
} from '@material-ui/core'
import { Check, Clear } from '@material-ui/icons'
// import { UsersState } from '../state'
import { observer } from 'mobx-react-lite'
import { useStyles } from 'Assets/styles'
import { UsersState } from './state'
import { User, FormState } from 'type'
import Axios, { AxiosResponse } from 'axios'
import { AlertState } from '../Alert/state'
// import { User } from 'type'

interface Props {
  type: FormState['type']
  user?: User
}

const AddUser: FC<Props> = props => {
  // const {  } = useContext(UsersTableState)
  const { onChange, formState, closeAddForm, fetchUsers } = useContext(
    UsersState,
  )
  const { openAlert } = useContext(AlertState)
  const styles = useStyles()
  const { userInput } = formState
  const userType = ['Employee', 'Student', 'Visitor']
  const onClose = () => {
    if (formState.currentKey !== null) formState.currentKey = null
    closeAddForm()
  }

  useEffect(() => {
    if (props.type === 'edit' && props.user) {
      const { id, firstname, lastname, type, licenseId } = props.user
      formState.userInput = { id, firstname, lastname, type, licenseId }
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
  }

  const onSuccess = (dataResponse: AxiosResponse) => {
    fetchUsers()
    closeAddForm()
    formState.currentKey = null
    openAlert('success', dataResponse.data.success)
  }

  return (
    <TableRow>
      <TableCell>
        <IconButton onClick={onSubmit(props.type)}>
          <Check />
        </IconButton>
        <IconButton onClick={onClose}>
          <Clear />
        </IconButton>
      </TableCell>
      {props.type !== 'delete' ? (
        <>
          <TableCell align="right">
            <Box width="100%">
              <TextField
                label="Firstname"
                value={userInput.firstname}
                onChange={onChange('firstname')}
              />
            </Box>
          </TableCell>
          <TableCell align="right">
            <TextField
              label="Lastname"
              value={userInput.lastname}
              onChange={onChange('lastname')}
            />
          </TableCell>
          <TableCell align="right">
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
          <TableCell align="right">
            <TextField
              label="License ID"
              value={userInput.licenseId}
              onChange={onChange('licenseId')}
            />
          </TableCell>
          <TableCell align="right" />
        </>
      ) : (
        <>
          <TableCell colSpan={4}>Are you sure you want to delete?</TableCell>
        </>
      )}
    </TableRow>
  )
}

export default observer(AddUser)

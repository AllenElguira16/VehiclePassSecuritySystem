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
import { useStyles } from 'styles'
import { UsersState } from '../state'
import { User } from 'type'
// import { User } from 'type'

interface Props {
  type: 'add' | 'edit'
  user?: User
}

const AddUser: FC<Props> = props => {
  // const {  } = useContext(UsersTableState)
  const {
    onSubmit,
    onClear,
    onChange,
    formState,
    toggleAlert,
    closeAddForm,
    userState,
    fetchUsers,
  } = useContext(UsersState)
  // const {  } = userState;
  const styles = useStyles()
  const { userInput } = formState

  const userType = ['Employee', 'Student', 'Visitor']
  // const submit = async () => {
  //   await onSubmit(props.type, data => {
  //     if (data.success) {
  //       toggleAlert('success', data.success)
  //       if (props.type === 'add') onClear()
  //       if (props.type === 'edit') {
  //         fetchUsers()
  //         userState.keyToEdit = null
  //       }
  //     }
  //     if (data.error) toggleAlert('error', data.error)
  //   })
  // }

  const onClose = () => {
    if (userState.keyToEdit !== null) userState.keyToEdit = null
    closeAddForm()
  }

  useEffect(() => {
    if (props.type === 'edit' && props.user) {
      const { id, firstname, lastname, type, licenseId } = props.user
      formState.userInput = { id, firstname, lastname, type, licenseId }
    }
  }, [formState, props])

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
    </TableRow>
  )
}

export default observer(AddUser)

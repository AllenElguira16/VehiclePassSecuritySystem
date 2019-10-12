import React, { FC, useContext, useEffect } from 'react'
import { TableRow, IconButton, TableCell, TextField, MenuItem, Box } from '@material-ui/core'
import { Check, Clear } from '@material-ui/icons'
// import { UsersState } from '../state'
import { observer } from 'mobx-react-lite'
import { useStyles } from 'styles'
import { UsersTableState } from './state'
import { User } from 'type'
// import { User } from 'type'

interface Props {
  type: 'add' | 'edit'
  user?: User
}

const AddUser: FC<Props> = props => {
  const { onSubmit, onClear, onChange, formState, toggleAlert } = useContext(UsersTableState)
  // const {  } = userState;
  const styles = useStyles()
  const { userInput } = formState

  const userType = ['Employee', 'Student', 'Visitor']
  const submit = async () => {
    await onSubmit(props.type, data => {
      if (data.success) {
        toggleAlert('success', 'User added!')
        onClear()
      }
      if (data.error) toggleAlert('error', data.error)
    })
  }

  useEffect(() => {
    if (props.type === 'edit' && props.user)
      formState.userInput = {
        firstname: props.user.firstname,
        lastname: props.user.lastname,
        type: props.user.type,
        licenseId: props.user.licenseId,
      }
  }, [])

  return (
    <TableRow>
      <TableCell>
        <IconButton onClick={submit}>
          <Check />
        </IconButton>
        <IconButton onClick={onClear}>
          <Clear />
        </IconButton>
      </TableCell>
      <TableCell align="right">
        <Box width="100%">
          <TextField label="Firstname" value={userInput.firstname} onChange={onChange('firstname')} />
        </Box>
      </TableCell>
      <TableCell align="right">
        <TextField label="Lastname" value={userInput.lastname} onChange={onChange('lastname')} />
      </TableCell>
      <TableCell align="right">
        <TextField label="Type" className={styles.textField} value={userInput.type} onChange={onChange('type')} select>
          {userType.map(type => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </TextField>
      </TableCell>
      <TableCell align="right">
        <TextField label="License ID" value={userInput.licenseId} onChange={onChange('licenseId')} />
      </TableCell>
      <TableCell align="right" />
    </TableRow>
  )
}

export default observer(AddUser)

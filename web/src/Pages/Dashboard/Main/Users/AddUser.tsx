import React, { FC, useContext } from 'react'
import { TableRow, IconButton, TableCell, TextField, MenuItem } from '@material-ui/core'
import { Check, Clear } from '@material-ui/icons'
import { UsersState } from './state'
import { observer } from 'mobx-react-lite'
import { useStyles } from 'styles'
// import { User } from 'type'

const AddUser: FC = () => {
  const { onSubmit, onClear, onChange, formState } = useContext(UsersState)
  const styles = useStyles()
  const { userInput } = formState

  const userType = ['Employee', 'Student', 'Visitor']
  return (
    <TableRow>
      <TableCell>
        <IconButton onClick={onSubmit}>
          <Check />
        </IconButton>
        <IconButton onClick={onClear}>
          <Clear />
        </IconButton>
      </TableCell>
      <TableCell>
        <TextField label="Firstname" value={userInput.firstname} onChange={onChange('firstname')} fullWidth />
      </TableCell>
      <TableCell>
        <TextField label="Lastname" value={userInput.lastname} onChange={onChange('lastname')} fullWidth />
      </TableCell>
      <TableCell>
        <TextField
          label="Type"
          className={styles.textField}
          value={userInput.type}
          onChange={onChange('type')}
          fullWidth
          select
        >
          {/* <MenuItem value="" hidden></MenuItem> */}
          {userType.map(type => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </TextField>
      </TableCell>
      <TableCell>
        <TextField label="License ID" value={userInput.licenseId} fullWidth onChange={onChange('licenseId')} />
      </TableCell>
    </TableRow>
  )
}

export default observer(AddUser)

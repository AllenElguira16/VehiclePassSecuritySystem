import React, { FC } from 'react'
import { TableRow, IconButton, TableCell, TextField } from '@material-ui/core'
import { Check, Clear } from '@material-ui/icons'

const AddUser: FC = () => {
  return (
    <TableRow>
      <TableCell>
        <IconButton>
          <Check />
        </IconButton>
        <IconButton>
          <Clear />
        </IconButton>
      </TableCell>
      <TableCell>
        <TextField label="UserID" />
      </TableCell>
      <TableCell>
        <TextField label="Firstname" />
      </TableCell>
      <TableCell>
        <TextField label="Lastname" />
      </TableCell>
    </TableRow>
  )
}

export default AddUser

import React, { FC, useContext } from 'react'
import { TableRow, TableCell, IconButton } from '@material-ui/core'
import { Edit, Delete } from '@material-ui/icons'
import { UsersState } from '../state'
import { observer } from 'mobx-react-lite'
import TableProgressBar from 'Components/Common/TableProgressBar'
import Forms from './Forms'

const UserRows: FC = () => {
  const { userState } = useContext(UsersState)
  const { users, isLoading, rowsPerPage, page } = userState

  const formatDate = (date: Date | null): string => {
    return new Date(date as Date).toLocaleDateString()
  }

  return (
    <>
      {!isLoading ? (
        users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user, i) =>
          userState.keyToEdit === i ? (
            <Forms type="edit" user={user} />
          ) : (
            <TableRow key={i}>
              <TableCell>
                <IconButton onClick={() => (userState.keyToEdit = i)}>
                  <Edit />
                </IconButton>
                <IconButton>
                  <Delete />
                </IconButton>
              </TableCell>
              <TableCell align="right">{user.firstname}</TableCell>
              <TableCell align="right">{user.lastname}</TableCell>
              <TableCell align="right">{user.type}</TableCell>
              <TableCell align="right">{user.licenseId}</TableCell>
              <TableCell align="right">{formatDate(user.dateCreated)}</TableCell>
            </TableRow>
          ),
        )
      ) : (
        <TableProgressBar />
      )}
    </>
  )
}

export default observer(UserRows)

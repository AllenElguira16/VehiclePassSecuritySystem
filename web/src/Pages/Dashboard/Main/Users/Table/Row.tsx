import React, { FC, useContext } from 'react'
import { TableRow, TableCell, IconButton } from '@material-ui/core'
import { Edit, Delete } from '@material-ui/icons'
import { UsersState } from './state'
import { observer } from 'mobx-react-lite'
import TableProgressBar from 'Components/Common/TableProgressBar'
import Forms from './Forms'
import { FormState } from 'type'

const UserRows: FC = () => {
  const { userState, formState } = useContext(UsersState)
  const { users, isLoading, rowsPerPage, page } = userState
  const totalRowsPerPage = page * rowsPerPage
  const totalUsersKey = page * rowsPerPage + rowsPerPage

  const formatDate = (date: Date | null): string => {
    return new Date(date as Date).toLocaleDateString()
  }

  const onClick = (type: FormState['type'], index: number) => () => {
    formState.type = type
    formState.currentKey = index
  }

  if (isLoading) return <TableProgressBar />
  return (
    <>
      {users.length !== 0 ? (
        users.slice(totalRowsPerPage, totalUsersKey).map((user, i) =>
          formState.currentKey === i ? (
            <Forms type={formState.type} user={user} key={i} />
          ) : (
            <TableRow key={i}>
              <TableCell align="left">{user.licenseId}</TableCell>
              <TableCell align="left">{user.firstname}</TableCell>
              <TableCell align="left">{user.lastname}</TableCell>
              <TableCell align="left">{user.type}</TableCell>
              <TableCell align="left">{formatDate(user.dateCreated)}</TableCell>
              <TableCell>
                <IconButton onClick={onClick('edit', i)}>
                  <Edit />
                </IconButton>
                <IconButton onClick={onClick('delete', i)}>
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ),
        )
      ) : (
        <TableRow>
          <TableCell colSpan={6} align="center">
            No Records for Users
          </TableCell>
        </TableRow>
      )}
    </>
  )
}

export default observer(UserRows)

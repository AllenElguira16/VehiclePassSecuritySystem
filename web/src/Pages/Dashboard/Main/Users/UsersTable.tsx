import React, { FC, useContext } from 'react'
import { TableBody, TableRow, TableCell, CircularProgress, Table, TableHead, TableSortLabel } from '@material-ui/core'
import { UsersState } from './state'
import { observer } from 'mobx-react-lite'
import { UsersTableHeader } from 'type'

const UsersTable: FC = () => {
  const { userState, handleSort } = useContext(UsersState)
  const formatDate = (date: Date | null): string => {
    return new Date(date as Date).toLocaleDateString()
  }
  const lists: UsersTableHeader[] = [
    {
      key: 'userId',
      name: 'UserID',
    },
    {
      key: 'firstname',
      name: 'Firstname',
    },
    {
      key: 'lastname',
      name: 'Lastname',
    },
    {
      key: 'dateCreated',
      name: 'Date Created',
    },
  ]
  return (
    <Table>
      <TableHead>
        <TableRow>
          {lists.map(tableHeader => (
            <TableCell key={tableHeader.key}>
              <TableSortLabel onClick={() => handleSort(tableHeader.key)}>{tableHeader.name}</TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {!userState.isLoading ? (
          userState.users.map((user, i) => (
            <TableRow key={i}>
              <TableCell>{user.userId}</TableCell>
              <TableCell>{user.firstname}</TableCell>
              <TableCell>{user.lastname}</TableCell>
              <TableCell>{formatDate(user.dateCreated)}</TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell align="center" colSpan={5}>
              <CircularProgress />
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}

export default observer(UsersTable)

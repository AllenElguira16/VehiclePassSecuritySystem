import React, { FC, useEffect, useContext } from 'react'
import {
  Table,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  CircularProgress,
  TableSortLabel,
} from '@material-ui/core'
import { UsersState } from './state'
import { observer } from 'mobx-react-lite'
import { UsersTableHeader } from 'type'

const Users: FC = () => {
  const { fetchUsers, handleSort, userState } = useContext(UsersState)
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
  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  return (
    <Paper>
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
                <TableCell>{user.dateCreated}</TableCell>
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
    </Paper>
  )
}

export default observer(Users)

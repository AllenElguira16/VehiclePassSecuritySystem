import React, { FC, useContext } from 'react'
import { TableRow, TableCell, IconButton } from '@material-ui/core'
import { Edit, Delete } from '@material-ui/icons'
import { UsersState } from './state'
import { observer } from 'mobx-react-lite'
import TableProgressBar from 'Components/Common/TableProgressBar'
// import LNULogo from 'Reactstrap/Assets/images/LNULogo.webp'
import Forms from './Forms'
import { FormState } from 'type'

const UserRows: FC = () => {
  const { userState, formState } = useContext(UsersState)
  const { users, isLoading, rowsPerPage, page } = userState

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
        users
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((user, i) =>
            formState.currentKey === i ? (
              <Forms type={formState.type} user={user} key={i} />
            ) : (
              <TableRow key={i}>
                <TableCell>
                  <IconButton onClick={onClick('edit', i)}>
                    <Edit />
                  </IconButton>
                  <IconButton onClick={onClick('delete', i)}>
                    <Delete />
                  </IconButton>
                </TableCell>
                <TableCell align="right">{user.firstname}</TableCell>
                <TableCell align="right">{user.lastname}</TableCell>
                <TableCell align="right">{user.type}</TableCell>
                <TableCell align="right">{user.licenseId}</TableCell>
                <TableCell align="right">
                  {formatDate(user.dateCreated)}
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

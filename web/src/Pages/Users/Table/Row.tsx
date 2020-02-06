import React, { FC, useContext } from 'react'
import { TableRow, TableCell, IconButton, Checkbox } from '@material-ui/core'
import { Edit, Delete, Print } from '@material-ui/icons'
import { UsersState } from 'State'
import { observer } from 'mobx-react-lite'
import TableProgressBar from 'Components/TableProgressBar'
import Forms from './Forms'
import { FormState } from 'type'
import { ModalState } from 'State/ModalState'
import Axios from 'axios'

const UserRows: FC = () => {
  const { userState, formState, fetchUsers } = useContext(UsersState)
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

  const onActiveChange = (id: string) => async () => {
    // console.log(id)
    const { data } = await Axios.put('/user/toggle-active', { id })
    if (data.success) fetchUsers()
  }

  const { setModalOpen } = useContext(ModalState)

  if (isLoading) return <TableProgressBar />
  return (
    <>
      {users.length !== 0 ? (
        users.slice(totalRowsPerPage, totalUsersKey).map((user, i) =>
          formState.currentKey === i ? (
            <Forms type={formState.type} user={user} key={i} />
          ) : (
            <TableRow key={i}>
              <TableCell align="left">
                <Checkbox
                  checked={user.active}
                  onChange={onActiveChange(user.id)}
                  value="primary"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              </TableCell>
              <TableCell align="left">{user.schoolID}</TableCell>
              <TableCell align="left">{user.firstname}</TableCell>
              <TableCell align="left">{user.lastname}</TableCell>
              <TableCell align="left">{user.type}</TableCell>
              <TableCell align="left">{formatDate(user.dateCreated)}</TableCell>
              <TableCell align="right">
                <IconButton size="small" onClick={onClick('edit', i)}>
                  <Edit />
                </IconButton>
                <IconButton size="small" onClick={onClick('delete', i)}>
                  <Delete />
                </IconButton>
                <IconButton
                  size="small"
                  onClick={() => setModalOpen(true, user.id)}
                >
                  <Print />
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

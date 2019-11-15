import React, { FC, useContext, useState } from 'react'
import { TableRow, TableCell, IconButton } from '@material-ui/core'
import { Edit, Delete, Print } from '@material-ui/icons'
import { UsersState } from 'State'
import { observer } from 'mobx-react-lite'
import TableProgressBar from 'Components/Common/TableProgressBar'
import Forms from './Forms'
import { FormState } from 'type'
import ModalQR from './ModalQR'

const UserRows: FC = () => {
  const { userState, formState } = useContext(UsersState)
  const { users, isLoading, rowsPerPage, page } = userState
  const totalRowsPerPage = page * rowsPerPage
  const totalUsersKey = page * rowsPerPage + rowsPerPage
  const [modalOpen, setModalOpen] = useState(false)

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
              <TableCell size="small" align="left">
                {user.licenseId}
              </TableCell>
              <TableCell size="small" align="left">
                {user.firstname}
              </TableCell>
              <TableCell size="small" align="left">
                {user.lastname}
              </TableCell>
              <TableCell size="small" align="left">
                {user.type}
              </TableCell>
              <TableCell size="small" align="left">
                {formatDate(user.dateCreated)}
              </TableCell>
              <TableCell size="small" align="right">
                <IconButton onClick={onClick('edit', i)}>
                  <Edit />
                </IconButton>
                <IconButton onClick={onClick('delete', i)}>
                  <Delete />
                </IconButton>
                <IconButton onClick={() => setModalOpen(true)}>
                  <Print />
                </IconButton>
                <ModalQR
                  modalOpen={modalOpen}
                  setModalOpen={setModalOpen}
                  id={user.id}
                />
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

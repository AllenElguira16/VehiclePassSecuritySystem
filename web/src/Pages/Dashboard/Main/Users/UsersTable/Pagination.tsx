import React, { FC, useState, ChangeEvent, useContext } from 'react'
import { TablePagination } from '@material-ui/core'
import { UsersState } from '../state'
import { observer } from 'mobx-react-lite'

const Pagination: FC = () => {
  const { userState } = useContext(UsersState)

  const handleChangePage = (event: unknown, newPage: number) => {
    userState.page = newPage
  }

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    userState.rowsPerPage = +event.target.value
    userState.page = 0
  }

  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 25]}
      // component="div"
      count={userState.users.length}
      rowsPerPage={userState.rowsPerPage}
      page={userState.page}
      backIconButtonProps={{
        'aria-label': 'previous page',
      }}
      nextIconButtonProps={{
        'aria-label': 'next page',
      }}
      onChangePage={handleChangePage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />
  )
}

export default observer(Pagination)

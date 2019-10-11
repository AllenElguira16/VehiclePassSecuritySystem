import React, { FC, useEffect, useContext } from 'react'
import { Paper } from '@material-ui/core'
import { UsersState } from './state'
import { observer } from 'mobx-react-lite'
import UsersTable from './UsersTable'
import UsersForm from './UsersForm';

const Users: FC = () => {
  const { fetchUsers } = useContext(UsersState)

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  return (
    <Paper>
      <UsersForm />
      <UsersTable />
    </Paper>
  )
}

export default observer(Users)

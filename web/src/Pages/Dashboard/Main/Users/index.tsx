import React, { FC, useEffect, useContext } from 'react'
import { Paper, Table, TableBody } from '@material-ui/core'
import { UsersState } from './state'
import { observer } from 'mobx-react-lite'
// import UsersTable from './UsersTable/index'
// import UsersForm from './UsersTable/Forms'
import TableHeader from './UsersTable/TableHeader'
import UserRows from './UsersTable/UserRows'
import ModalAlert from 'Components/Common/ModalAlert'
import Forms from './UsersTable/Forms'
import Header from './Header'
import Pagination from './UsersTable/Pagination'

const Users: FC = () => {
  // const {  } = useContext(UsersTableState)
  const { formState, toggleAlert, fetchUsers, userState } = useContext(
    UsersState,
  )

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  const toggleAddForm = (): boolean => {
    // console.log( && userState.keyToEdit )
    return formState.isOpen && userState.keyToEdit === null
  }

  return (
    <Paper>
      <Header />
      <Table size="small">
        <TableHeader />
        <TableBody>
          {toggleAddForm() && <Forms type="add" />}
          <UserRows />
          <Pagination />
        </TableBody>
      </Table>
      <ModalAlert
        open={formState.Alert.isOpen}
        onClose={() => toggleAlert('success', '')}
        type={formState.Alert.type}
      >
        {formState.Alert.msg}
      </ModalAlert>
    </Paper>
  )
}

export default observer(Users)

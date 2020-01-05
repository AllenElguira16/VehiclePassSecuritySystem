import React, { FC, useContext, useEffect } from 'react'
import { HistoryState } from 'App/State'
import Header from './Header'
import { TableBody, Table as MaterialTable } from '@material-ui/core'
import Pagination from './Pagination'
import Row from './Row'
// import Forms from './Forms'
import { observer } from 'mobx-react-lite'

const Table: FC = () => {
  // const { formState, fetchUsers } = useContext(UsersState)
  const { fetchHistories } = useContext(HistoryState)

  useEffect(() => {
    fetchHistories()
  }, [fetchHistories])

  // const toggleAddForm = (): boolean => {
  //   return formState.isOpen && formState.currentKey === null
  // }

  return (
    <MaterialTable size="small">
      <Header />
      <TableBody>
        <Row />
        {/* {toggleAddForm() && <Forms type="add" />} */}
        <Pagination />
      </TableBody>
    </MaterialTable>
  )
}

export default observer(Table)

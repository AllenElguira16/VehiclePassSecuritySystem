import React, { FC, ChangeEvent, useContext } from 'react'
import { TablePagination, TableRow } from '@material-ui/core'
import { HistoryState } from 'State'
import { observer } from 'mobx-react-lite'

const Pagination: FC = () => {
  const { historyState } = useContext(HistoryState)

  const handleChangePage = (event: unknown, newPage: number) => {
    historyState.page = newPage
  }

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    historyState.rowsPerPage = +event.target.value
    historyState.page = 0
  }

  return (
    <TableRow>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        // component="div"
        count={historyState.histories.length}
        rowsPerPage={historyState.rowsPerPage}
        page={historyState.page}
        backIconButtonProps={{
          'aria-label': 'previous page',
        }}
        nextIconButtonProps={{
          'aria-label': 'next page',
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </TableRow>
  )
}

export default observer(Pagination)

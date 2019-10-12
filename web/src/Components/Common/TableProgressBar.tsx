import React, { FC } from 'react'
import { TableRow, TableCell, CircularProgress } from '@material-ui/core'

const TableProgressBar: FC = () => (
  <TableRow>
    <TableCell align="center" colSpan={5}>
      <CircularProgress />
    </TableCell>
  </TableRow>
)

export default TableProgressBar

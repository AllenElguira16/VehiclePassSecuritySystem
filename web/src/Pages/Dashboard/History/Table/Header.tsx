import React, { FC, useContext } from 'react'
import {
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
} from '@material-ui/core'
import { History } from 'type'
// import { UsersState } from 'State'
import { observer } from 'mobx-react-lite'
import { HistoryState } from 'State'

type Key = Array<keyof Omit<History, 'id'>>

const TableHeader: FC = () => {
  const { handleSort, checkSortType, isFormOpen } = useContext(HistoryState)
  const key: Key = ['type', 'msg', 'dateCreated']
  const lists = ['Type', 'Message', 'Date']

  return (
    <TableHead>
      <TableRow>
        {lists.map((list, i) => (
          <TableCell key={i} align="left">
            <TableSortLabel
              onClick={() => handleSort(key[i])}
              direction={checkSortType(key[i])}
              disabled={isFormOpen()}
              active={!isFormOpen()}
            >
              {list}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell align="right">Actions</TableCell>
      </TableRow>
    </TableHead>
  )
}

export default observer(TableHeader)

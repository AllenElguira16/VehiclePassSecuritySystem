import React, { FC, useContext } from 'react'
import {
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
} from '@material-ui/core'
import { User } from 'type'
import { UsersState } from 'State'
import { observer } from 'mobx-react-lite'

type Key = Array<keyof Omit<User, 'id'>>

const TableHeader: FC = () => {
  const { handleSort, checkSortType, isFormOpen } = useContext(UsersState)
  const key: Key = [
    'schoolID',
    'firstname',
    'lastname',
    'active',
    'type',
    'dateCreated',
  ]
  const lists = ['School ID', 'Firstname', 'Lastname', 'Status', 'Type', 'Date']

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

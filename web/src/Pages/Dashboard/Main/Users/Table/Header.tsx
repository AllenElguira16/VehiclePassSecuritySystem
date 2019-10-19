import React, { FC, useContext } from 'react'
import {
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
} from '@material-ui/core'
import { UsersTableHeader } from 'type'
import { UsersState } from './state'
import { observer } from 'mobx-react-lite'

const TableHeader: FC = () => {
  const { handleSort, checkSortType, isFormOpen } = useContext(UsersState)
  const lists: UsersTableHeader[] = [
    {
      key: 'firstname',
      name: 'Firstname',
    },
    {
      key: 'lastname',
      name: 'Lastname',
    },
    {
      key: 'type',
      name: 'Type',
    },
    {
      key: 'licenseId',
      name: 'License ID',
    },
    {
      key: 'dateCreated',
      name: 'Date Created',
    },
  ]

  return (
    <TableHead>
      <TableRow>
        <TableCell>Actions</TableCell>
        {lists.map(tableHeader => (
          <TableCell key={tableHeader.key} align="right">
            <TableSortLabel
              onClick={() => handleSort(tableHeader.key)}
              direction={checkSortType(tableHeader.key)}
              disabled={isFormOpen()}
              active={!isFormOpen()}
            >
              {tableHeader.name}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export default observer(TableHeader)

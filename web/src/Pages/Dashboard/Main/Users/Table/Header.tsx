import React, { FC, useContext } from 'react'
import {
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
} from '@material-ui/core'
import { User } from 'type'
import { UsersState } from './state'
import { observer } from 'mobx-react-lite'

type Key = Array<keyof Omit<User, 'id'>>

const TableHeader: FC = () => {
  const { handleSort, checkSortType, isFormOpen } = useContext(UsersState)
  const key: Key = ['licenseId', 'firstname', 'lastname', 'type', 'dateCreated']
  const lists = ['License ID', 'Firstname', 'Lastname', 'Type', 'Date Created']

  return (
    <TableHead>
      <TableRow>
        <TableCell>Actions</TableCell>
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
      </TableRow>
    </TableHead>
  )
}

export default observer(TableHeader)

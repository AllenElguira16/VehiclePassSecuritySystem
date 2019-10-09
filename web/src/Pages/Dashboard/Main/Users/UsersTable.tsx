import React, { FC, useContext } from 'react'
// import { TableBody, TableRow, TableCell, CircularProgress, Table, TableHead, TableSortLabel } from '@material-ui/core'
// import { UsersState } from './state'
import MaterialTable from 'material-table'
import { observer } from 'mobx-react-lite'
// import { UsersTableHeader } from 'type'

const UsersTable: FC = () => {
  // const { userState, handleSort } = useContext(UsersState)
  // const formatDate = (date: Date | null): string => {
  //   return new Date(date as Date).toLocaleDateString()
  // }
  // const lists: UsersTableHeader[] = [
  //   {
  //     key: 'userId',
  //     name: 'UserID',
  //   },
  //   {
  //     key: 'firstname',
  //     name: 'Firstname',
  //   },
  //   {
  //     key: 'lastname',
  //     name: 'Lastname',
  //   },
  //   {
  //     key: 'dateCreated',
  //     name: 'Date Created',
  //   },
  // ]
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
      },
    ],
    data: [
      { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
      {
        name: 'Zerya Betül',
        surname: 'Baran',
        birthYear: 2017,
        birthCity: 34,
      },
    ],
  })
  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns as any}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve()
              const data = [...state.data]
              data.push(newData)
              setState({ ...state, data })
            }, 600)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve()
              const data = [...state.data]
              data[data.indexOf(oldData as any)] = newData
              setState({ ...state, data })
            }, 600)
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve()
              const data = [...state.data]
              data.splice(data.indexOf(oldData), 1)
              setState({ ...state, data })
            }, 600)
          }),
      }}
    />
  )
  // return (
  //   <Table>
  //     <TableHead>
  //       <TableRow>
  //         {lists.map(tableHeader => (
  //           <TableCell key={tableHeader.key}>
  //             <TableSortLabel onClick={() => handleSort(tableHeader.key)}>{tableHeader.name}</TableSortLabel>
  //           </TableCell>
  //         ))}
  //       </TableRow>
  //     </TableHead>
  //     <TableBody>
  //       {!userState.isLoading ? (
  //         userState.users.map((user, i) => (
  //           <TableRow key={i}>
  //             <TableCell>{user.userId}</TableCell>
  //             <TableCell>{user.firstname}</TableCell>
  //             <TableCell>{user.lastname}</TableCell>
  //             <TableCell>{formatDate(user.dateCreated)}</TableCell>
  //           </TableRow>
  //         ))
  //       ) : (
  //         <TableRow>
  //           <TableCell align="center" colSpan={5}>
  //             <CircularProgress />
  //           </TableCell>
  //         </TableRow>
  //       )}
  //     </TableBody>
  //   </Table>
  // )
}

export default observer(UsersTable)

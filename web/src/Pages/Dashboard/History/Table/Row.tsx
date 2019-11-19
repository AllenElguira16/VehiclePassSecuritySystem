import React, { FC, useContext } from 'react'
import { TableRow, TableCell, IconButton } from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import { HistoryState } from 'State'
import { observer } from 'mobx-react-lite'
import TableProgressBar from 'Components/Common/TableProgressBar'
import Forms from './Forms'
import { HistoryFormState } from 'type'
// import ModalQR from './ModalQR'

const UserRows: FC = () => {
  const { historyState, formState } = useContext(HistoryState)
  const { histories, isLoading, rowsPerPage, page } = historyState
  const totalRowsPerPage = page * rowsPerPage
  const totalUsersKey = page * rowsPerPage + rowsPerPage
  // const { users, isLoading, rowsPerPage, page } = userState
  // const [modalOpen, setModalOpen] = useState(false)

  const formatDate = (date: Date | null): string => {
    return new Date(date as Date).toLocaleDateString()
  }

  const onClick = (type: HistoryFormState['type'], index: number) => () => {
    formState.type = type
    formState.currentKey = index
  }

  if (isLoading) return <TableProgressBar />
  return (
    <>
      {histories.length !== 0 ? (
        histories.slice(totalRowsPerPage, totalUsersKey).map((history, i) =>
          formState.currentKey === i ? (
            <Forms type={formState.type} history={history} key={i} />
          ) : (
            <TableRow key={i}>
              <TableCell align="left">{history.type}</TableCell>
              <TableCell align="left">{history.msg}</TableCell>
              <TableCell align="left">
                {formatDate(history.dateCreated)}
              </TableCell>
              <TableCell align="right">
                <IconButton size="small" onClick={onClick('delete', i)}>
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ),
        )
      ) : (
        <TableRow>
          <TableCell colSpan={6} align="center">
            No Records for Users
          </TableCell>
        </TableRow>
      )}
    </>
  )
}

export default observer(UserRows)

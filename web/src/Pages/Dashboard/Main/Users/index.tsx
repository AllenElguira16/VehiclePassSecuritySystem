import React, { FC } from 'react'
import { Paper } from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import Header from './Header'
import Table from './Table'
import Alert from './Alert'

const Users: FC = () => {
  return (
    <>
      <Paper>
        <Header />
        <Table />
      </Paper>
      <Alert />
    </>
  )
}

export default observer(Users)

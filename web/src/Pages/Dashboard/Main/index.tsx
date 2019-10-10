import React, { FC } from 'react'
import { useStyles } from 'styles'
import { Route } from 'react-router-dom'
import Users from './Users'

const Main: FC = () => {
  const styles = useStyles()

  return (
    <>
      <Route path="/dashboard/users" component={Users} />
    </>
  )
}

export default Main

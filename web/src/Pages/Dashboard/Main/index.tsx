import React, { FC } from 'react'
import { Route } from 'react-router-dom'
import Users from './Users'
import Home from './Home'

const Main: FC = () => {
  return (
    <>
      <Route exact path="/dashboard" component={Home} />
      <Route exact path="/dashboard/users" component={Users} />
    </>
  )
}

export default Main

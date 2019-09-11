// Libraries & Components
import React, { FC, useEffect, useContext } from 'react'
import { Table } from 'reactstrap'
import { Loader } from '@Components'
import { observer } from 'mobx-react-lite'
// Local Imports
import { User } from 'types'
import { AppStore } from 'Store'
import Form from './Form'
import Settings from './Settings'
import Header from './Header'
import TableHeader from './TableHeader'

const Employee: FC = observer(() => {
  const { UserContentState, fetchUsers } = useContext(AppStore)
  const { isLoading, users } = UserContentState
  //
  useEffect(() => {
    fetchUsers()
  }, [UserContentState, fetchUsers])

  const formatDate = (date: Date | null): string => {
    return new Date(date as Date).toLocaleDateString()
  }
  return (
    <>
      <Header />
      <Table striped responsive size="sm">
        <tbody>
          <TableHeader />
          {!isLoading && users.length !== 0 ? (
            users.map((user: User, i: number) => (
              <tr key={i} style={{ cursor: 'pointer' }}>
                <td className="align-middle">{user.userId}</td>
                <td className="align-middle">{user.firstname}</td>
                <td className="align-middle">{user.lastname}</td>
                <td className="align-middle">{formatDate(user.dateCreated)}</td>
                <Settings user={user} />
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center">
                {isLoading ? <Loader></Loader> : <em>Empty</em>}
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      <Form></Form>
    </>
  )
})

export default Employee

import React, { FC, useContext, useState, FormEvent } from 'react'
import { Input, Loader } from '@Components'
import { AppStore } from 'Store'
import { ListGroup, Card, Button, ListGroupItem, FormGroup } from 'reactstrap'
import { observer } from 'mobx-react-lite'
import { User } from 'types'

const SearchUser: FC = observer(() => {
  const { fetchUserID, VehiclesFormComponentState } = useContext(AppStore)
  const { vehicles } = VehiclesFormComponentState
  const [isTyping, setTypingValue] = useState(false)
  const [isLoading, setLoading] = useState(true)
  const [users, setUsers] = useState<User[]>([])

  const onSearch = async ({ currentTarget }: FormEvent<HTMLInputElement>) => {
    setLoading(true)
    VehiclesFormComponentState.vehicles = {
      ...vehicles,
      userId: currentTarget.value,
    }
    setTypingValue(currentTarget.value.length !== 0)
    setUsers(await fetchUserID(currentTarget.value))
    setLoading(false)
  }

  return (
    <>
      <FormGroup className="position-relative">
        <Input type="text" placeholder="User ID" name="userId" onChange={onSearch} value={vehicles.userId} />
        {isTyping && (
          <Card className="position-absolute w-100" style={{ zIndex: 1 }}>
            <ListGroup className="p-0">
              {users.length ? (
                users.map((user, i) => (
                  <ListGroupItem tag={Button} key={i}>
                    {user.userId}
                  </ListGroupItem>
                ))
              ) : (
                <ListGroupItem>{!isLoading ? 'Empty' : <Loader />}</ListGroupItem>
              )}
            </ListGroup>
          </Card>
        )}
      </FormGroup>
    </>
  )
})

export default SearchUser

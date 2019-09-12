import React, { FC, useContext, useState, FormEvent } from 'react'
import { Loader } from '@Components'
import { AppStore } from 'Store'
import { Input, ListGroup, Card, ListGroupItem, FormGroup } from 'reactstrap'
import { observer } from 'mobx-react-lite'

const SearchUser: FC = observer(() => {
  const { fetchUsers, VehiclesFormComponentState, UserContentState } = useContext(AppStore)
  const { vehicles } = VehiclesFormComponentState
  const { users } = UserContentState
  const [isFocused, setFocus] = useState(false)
  const [isLoading, setLoading] = useState(true)
  let timeout: NodeJS.Timeout

  const onSearch = async ({ currentTarget }: FormEvent<HTMLInputElement>) => {
    setLoading(true)
    VehiclesFormComponentState.vehicles = {
      ...vehicles,
      userId: currentTarget.value,
    }
    await fetchUsers({ userId: currentTarget.value })
    setLoading(false)
  }

  const onFocus = async () => {
    if (timeout) clearTimeout(timeout)
    setFocus(true)
    setLoading(true)
    await fetchUsers()
    setLoading(false)
  }

  const onBlur = () => {
    timeout = setTimeout(() => {
      setFocus(false)
    }, 200)
  }

  const setAsUserIDInput = (userId: string) => {
    VehiclesFormComponentState.vehicles = {
      ...vehicles,
      userId,
    }
    setFocus(false)
  }

  return (
    <>
      <FormGroup className="position-relative" onFocus={onFocus} onBlur={onBlur}>
        <Input
          type="text"
          placeholder="User ID"
          name="userId"
          onChange={onSearch}
          value={vehicles.userId}
          autoComplete="off"
        />
        {isFocused && (
          <Card className="position-absolute w-100" style={{ zIndex: 1 }}>
            <ListGroup className="p-0">
              {users.length ? (
                users.map((user, i) => (
                  <ListGroupItem
                    onClick={() => setAsUserIDInput(user.userId)}
                    tag="button"
                    type="button"
                    key={i}
                    action
                  >
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

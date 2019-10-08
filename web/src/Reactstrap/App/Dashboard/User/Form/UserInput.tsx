import React, { FC, FormEvent, useContext } from 'react'
import { Row, Col } from 'reactstrap'
import { observer } from 'mobx-react-lite'
import { AppStore } from 'Reactstrap/Store'
import { Input } from 'Reactstrap/@Components'

interface Props {
  onInputChange(e: FormEvent<HTMLInputElement>): void
}

const UserInput: FC<Props> = observer(({ onInputChange }) => {
  const { UserFormComponentState } = useContext(AppStore)
  return (
    <>
      <Input
        type="text"
        placeholder="User ID"
        name="userId"
        onChange={onInputChange}
        value={UserFormComponentState.userInput.userId}
      />
      <Row form={true} className="align-items-center">
        <Col>
          <Input
            type="text"
            placeholder="Firstname"
            name="firstname"
            onChange={onInputChange}
            value={UserFormComponentState.userInput.firstname}
          />
        </Col>
        <Col>
          <Input
            type="text"
            placeholder="Lastname"
            name="lastname"
            onChange={onInputChange}
            value={UserFormComponentState.userInput.lastname}
          />
        </Col>
      </Row>
    </>
  )
})

export default UserInput
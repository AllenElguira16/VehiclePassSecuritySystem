import React, { FC, useContext } from 'react'
import { Col, Row, Button } from 'reactstrap'
import Search from './Search'
import { AppStore } from 'Store'
// import AddUser from "./AddUser";

const Header: FC = () => {
  const { UserFormComponentState, openUserForm } = useContext(AppStore)

  const openForm = () => {
    openUserForm('create', 'Add User', UserFormComponentState.userInput)
  }

  return (
    <Row>
      <Col>
        <Search />
      </Col>
      <Col>
        <Button onClick={openForm} color="primary" className="float-right">
          Add
        </Button>
      </Col>
    </Row>
  )
}

export default Header

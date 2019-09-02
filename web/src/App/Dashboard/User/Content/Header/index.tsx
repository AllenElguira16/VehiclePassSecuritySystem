import React, { FC, useContext } from "react";
import { Col, Row, Button } from "reactstrap";
import Search from "./Search";
import { AppStore } from "store";
// import AddUser from "./AddUser";

const Header: FC = () => {
  const { UserFormComponentState, openFormInput } = useContext(AppStore);

  const openForm = () => {
    openFormInput("create", "Add User", UserFormComponentState.userInput);
  };

  return (
    <Row>
      <Col lg="4">
        <Search />
      </Col>
      <Col>
        <Button onClick={openForm} color="primary" className="float-right">
          Add
        </Button>
      </Col>
    </Row>
  );
};

export default Header;

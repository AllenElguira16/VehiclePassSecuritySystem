import React, { FC, useContext } from "react";
import { Col, Row, Button } from "reactstrap";
import Search from "./Search";
import { AppStore } from "store";
// import AddUser from "./AddUser";

const Header: FC = () => {
  const { UserFormComponentState } = useContext(AppStore);
  const toggler = () => {
    UserFormComponentState.toggle = true;
    UserFormComponentState.title = "Add User";
    UserFormComponentState.type = "create";
  };
  return (
    <Row>
      <Col lg="4">
        <Search />
      </Col>
      <Col>
        <Button onClick={toggler} color="primary" className="float-right">
          Add
        </Button>
      </Col>
    </Row>
  );
};

export default Header;

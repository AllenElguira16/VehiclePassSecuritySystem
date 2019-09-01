import React, { FC } from "react";
import { Col, Row } from "reactstrap";
import Search from "./Search";
import AddUser from "./AddUser";

const Header: FC = () => {
  return (
    <Row>
      <Col lg="4">
        <Search />
      </Col>
      <Col>
        <AddUser />
      </Col>
    </Row>
  );
};

export default Header;

import React, { FC, useContext } from "react";
import { Col, Row, Button } from "reactstrap";
import Search from "./Search";
import { AppStore } from "Store";
// import AddUser from "./AddUser";

const Header: FC = () => {
  const { VehiclesFormComponentState, openVehicleForm } = useContext(AppStore);

  const openForm = () => {
    openVehicleForm("create", "Add User", VehiclesFormComponentState.vehicles);
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

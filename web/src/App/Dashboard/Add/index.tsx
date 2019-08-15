import React, { useState } from "react";
import Input from "Components/Input";
import { Row, Button, Col, Form, Alert } from "reactstrap";
import QRCodeModal from "./QRCodeModal";
import Axios from "axios";

const Add: React.FC = () => {
  const [error, setError] = useState('');
  const [user, setUser] = useState({
    id: "",
    employeeId: "",
    firstname: "",
    lastname: ""
  });
  let [modalToggle, setModalToggle] = useState(false);

  const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    let { name, value } = e.currentTarget;
    setUser({ ...user, [name]: value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let { data } = await Axios.post("/user/add", user);
    if (!data.error) {
      setUser({ ...user, id: data.id });
      setModalToggle(true);
    } else if(data.error){
      setError(data.error);
    }
  };

  const modalToggler = () => {
    setModalToggle(!modalToggle);
  };

  return (
    <>
      <header className="h4">Add Employee</header>
      <main>
        <Form onSubmit={onSubmit}>
          <Input
            type="text"
            placeholder="Employee ID"
            name="employeeId"
            onChange={onInputChange}
            value={user.employeeId}
          />
          <Row form={true}>
            <Col>
              <Input
                type="text"
                name="firstname"
                placeholder="Firstname"
                onChange={onInputChange}
                value={user.firstname}
              />
            </Col>
            <Col>
              <Input
                type="text"
                name="lastname"
                placeholder="Lastname"
                onChange={onInputChange}
                value={user.lastname}
              />
            </Col>
          </Row>
          {error.length !== 0 && <Alert color="danger">{error}</Alert>}
          <Button type="submit" color="primary" className="btn-raised">
            Add
          </Button>
        </Form>
        <QRCodeModal
          value={user.id}
          toggle={modalToggle}
          toggler={modalToggler}
        />
      </main>
    </>
  );
};

export default Add;

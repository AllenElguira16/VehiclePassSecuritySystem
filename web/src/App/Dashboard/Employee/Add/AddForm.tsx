import React, { useState } from "react";
import { Row, Col, Alert, FormGroup, Button, Form } from "reactstrap";
import Input from "Components/Input";
import Axios from "axios";
// import { error } from "console";

const AddForm: React.FC = () => {
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    id: "",
    employeeId: "",
    firstname: "",
    lastname: ""
  });

  const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    let { name, value } = e.currentTarget;
    setUser({ ...user, [name]: value });
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let { data } = await Axios.post("/employee/add", user);
    if (!data.error) {
      setUser({ ...user, id: data.id });
      // setModalToggle(true);
    } else if (data.error) {
      setError(data.error);
    }
  };
  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="text"
        placeholder="Employee ID"
        name="employeeId"
        onChange={onInputChange}
        value={user.employeeId}
      />
      <Row form={true} className="align-items-center">
        <Col>
          <Input
            type="text"
            placeholder="Firstname"
            name="firstname"
            onChange={onInputChange}
            value={user.firstname}
          />
        </Col>
        <Col>
          <Input
            type="text"
            placeholder="Lastname"
            name="lastname"
            onChange={onInputChange}
            value={user.lastname}
          />
        </Col>
      </Row>
      {error.length !== 0 && <Alert color="danger">{error}</Alert>}
      <FormGroup>
        <Button
          type="submit"
          color="outline-info"
          className="align-items-end btn-raised d-flex"
        >
          <i className="material-icons pr-2">add</i>
          <span>Add</span>
        </Button>
      </FormGroup>
    </Form>
  );
};

export default AddForm;

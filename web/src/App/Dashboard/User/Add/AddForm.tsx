import React, { useState } from "react";
import { Row, Col, FormGroup, Button, Form } from "reactstrap";
import Alert from "Components/Alert";
import Input from "Components/Input";
import Axios from "axios";
// import { error } from "console";

interface Props {
  // onSuccess(id: string): void
}

const AddForm: React.FC<Props> = props => {
  const [response, setResponse] = useState<{
    type: "success" | "error";
    msg: string;
  }>({
    type: "success",
    msg: ""
  });
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
      setResponse({ type: "success", msg: "Added Successfully" });
    } else if (data.error) {
      setResponse({ type: "error", msg: data.error });
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
      {response.msg.length !== 0 && (
        <Alert type={response.type}>{response.msg}</Alert>
      )}
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

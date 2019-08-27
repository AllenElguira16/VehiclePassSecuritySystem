import React from "react";
import { Row, Col, Form, ModalBody } from "reactstrap";
import Alert from "Components/Alert";
import Input from "Components/Input";
import { AddFormProps } from "types";

const AddForm: React.FC<AddFormProps> = props => {
  const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    let { name, value } = e.currentTarget;
    props.setUser({ ...props.user, [name]: value });
  };

  return (
    <Form onSubmit={props.onSubmit}>
      <ModalBody>
        <Input
          type="text"
          placeholder="Employee ID"
          name="userId"
          onChange={onInputChange}
          value={props.user.userId}
        />
        <Row form={true} className="align-items-center">
          <Col>
            <Input
              type="text"
              placeholder="Firstname"
              name="firstname"
              onChange={onInputChange}
              value={props.user.firstname}
            />
          </Col>
          <Col>
            <Input
              type="text"
              placeholder="Lastname"
              name="lastname"
              onChange={onInputChange}
              value={props.user.lastname}
            />
          </Col>
        </Row>
        {props.response.msg.length !== 0 && (
          <Alert type={props.response.type}>{props.response.msg}</Alert>
        )}
        {props.children}
      </ModalBody>
    </Form>
  );
};

export default AddForm;

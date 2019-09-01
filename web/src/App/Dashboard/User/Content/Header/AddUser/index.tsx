import React, { FC, useState, FormEvent } from "react";
import { Row, Col, Alert, Button } from "reactstrap";
import { UserInput, Response } from "types";
import Axios from "axios";
import FormModal from "@Components/FormModal";
import Input from "@Components/Input";

const Add: FC = () => {
  const [userInput, setUserInput] = useState<UserInput>({
    id: "",
    firstname: "",
    lastname: "",
    userId: ""
  });
  //
  const [response, setResponse] = useState<Response>({
    type: "success",
    msg: ""
  });
  //
  const onInputChange = (event: FormEvent<HTMLInputElement>) => {
    let { name, value } = event.currentTarget;
    setUserInput({ ...userInput, [name]: value });
  };

  //
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data } = await Axios.post("/user", userInput);
    if (!data.error) setResponse({ type: "success", msg: data.success });
    else if (data.error) setResponse({ type: "error", msg: data.error });
  };

  const [toggle, setToggleValue] = useState(false);
  // Modal toggle
  const toggler = () => {
    setToggleValue(!toggle);
  };

  return (
    <>
      <Button onClick={toggler} color="primary" className="float-right">
        Add
      </Button>
      <FormModal
        title="Add User"
        onSubmit={onSubmit}
        toggle={toggle}
        toggler={toggler}
      >
        <Input
          type="text"
          placeholder="Employee ID"
          name="userId"
          onChange={onInputChange}
          value={userInput.userId}
        />
        <Row form={true} className="align-items-center">
          <Col>
            <Input
              type="text"
              placeholder="Firstname"
              name="firstname"
              onChange={onInputChange}
              value={userInput.firstname}
            />
          </Col>
          <Col>
            <Input
              type="text"
              placeholder="Lastname"
              name="lastname"
              onChange={onInputChange}
              value={userInput.lastname}
            />
          </Col>
        </Row>
        {response.msg.length !== 0 && (
          <Alert type={response.type}>{response.msg}</Alert>
        )}
      </FormModal>
    </>
  );
};

export default Add;

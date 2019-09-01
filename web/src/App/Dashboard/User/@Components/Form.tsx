import React, { useContext, FormEvent, useState } from "react";
import { FormModal, Input } from "@Components";
import { observer } from "mobx-react-lite";
import { AppStore } from "store";
import { Row, Col, UncontrolledAlert } from "reactstrap";
import Axios from "axios";
import { Response } from "types";

const Form = observer(() => {
  const { UserFormComponentState } = useContext(AppStore);
  const toggler = () => {
    UserFormComponentState.toggle = !UserFormComponentState.toggle;
  };
  const onInputChange = (event: FormEvent<HTMLInputElement>) => {
    let { name, value } = event.currentTarget;
    UserFormComponentState.userInput = {
      ...UserFormComponentState.userInput,
      [name]: value
    };
  };
  const [response, setResponse] = useState<Response>({
    msg: "",
    type: "danger"
  });
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let response;
    if (UserFormComponentState.type === "create")
      response = await Axios.post("/user", UserFormComponentState.userInput);
    else if (UserFormComponentState.type === "update")
      response = await Axios.put("/user", UserFormComponentState.userInput);
    // if (response) console.log(response.data);
    if (response) {
      if (!response.data.error)
        setResponse({ type: "success", msg: response.data.success });
      else if (response.data.error)
        setResponse({ type: "danger", msg: response.data.error });
    }
  };

  return (
    <FormModal
      title={UserFormComponentState.title}
      onSubmit={onSubmit}
      toggle={UserFormComponentState.toggle}
      toggler={toggler}
    >
      <Input
        type="text"
        placeholder="Employee ID"
        name="userId"
        onChange={onInputChange}
        value={UserFormComponentState.userInput.userId}
      />
      <Row form={true} className="align-items-center">
        <Col>
          <Input
            type="text"
            placeholder="Firstname"
            name="firstname"
            onChange={onInputChange}
            value={UserFormComponentState.userInput.firstname}
          />
        </Col>
        <Col>
          <Input
            type="text"
            placeholder="Lastname"
            name="lastname"
            onChange={onInputChange}
            value={UserFormComponentState.userInput.lastname}
          />
        </Col>
      </Row>
      {response.msg.length !== 0 && (
        <UncontrolledAlert color={response.type}>
          {response.msg}
        </UncontrolledAlert>
      )}
    </FormModal>
  );
});

export default Form;

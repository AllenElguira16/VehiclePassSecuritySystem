import React, { useContext, FormEvent } from "react";
import { FormModal, Input } from "@Components";
import { observer } from "mobx-react-lite";
import { AppStore } from "store";
import { Row, Col } from "reactstrap";
import Axios from "axios";

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
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (UserFormComponentState.type === "create")
      console.log(await Axios.post("/user", UserFormComponentState.userInput));
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
      {/* {response.msg.length !== 0 && (
          <Alert type={response.type}>{response.msg}</Alert>
        )} */}
    </FormModal>
  );
});

export default Form;

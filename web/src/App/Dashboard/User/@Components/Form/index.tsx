import React, { useContext, FormEvent, useState } from "react";
import { FormModal, Input } from "@Components";
import { observer } from "mobx-react-lite";
import { AppStore } from "store";
import { Row, Col, UncontrolledAlert, FormGroup } from "reactstrap";
import Axios from "axios";
import { Response } from "types";
import UserInput from "./UserInput";

const Form = observer(() => {
  const { UserFormComponentState } = useContext(AppStore);
  const toggler = () => {
    UserFormComponentState.toggle = !UserFormComponentState.toggle;
    if (UserFormComponentState.toggle === false)
      UserFormComponentState.userInput = {
        id: "",
        userId: "",
        firstname: "",
        lastname: ""
      };
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
    else if (UserFormComponentState.type === "delete")
      response = await Axios.delete(
        `/user/${UserFormComponentState.userInput.id}`
      );
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
      {UserFormComponentState.type === "delete" ? (
        <FormGroup>Are you sure you want to delete?</FormGroup>
      ) : (
        <UserInput onInputChange={onInputChange} />
      )}
      {response.msg.length !== 0 && (
        <UncontrolledAlert color={response.type}>
          {response.msg}
        </UncontrolledAlert>
      )}
    </FormModal>
  );
});

export default Form;

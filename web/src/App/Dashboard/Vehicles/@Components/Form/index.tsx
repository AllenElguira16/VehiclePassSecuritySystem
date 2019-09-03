import React, { useContext, FormEvent, useState } from "react";
import { FormModal, Input } from "@Components";
import { observer } from "mobx-react-lite";
import { AppStore } from "Store";
import { Row, Col, UncontrolledAlert, FormGroup } from "reactstrap";
import Axios from "axios";
import { Response } from "types";
import UserInput from "./UserInput";

const Form = observer(() => {
  const { UserFormComponentState } = useContext(AppStore);
  let { toggle, userInput, type, title } = UserFormComponentState;
  const [response, setResponse] = useState<Response>({
    msg: "",
    type: "danger"
  });
  const toggler = () => {
    toggle = !toggle;
    if (toggle === false)
      UserFormComponentState.userInput = {
        id: "",
        userId: "",
        firstname: "",
        lastname: ""
      };
  };
  const onInputChange = (event: FormEvent<HTMLInputElement>) => {
    let { name, value } = event.currentTarget;
    userInput = {
      ...userInput,
      [name]: value
    };
  };
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let response;
    // Check form type
    if (type === "create") response = await Axios.post("/vehicles", userInput);
    else if (type === "update")
      response = await Axios.put("/vehicles", userInput);
    else if (type === "delete")
      response = await Axios.delete(`/vehicles/${userInput.id}`);
    // set response
    if (response) {
      if (!response.data.error)
        setResponse({ type: "success", msg: response.data.success });
      else if (response.data.error)
        setResponse({ type: "danger", msg: response.data.error });
    }
  };

  return (
    <FormModal
      title={title}
      onSubmit={onSubmit}
      toggle={toggle}
      toggler={toggler}
    >
      {type === "delete" ? (
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

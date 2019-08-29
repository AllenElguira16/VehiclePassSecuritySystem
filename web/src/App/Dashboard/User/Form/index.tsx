import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalFooter } from "reactstrap";
import ModalForm from "./ModalForm";
import { Response, FormProps } from "types";
import Axios from "axios";
// import QRCodeModal from "./QRCodeModal";

const Add: React.FC<FormProps> = props => {
  const [response, setResponse] = useState<Response>({
    type: "success",
    msg: ""
  });
  const toggler = () => {
    props.setToggle(!props.toggle);
    if (props.toggle === false) {
      props.setFormType("create");
      props.setUser({
        userId: "",
        firstname: "",
        lastname: ""
      });
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let response;
    if (props.type === "create")
      response = await Axios.post("/user", props.user);
    else if (props.type === "update")
      response = await Axios.put(`/user`, props.user);
    if (response) {
      if (!response.data.error) {
        setResponse({ type: "success", msg: response.data.success });
      } else if (response.data.error) {
        setResponse({ type: "error", msg: response.data.error });
      }
    }
  };

  return (
    <>
      <Button onClick={toggler} color="primary" className="btn-raised">
        Add
      </Button>
      <Modal isOpen={props.toggle} toggle={toggler}>
        <ModalHeader toggle={toggler}>Add Employee</ModalHeader>
        <ModalForm
          setUser={props.setUser}
          user={props.user}
          response={response}
          onSubmit={onSubmit}
        >
          <ModalFooter className="justify-content-between p-0">
            <Button
              type="submit"
              color="outline-info"
              className="align-items-end btn-raised d-flex"
            >
              <i className="material-icons pr-2">add</i>
              <span>{props.type}</span>
            </Button>
            <Button
              onClick={toggler}
              color="outline-danger"
              className="align-items-end btn-raised d-flex"
            >
              <i className="material-icons pr-2">close</i>
              <span>Close</span>
            </Button>
          </ModalFooter>
        </ModalForm>
      </Modal>
    </>
  );
};

export default Add;

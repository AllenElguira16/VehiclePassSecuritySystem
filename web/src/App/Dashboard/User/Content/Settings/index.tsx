import React, { FC, useState, FormEvent } from "react";
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Row,
  Col
} from "reactstrap";
import Axios from "axios";
import FormModal from "@Components/FormModal";
import { SettingsProps, UserInput } from "types";
import Input from "@Components/Input";

const Settings: FC<SettingsProps> = props => {
  const onDelete = async () => {
    await Axios.delete(`/user/${props.user.id}`);
  };

  const onEdit = async () => {
    setUserInput(props.user);
    toggler();
  };
  const [toggle, setToggle] = useState(false);
  const toggler = () => {
    setToggle(!toggle);
  };
  const [userInput, setUserInput] = useState<UserInput>({
    id: "",
    firstname: "",
    lastname: "",
    userId: ""
  });
  //
  const onInputChange = (event: FormEvent<HTMLInputElement>) => {
    let { name, value } = event.currentTarget;
    setUserInput({ ...userInput, [name]: value });
  };
  //
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await Axios.put("/user", userInput);
  };

  return (
    <>
      <UncontrolledDropdown tag="td">
        <DropdownToggle color="primary" className="d-flex">
          <i className="material-icons">settings</i>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Vehicles</DropdownItem>
          <DropdownItem onClick={onEdit}>Edit</DropdownItem>
          <DropdownItem onClick={onDelete}>Delete</DropdownItem>
        </DropdownMenu>
        <FormModal
          title="Edit User"
          toggle={toggle}
          toggler={toggler}
          onSubmit={onSubmit}
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
        </FormModal>
      </UncontrolledDropdown>
    </>
  );
};

export default Settings;

import React, { FC, useContext } from "react";
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem
} from "reactstrap";
import Axios from "axios";
import { SettingsProps } from "types";
import { observer } from "mobx-react-lite";
import { AppStore } from "store";

const Settings: FC<SettingsProps> = observer(props => {
  const { UserFormComponentState } = useContext(AppStore);
  const onDelete = async () => {
    await Axios.delete(`/user/${props.user.id}`);
  };

  const onEdit = async () => {
    UserFormComponentState.title = "Update User";
    UserFormComponentState.type = "update";
    UserFormComponentState.toggle = true;
    UserFormComponentState.userInput = props.user;
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
      </UncontrolledDropdown>
    </>
  );
});

export default Settings;

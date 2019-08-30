import React, { FC } from "react";
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem
} from "reactstrap";
import Axios from "axios";
import { SettingsProps } from "types";

const Settings: FC<SettingsProps> = props => {
  const onDelete = async () => {
    // toggle("Are you sure you want to delete?");
    await Axios.delete(`/user/${props.user.id}`);
    props.fetchData();
    // console.log(data);
  };

  const onEdit = async () => {
    props.setFormType("update");
    props.setUserInput(props.user);
    props.setFormToggle(true);
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
};

export default Settings;

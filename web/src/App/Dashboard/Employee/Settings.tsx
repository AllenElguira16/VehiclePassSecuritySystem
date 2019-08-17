import React, { FC } from "react";
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem
} from "reactstrap";

const Settings: FC = () => {
  return (
    <UncontrolledDropdown tag="td">
      <DropdownToggle color="primary" className="d-flex">
        <i className="material-icons">settings</i>
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Edit</DropdownItem>
        <DropdownItem>Delete</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default Settings;

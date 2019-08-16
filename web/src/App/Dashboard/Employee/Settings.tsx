import React, { FC } from "react";
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem
} from "reactstrap";

const Settings: FC = () => {
  return (
    <UncontrolledDropdown>
      <DropdownToggle>
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

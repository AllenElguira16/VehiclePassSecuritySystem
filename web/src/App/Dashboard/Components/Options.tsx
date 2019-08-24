import React, { FC } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import Axios from "axios";

interface Props {
  setAsLoggedInState(): void;
}

const Options: FC<Props> = Props => {
  const signOut = async () => {
    const { data } = await Axios.post("/user/logout");
    if (data.success) Props.setAsLoggedInState();
  };

  return (
    <UncontrolledDropdown nav tabIndex={-1} className="ml-auto">
      <DropdownToggle nav caret tabIndex={-1} className="vertical-centered">
        <i className="material-icons pr-2">settings</i>
        <span>Settings</span>
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Options</DropdownItem>
        <DropdownItem>Account Settings</DropdownItem>
        <DropdownItem onClick={signOut}>Sign Out</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default Options;

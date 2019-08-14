import React from "react";
import {
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";

export default () => {
  return (
    // <Navbar color="white" className="h-100">
    <Nav color="white" tabs>
      <NavItem>
        <NavLink tag={Link} to="/dashboard/add">
          Add
        </NavLink>
      </NavItem>
      <UncontrolledDropdown nav>
        <DropdownToggle nav caret>
          Settings
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Options</DropdownItem>
          <DropdownItem>Account Settings</DropdownItem>
          <DropdownItem>Sign Out</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Nav>
    // </Navbar>
  );
};

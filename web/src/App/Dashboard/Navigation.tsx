import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

export default () => {
  return (
    // <Navbar color="white" className="h-100">
    <Nav vertical color="white" className="h-100">
      <NavItem>
        <NavLink tag={Link} to="/dashboard">
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={Link} to="/dashboard/add-user">
          Add User
        </NavLink>
      </NavItem>
      {/* <NavItem>
          <NavLink tag={Link} to="/dashboard/add-user">Add User</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/dashboard/add-user">Add User</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/dashboard/add-user">Add User</NavLink>
        </NavItem> */}
      <NavItem>
        <NavLink tag={Link} to="/dashboard/sign-out">
          Sign Out
        </NavLink>
      </NavItem>
    </Nav>
    // </Navbar>
  );
};

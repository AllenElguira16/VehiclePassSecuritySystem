import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Link } from "react-router-dom";
import logo from "Assets/images/LNULogo.png";

export default () => {
  let [state, setState] = useState({
    isOpen: false
  });

  const toggle = () => {
    setState({ isOpen: !state.isOpen });
  };

  return (
    <Navbar
      color="primary"
      dark
      expand="lg"
      className="justify-content-between shadow-lg"
    >
      <div className="container">
        <NavbarBrand tag={Link} to="/" className="d-flex align-items-center">
          <img src={logo} alt="Lyceum-Northwestern University" />
          <span className="ml-2 d-none d-sm-inline">
            Vehicle Pass Security System
          </span>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/dashboard">
                Dashboard
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/vehicle-pass">
                Vehicle Pass
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/about-us">
                About Us
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};

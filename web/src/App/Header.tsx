import React, { useState } from 'react'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
import logo from 'Assets/images/LNULogo.webp'

const Header: React.FC<RouteComponentProps> = props => {
  let [state, setState] = useState({
    isOpen: false,
  })

  const toggle = () => {
    setState({ isOpen: !state.isOpen })
  }

  const isActive = (regex: RegExp | string): boolean => {
    const uriMatcher = props.location.pathname.match(regex)
    return uriMatcher !== null
  }

  return (
    <Navbar
      color="white"
      expand="lg"
      className="justify-content-between shadow-sm"
      tag="header"
      sticky="top"
      id="header"
      light
    >
      <NavbarBrand tag={Link} to="/" className="d-flex align-items-center" tabIndex={-1}>
        <img src={logo} alt="Lyceum-Northwestern University" />
        <span className="ml-2 d-none d-sm-inline">Vehicle Pass Security System</span>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={state.isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/" tabIndex={-1} active={isActive(/\/$/)}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/dashboard" tabIndex={-1} active={isActive('dashboard')}>
              Dashboard
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/vehicle-pass" tabIndex={-1} active={isActive('vehicle-pass')}>
              Vehicle Pass
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/about-us" tabIndex={-1} active={isActive('about-us')}>
              About Us
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default withRouter(Header)

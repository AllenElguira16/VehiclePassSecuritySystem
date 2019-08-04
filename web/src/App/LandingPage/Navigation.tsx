import React, { useState } from 'react'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../../Assets/images/LNULogo.png'

export default () => {
  let [state, setState] = useState({
    isOpen: false
  })
  
  const toggle = () => {
    setState({isOpen: !state.isOpen})
  }

  return (
    <Navbar color="primary" dark expand="md" className="justify-content-between shadow-lg">
      <div className="container">
        <NavbarBrand tag={Link} to="/">
          <img src={logo} alt="Lyceum-Northwestern University"/>
          <span className="ml-2">Vehicle Pass Security System</span>
        </NavbarBrand>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/avail">Avail</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/about">About Us</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  )
}
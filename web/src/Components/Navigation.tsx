import React, { useState } from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
// import logo from "Assets/images/LNULogo.webp";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  });
});

const Navigation: React.FC<RouteComponentProps> = props => {
  // let [state, setState] = useState({
  //   isOpen: false
  // });

  // const isActive = (regex: RegExp | string): boolean => {
  //   const uriMatcher = props.location.pathname.match(regex);
  //   if (uriMatcher !== null) {
  //     return true;
  //   }
  //   return false;
  // };
  const styles = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={styles.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={styles.title}>Vehicle Pass Security System</Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );

  // return (
  //   <Navbar
  //     color="primary"
  //     dark
  //     expand="lg"
  //     className="justify-content-between shadow-lg"
  //   >
  //     <Container>
  //       <NavbarBrand
  //         tag={Link}
  //         to="/"
  //         className="d-flex align-items-center"
  //         tabIndex={-1}
  //       >
  //         <img src={logo} alt="Lyceum-Northwestern University" />
  //         <span className="ml-2 d-none d-sm-inline">
  //           Vehicle Pass Security System
  //         </span>
  //       </NavbarBrand>
  //       <NavbarToggler onClick={toggle} />
  //       <Collapse isOpen={state.isOpen} navbar>
  //         <Nav className="ml-auto" navbar>
  //           <NavItem>
  //             <NavLink tag={Link} to="/" tabIndex={-1} active={isActive(/\/$/)}>
  //               Home
  //             </NavLink>
  //           </NavItem>
  //           <NavItem>
  //             <NavLink
  //               tag={Link}
  //               to="/dashboard"
  //               tabIndex={-1}
  //               active={isActive("dashboard")}
  //             >
  //               Dashboard
  //             </NavLink>
  //           </NavItem>
  //           <NavItem>
  //             <NavLink
  //               tag={Link}
  //               to="/vehicle-pass"
  //               tabIndex={-1}
  //               active={isActive("vehicle-pass")}
  //             >
  //               Vehicle Pass
  //             </NavLink>
  //           </NavItem>
  //           <NavItem>
  //             <NavLink
  //               tag={Link}
  //               to="/about-us"
  //               tabIndex={-1}
  //               active={isActive("about-us")}
  //             >
  //               About Us
  //             </NavLink>
  //           </NavItem>
  //         </Nav>
  //       </Collapse>
  //     </Container>
  //   </Navbar>
  // );
};

export default withRouter(Navigation);

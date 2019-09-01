import React, { FC } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import {
  NavLink as Link,
  withRouter,
  RouteComponentProps
} from "react-router-dom";
import Options from "./Options";

interface Props extends RouteComponentProps {
  setAsLoggedInState(): void;
}

const Navigation: FC<Props> = props => {
  return (
    <Nav tabs card>
      <NavItem>
        <NavLink
          tag={Link}
          to="/dashboard/users"
          tabIndex={-1}
          className="vertical-centered"
          activeClassName="active"
        >
          <i className="material-icons pr-2">person</i>
          <span>Employee</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          tag={Link}
          to="/dashboard/vehicles"
          tabIndex={-1}
          className="vertical-centered"
          activeClassName="active"
        >
          <i className="material-icons pr-2">directions_car</i>
          <span>Vehicles</span>
        </NavLink>
      </NavItem>
      <Options setAsLoggedInState={props.setAsLoggedInState} />
    </Nav>
  );
};

export default withRouter(Navigation);

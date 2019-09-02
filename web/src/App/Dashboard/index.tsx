import React, { useEffect, useContext } from "react";
import { Container, Card, CardBody, Col, CardHeader } from "reactstrap";
import { Route, RouteComponentProps, Redirect } from "react-router-dom";
import { Loader } from "@Components";
import { DashboardProps } from "types";
import { observer } from "mobx-react-lite";
import { AppStore } from "store";
import SignIn from "App/Dashboard/SignIn";
import Navigation from "./@Components/Navigation";
import Users from "./User";
// import Vehicles from "./Vehicles";

type Props = RouteComponentProps & DashboardProps;

const Dashboard: React.FC<Props> = observer(props => {
  const { DashboardState, getLoginState } = useContext(AppStore);
  const uriMatch = props.location.pathname.match(/dashboard$/);
  let render;

  useEffect(() => {
    const checkLoginState = async () => {
      getLoginState();
    };
    checkLoginState();
  }, [DashboardState, getLoginState]);

  if (!DashboardState.isLoading) {
    if (!DashboardState.isLoggedIn) {
      render = <Route component={SignIn} />;
    } else if (uriMatch !== null) {
      render = <Redirect to="/dashboard/users" />;
    } else {
      render = (
        <Col lg={12}>
          <Card>
            <CardHeader>
              <Navigation />
            </CardHeader>
            <CardBody>
              <Route path="/dashboard/users" component={Users} />
              {/* <Route path="/dashboard/vehicles" component={Vehicles} /> */}
            </CardBody>
          </Card>
        </Col>
      );
    }
  } else {
    render = <Loader />;
  }

  return (
    <Container fluid className="horizontal-center py-5">
      {render}
    </Container>
  );
});

export default Dashboard;

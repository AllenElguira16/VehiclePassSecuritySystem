import React, { useEffect, useCallback } from "react";
import { Container, Card, CardBody, Col, CardHeader } from "reactstrap";
import { Route, RouteComponentProps, Redirect } from "react-router-dom";
import Axios from "axios";
import { DashboardProps } from "types";
import SignIn from "App/Dashboard1/SignIn";
import Loader from "Components/Loader";
import Navigation from "./Navigation";
import Vehicles from "./Vehicles";
import Users from "./User";

type Props = RouteComponentProps & DashboardProps;

const Dashboard: React.FC<Props> = props => {
  const [isLoading, setAsLoading] = React.useState(true);
  const [isLoggedIn, setAsLoggedIn] = React.useState(false);
  const uriMatch = props.location.pathname.match(/dashboard$/);
  let render;

  const checkLoginState = useCallback(async () => {
    setAsLoading(true);
    let { data } = await Axios.get("/admin/auth");
    if (!data.error) setAsLoggedIn(true);
    else setAsLoggedIn(false);
    setAsLoading(false);
  }, []);

  useEffect(() => {
    checkLoginState();
  }, [checkLoginState]);

  if (!isLoading) {
    if (!isLoggedIn) {
      render = (
        <Route
          component={(props: RouteComponentProps) => (
            <SignIn {...props} setLoggedInState={checkLoginState} />
          )}
        />
      );
    } else if (uriMatch !== null) {
      render = <Redirect to="/dashboard/users" />;
    } else {
      render = (
        <Col lg={12}>
          <Card>
            <CardHeader>
              <Navigation setAsLoggedInState={checkLoginState} />
            </CardHeader>
            <CardBody>
              <Route path="/dashboard/users" component={Users} />
              <Route path="/dashboard/vehicles" component={Vehicles} />
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
};

export default Dashboard;

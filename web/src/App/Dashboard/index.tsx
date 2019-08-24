import React, { useEffect, useCallback } from "react";
import { Container, Card, CardBody, Col, CardHeader } from "reactstrap";
import { Route, RouteComponentProps, Redirect, Switch } from "react-router-dom";
import Axios from "axios";
import SignIn from "App/Dashboard/SignIn";
import Navigation from "./Components/Navigation";
import Loader from "Components/Loader";
import Users from "./User";
import Types from "types";
import Vehicles from "./Vehicles";

const Dashboard: React.FC<
  RouteComponentProps & Types.DashboardProps
> = props => {
  const [isLoading, setAsLoading] = React.useState(true);
  const [isLoggedIn, setAsLoggedIn] = React.useState(false);
  const uriMatch = props.location.pathname.match(/dashboard$/);
  let render;

  const checkLoginState = useCallback(async () => {
    setAsLoading(true);
    let { data } = await Axios.get("/user/auth");
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
        <Col lg={8}>
          <Card>
            <CardHeader>
              <Navigation setAsLoggedInState={checkLoginState} />
            </CardHeader>
            <CardBody>
              <Switch>
                <Route path="/dashboard/users" component={Users} />
                <Route path="/dashboard/vehicles" component={Vehicles} />
              </Switch>
            </CardBody>
          </Card>
        </Col>
      );
    }
  } else {
    render = <Loader />;
  }

  return <Container className="center py-5">{render}</Container>;
};

export default Dashboard;

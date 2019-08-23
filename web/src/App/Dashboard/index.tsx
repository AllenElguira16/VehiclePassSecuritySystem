import React from "react";
import { Container, Card, CardBody, Col, CardHeader } from "reactstrap";
import SignIn from "App/Dashboard/SignIn";
import Navigation from "./Navigation";
import { Route, RouteComponentProps, Redirect } from "react-router-dom";
import Axios from "axios";
import Loader from "Components/Loader";
// import DashboardContainer from "./DashboardContainer";
// import Add from "./Employee/Add";
import Employee from "./Employee";
import Types from "types";

const Dashboard: React.FC<
  RouteComponentProps & Types.DashboardProps
> = props => {
  const [loading, setLoading] = React.useState(true);
  const [isLoggedIn, setAsLoggedIn] = React.useState(false);
  const uriMatch = props.location.pathname.match(/dashboard$/);
  let render;

  React.useEffect(() => {
    const checkLoginState = async () => {
      let { data } = await Axios.get("/user/auth");
      if (!data.error) setAsLoggedIn(true);
      setLoading(false);
    };
    checkLoginState();
  }, [props]);

  if (!isLoggedIn) {
    render = loading ? <Loader /> : <Route component={SignIn} />;
  } else if (uriMatch !== null) {
    render = <Redirect to="/dashboard/employee" />;
  } else {
    render = (
      <Col lg={8}>
        <Card>
          <CardHeader>
            <Navigation />
          </CardHeader>
          <CardBody>
            {/* <Route path="/dashboard/add" component={Add} /> */}
            <Route path="/dashboard/employee" component={Employee} />
          </CardBody>
        </Card>
      </Col>
    );
  }

  return <Container className="center py-5">{render}</Container>;
};

export default Dashboard;

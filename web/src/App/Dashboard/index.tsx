import React from "react";
import { Container, Card, CardBody, Col } from "reactstrap";
import SignIn from "App/Dashboard/SignIn";
import Navigation from "./Navigation";
import { Route, RouteComponentProps } from "react-router-dom";
import Axios from "axios";
import Loader from "Components/Loader";
import DashboardContainer from "./DashboardContainer";
import Add from "./Add";
import Employee from "./Employee";

const Dashboard: React.FC<RouteComponentProps & DashboardProps> = props => {
  let [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      let { data } = await Axios.get("/user/auth");
      if (!data.error) {
        props.setAsLoggedIn();
      }
      setLoading(false);
    })();
  }, [props]);

  if (!props.isLoggedIn) {
    if (!props.isLoggedIn && loading) return <Loader />;
    return <Route component={SignIn} />;
  }

  return (
    <Container className="mt-5 horizontal-center">
      <Col lg={8}>
        <Card>
          <CardBody>
            <Navigation />
            <Route path="/dashboard/add" component={Add} />
            <Route path="/dashboard/employee" component={Employee} />
          </CardBody>
        </Card>
      </Col>
    </Container>
  );
};

export default DashboardContainer(Dashboard);

import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import SignIn from "App/Dashboard/SignIn";
import Navigation from "./Navigation";
import { Route, RouteComponentProps } from "react-router-dom";
import Axios from "axios";
import Loader from "Components/Loader";
import DashboardContainer from "./DashboardContainer";
import Add from "./Add";

const Dashboard: React.FC<RouteComponentProps & DashboardProps> = props => {
  let [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      let { data } = await Axios.get("/user");
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
    <Container className="mt-5">
      <Card>
        <CardBody>
          {/* <Row>
            <Col lg="2"> */}
          <Navigation />
          {/* </Col>
            <Col lg="10"> */}
          <Route path="/dashboard/add" component={Add} />
          {/* </Col>
          </Row> */}
        </CardBody>
      </Card>
    </Container>
  );
};

export default DashboardContainer(Dashboard);

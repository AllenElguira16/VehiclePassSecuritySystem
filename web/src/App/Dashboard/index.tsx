import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import SignIn from "App/Dashboard/SignIn";
import Navigation from "./Navigation";
import { Route, RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import Axios from "axios";
import State from "App/Dashboard/State";
import Props from "App/Dashboard/Props";

const Dashboard: React.FC<RouteComponentProps & DashboardProps> = props => {
  const [state, setState] = React.useState({
    loading: true
  });

  React.useEffect(() => {
    const fetchLoggedIn = async () => {
      let { data } = await Axios.get("/user");
      if (!data.error) {
        props.setAsLoggedIn();
      }
      setState({loading: false});
    };
    fetchLoggedIn();
    return () => {
      console.log('unmounted');
      console.log(props);
    }
  });


  if (!props.isLoggedIn) {
    if (!props.isLoggedIn && state.loading) return <div>Loading</div>;
    return <Route path="/dashboard/signin" component={SignIn} />;
  }

  return (
    <Container className="mt-5">
      <Card>
        <CardBody>
          <Row>
            <Col sm="2">
              <Navigation />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
};

export default connect(
  State,
  Props
)(Dashboard);

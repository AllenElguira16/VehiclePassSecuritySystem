import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "reactstrap";
import SignIn from "App/Dashboard/SignIn";
import Navigation from "./Navigation";
import { Route, RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import Axios from "axios";
import State from "App/Dashboard/State";
import Props from "App/Dashboard/Props";

const Dashboard: React.FC<RouteComponentProps & DashboardProps> = props => {
  const [state, setState] = useState({
    isLoading: true
  });

  useEffect(() => {
    const fetchLoggedIn = async () => {
      let { data } = await Axios.get("/user");
      if (!data.error) {
        props.setAsLoggedIn();
        setState({ isLoading: false });
      }
    };
    fetchLoggedIn();
  }, [state, props]);

  if (!props.isLoggedIn) {
    if (!props.isLoggedIn && state.isLoading) return <div>Loading</div>;
    return <Route path="/dashboard/signin" component={SignIn} />;
  }

  return (
    <Container>
      <Row>
        <Col sm="2">
          <Navigation />
        </Col>
      </Row>
    </Container>
  );
};

export default connect(
  State,
  Props
)(Dashboard);

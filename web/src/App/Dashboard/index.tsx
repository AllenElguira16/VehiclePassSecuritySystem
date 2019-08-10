import React from "react";
// import { Row, Col } from "reactstrap";
import SignIn from "App/Dashboard/SignIn";
// import Navigation from "./Navigation";
import { Route } from "react-router-dom";

export default () => {
  return (
    <>
      {/* <Row>
        <Col sm="2">
          <Navigation/>
        </Col>
      </Row> */}
      <Route path="/dashboard/signin" component={SignIn} />
    </>
  );
};

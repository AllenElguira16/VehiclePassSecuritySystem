import React from "react";
import { Col, Jumbotron } from "reactstrap";

export default () => {
  return (
    <Jumbotron tag="footer" className="bg-primary rounded-0 mb-0">
      <div className="text-center text-white d-flex justify-content-center container">
        <Col sm="6">
          <h4>Vehicle Pass Security System</h4>
          <span>
            A Better Security System for Lyceans who enters in the campus which
            owns a vehicles
          </span>
          <hr className="bg-white" />
          <span>BSIT Students &copy; {new Date().getFullYear()}</span>
        </Col>
      </div>
    </Jumbotron>
  );
};

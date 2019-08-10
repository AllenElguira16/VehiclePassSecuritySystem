import React from "react";
import { Jumbotron, Container } from "reactstrap";

export default () => {
  return (
    <>
      <Jumbotron className="lnu-banner text-dark shadow text-center">
        <h1 className="font-weight-normal text-primary text-primary-shadow display-4">
          Vehicle Pass
        </h1>
      </Jumbotron>
      <Container>
        <h4>What is Vehicle Pass?</h4>
        <p>
          A Vehicle Pass is a unique sticker that contains the info of the
          vehicle and the owner itself
        </p>
      </Container>
      <Container>
        <h4>How to avail?</h4>
        <p>
          To avail a Vehicle Pass please contact the admin on FL-203 or Contact
          09xxxxxxxxx
        </p>
      </Container>
    </>
  );
};

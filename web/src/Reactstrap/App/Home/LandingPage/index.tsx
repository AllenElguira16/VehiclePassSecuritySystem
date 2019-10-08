import React, { FC } from 'react'
import { Row, Col, Container, Card, CardBody, CardFooter, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
// import logo from 'Assets/images/LNULogoFrontPage.webp'
import LNUBanner from 'Reactstrap/Assets/images/LNUBanner.webp'
import { ItalicLink } from 'Reactstrap/@Components'

const LandingPage: FC = () => {
  return (
    <Container>
      <Row className="align-items-center my-5">
        <Col lg={7}>
          <img src={LNUBanner} className="img-fluid" alt="LNUBanner" />
        </Col>
        <Col lg={5}>
          <h1 className="font-weight-light">Vehicle Pass Security System</h1>
          <p>Stay secured, stay assured</p>
        </Col>
      </Row>
      <Row className="card-collections">
        <Col lg={4}>
          <Card>
            <CardBody>
              <h4>What is Vehicle Pass Security System?</h4>
              <p>Vehicle Pass Security System is a security device to ensure the safety of the lycean community</p>
            </CardBody>
            <CardFooter>
              <Button size="sm" tag={Link} to="/vehicle-pass" color="primary">
                More info
              </Button>
            </CardFooter>
          </Card>
        </Col>
        <Col lg={4}>
          <Card>
            <CardBody>
              <h4>What is Vehicle Pass?</h4>
              <p>A Vehicle Pass is a unique sticker that contains the info of the vehicle and the owner itself</p>
            </CardBody>
            <CardFooter>
              {/* To know more about vehicle pass, kindly go to <Link to="/vehicle-pass">this page</Link> */}
              <Button size="sm" tag={Link} to="/vehicle-pass" color="primary">
                More info
              </Button>
            </CardFooter>
          </Card>
        </Col>
        <Col lg={4}>
          <Card>
            <CardBody>
              <h4>How does it work?</h4>
              <p>
                Vehicle Pass Security System works on a hardware called{' '}
                <ItalicLink href="https://www.arduino.cc/">Arduino</ItalicLink> that controls the boom barrier with a
                scanner
              </p>
            </CardBody>
            <CardFooter>
              {/* To know more on how does it work, kindly go to <Link to="/how">this page</Link> */}
              <Button size="sm" tag={Link} to="/how" color="primary">
                More info
              </Button>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
    // </div>
  )
  // return (
  //   <>
  //     <div className="jumbotron lnu-banner text-dark shadow">
  //       <Container>
  //         <Row className="align-items-center">
  //           <Col sm={4}>
  //             <img src={logo} alt="Lyceum-Northwestern University" className="img-fluid" />
  //           </Col>
  //           <Col>
  //             <div style={{ fontSize: 18 }}>
  //               <h1 className="font-weight-normal text-primary text-primary-shadow display-4">
  //                 Vehicle Pass Security System
  //               </h1>
  //               <div className="text-secondary-shadow">
  // <div>A Better Security System for Lyceans who enters in the campus which owns a vehicles</div>
  //               </div>
  //             </div>
  //           </Col>
  //         </Row>
  //       </Container>
  //     </div>
  //     <div className="container">
  //   <Row>
  //     <Col sm="4">
  //       <h4>What is Vehicle Pass Security System?</h4>
  //       <p>Vehicle Pass Security System is a security device to ensure the safety of the lycean community</p>
  //     </Col>
  //     <Col sm="4">
  //       <h4>What is Vehicle Pass?</h4>
  //       <p>A Vehicle Pass is a unique sticker that contains the info of the vehicle and the owner itself</p>
  //       <p>
  //         To know more about vehicle pass, kindly go to <Link to="/vehicle-pass">this page</Link>
  //       </p>
  //     </Col>
  //     <Col sm="4">
  //       <h4>How does it work?</h4>
  //       <p>
  //         Vehicle Pass Security System works on a hardware called{' '}
  //         <ItalicLink href="https://www.arduino.cc/">Arduino</ItalicLink> that controls the boom barrier with a
  //         scanner
  //       </p>
  //       <p>
  //         To know more on how does it work, kindly go to <Link to="/how">this page</Link>
  //       </p>
  //     </Col>
  //   </Row>
  // </div>
  //   </>
  // )
}

export default LandingPage

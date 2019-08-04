import React from 'react'
import { Row, Col } from 'reactstrap';
// import logo from '../../../Assets/images/LNULogoFrontPage.png'
import logo from 'Assets/images/LNULogoFrontPage.png';
import { Link } from 'react-router-dom';
import ItalicLink from 'Components/ItalicLink';

export default () => {
  return (
    <>
      <div className="jumbotron lnu-banner text-dark shadow">
        <Row>
          <Col sm="5" className="d-flex justify-content-center">
            <img src={logo} alt="Lyceum-Northwestern University"/>
          </Col>
          <Col sm="7" className="align-self-center" style={{fontSize: 18}}>
            <h1 className="font-weight-normal text-primary text-primary-shadow display-4">Vehicle Pass Security System</h1>
            <div className="text-secondary-shadow">
              <div>A Better Security System for Lyceans who enters in the campus which owns a vehicles</div>
              <div><Link to="/how-to-avail" className="text-primary-shadow">Click</Link> to know how to avail a security pass</div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="container">
        <Row>
          <Col sm="4">
            <h4>What is Vehicle Pass Security System?</h4>
            <p>Vehicle Pass Security System is a security device to ensure the safety of the lycean community</p>
          </Col>
          <Col sm="4">
            <h4>What is Vehicle Pass?</h4>
            <p>A Vehicle Pass is a unique sticker that contains the info of the vehicle and the owner itself</p>
            <p>To know more about vehicle pass, kindly go to <Link to="/vehicle-pass">this page</Link></p>
          </Col>
          <Col sm="4">
            <h4>How does it work?</h4>
            <p>Vehicle Pass Security System works on a hardware called <ItalicLink href="https://www.arduino.cc/">Arduino</ItalicLink> that controls the boom barrier with a scanner</p>
            <p>To know more on how does it work, kindly go to <Link to="/how">this page</Link></p>
          </Col>
        </Row>
      </div>
    </>
  )
}
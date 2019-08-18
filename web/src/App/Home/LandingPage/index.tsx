import React from "react";
// import { Row, Col } from "reactstrap";
// import { Link } from "react-router-dom";
// import ItalicLink from "Components/ItalicLink";
import logo from "Assets/images/LNULogoFrontPage.webp";
import banner from "Assets/images/LNUBanner.webp";
import { Link as RouterLink } from "react-router-dom";
import {
  Grid,
  createStyles,
  makeStyles,
  Typography,
  Link
} from "@material-ui/core";

const useStyles = makeStyles(theme => {
  return createStyles({
    root: {
      flexGrow: 1
    },
    tagLine: {
      // color: "#FFF"
    },
    title: {
      color: "#932842"
    },
    imgLogo: {
      display: "flex",
      justifyContent: "center"
    },
    banner: {
      background: `linear-gradient(
        rgba(255, 255, 255, 0.6),
        rgba(255, 255, 255, 0.6)
      ), url(${banner})`,
      backgroundSize: "cover"
    }
  });
});

export default () => {
  const styles = useStyles();

  return (
    <div aria-label="wrapper" className={styles.root}>
      <Grid container alignItems="center" className={styles.banner}>
        <Grid item lg={5} className={styles.imgLogo}>
          <img src={logo} alt="Lyceum-Northwestern University" />
        </Grid>
        <Grid item lg={7} className={styles.tagLine}>
          <Typography variant="h3" className={styles.title}>
            Vehicle Pass Security System
          </Typography>
          <Typography>
            A Better Security System for Lyceans who enters in the campus which
            owns a vehicles
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item lg={4}>
          <h4>What is Vehicle Pass Security System?</h4>
          <p>
            Vehicle Pass Security System is a security device to ensure the
            safety of the lycean community
          </p>
        </Grid>
        <Grid item lg={4}>
          <h4>What is Vehicle Pass?</h4>
          <p>
            A Vehicle Pass is a unique sticker that contains the info of the
            vehicle and the owner itself
          </p>
          <p>
            To know more about vehicle pass, kindly go to{" "}
            <Link component={RouterLink} to="/vehicle-pass">
              this page
            </Link>
          </p>
        </Grid>
        <Grid item lg={4}>
          <h4>How does it work?</h4>
          <p>
            Vehicle Pass Security System works on a hardware called{" "}
            <Link component={RouterLink} to="https://www.arduino.cc/">
              Arduino
            </Link>{" "}
            that controls the boom barrier with a scanner
          </p>
          <p>
            To know more on how does it work, kindly go to{" "}
            <Link component={RouterLink} to="/how">
              this page
            </Link>
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

// export default () => {
//   return (
//     <>
//       <div className="jumbotron lnu-banner text-dark shadow">
//         <Row>
//           <Col
//             sm="5"
//             className="d-flex justify-content-center justify-content-sm-end"
//           >
//             <img
//               src={logo}
//               alt="Lyceum-Northwestern University"
//               className="img-fluid"
//             />
//           </Col>
//           <Col sm="7" className="align-self-center" style={{ fontSize: 18 }}>
// <h1 className="font-weight-normal text-primary text-primary-shadow display-4">
//   Vehicle Pass Security System
// </h1>
// <div className="text-secondary-shadow">
//   <div>
//     A Better Security System for Lyceans who enters in the campus
//     which owns a vehicles
//   </div>
//   {/* <div><Link to="/how-to-avail" className="text-primary-shadow">Click</Link> to know how to avail a security pass</div> */}
// </div>
//           </Col>
//         </Row>
//       </div>
//       <div className="container">
//         <Row>
//           <Col sm="4">
//             <h4>What is Vehicle Pass Security System?</h4>
//             <p>
//               Vehicle Pass Security System is a security device to ensure the
//               safety of the lycean community
//             </p>
//           </Col>
//           <Col sm="4">
//             <h4>What is Vehicle Pass?</h4>
//             <p>
//               A Vehicle Pass is a unique sticker that contains the info of the
//               vehicle and the owner itself
//             </p>
//             <p>
//               To know more about vehicle pass, kindly go to{" "}
//               <Link to="/vehicle-pass">this page</Link>
//             </p>
//           </Col>
//           <Col sm="4">
//             <h4>How does it work?</h4>
//             <p>
//               Vehicle Pass Security System works on a hardware called{" "}
//               <ItalicLink href="https://www.arduino.cc/">Arduino</ItalicLink>{" "}
//               that controls the boom barrier with a scanner
//             </p>
//             <p>
//               To know more on how does it work, kindly go to{" "}
//               <Link to="/how">this page</Link>
//             </p>
//           </Col>
//         </Row>
//       </div>
//     </>
//   );
// };

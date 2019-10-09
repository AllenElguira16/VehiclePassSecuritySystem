import React, { FC } from "react";
import Header from "Components/Common/Header";
import { Container } from "@material-ui/core";
import { Route } from "react-router";
import { Home } from "@material-ui/icons";
import VehiclePass from "./VehiclePass";
import AboutUs from "./AboutUs";
import Footer from "Components/Common/Footer";
import { useStyles } from "styles";

const Main: FC = () => {
  const styles = useStyles();
  return (
    <div className={styles.mainContainer}>
      <Header />
      <Container component="main" className={styles.pageContainer}>
        <Route exact path="/" component={Home} />
        <Route exact path="/vehicle-pass" component={VehiclePass} />
        <Route exact path="/about-us" component={AboutUs} />
      </Container>
      <Footer />
    </div>
  )
}

export default Main;
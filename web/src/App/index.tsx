import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//
import Header from "App/Header";
import Footer from "App/Footer";

// Page components
import Home from "./Home";
import AboutUs from "./AboutUs";
import VehiclePass from "./VehiclePass";
import Dashboard from "./Dashboard";
import Confirmation from "Components/Confirmation";
import { connect } from "react-redux";

const App: React.FC = (props: any) => {
  console.log(props);
  return (
    <BrowserRouter>
      <Header />
      <main style={{ minHeight: 450 }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/vehicle-pass" component={VehiclePass} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </main>
      <Footer />
      <Confirmation isOpen={props.isOpenConfirmBox} />
    </BrowserRouter>
  );
};

export default connect((state: any) => {
  return {
    isOpenConfirmBox: state.confirm.isOpenConfirmBox
  };
})(App);

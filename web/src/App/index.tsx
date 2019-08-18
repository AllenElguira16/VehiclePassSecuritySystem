import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Navigation from "Components/Navigation";
import Footer from "Components/Footer";
import Home from "./Home";
import AboutUs from "./AboutUs";
import VehiclePass from "./VehiclePass";
import Dashboard from "./Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <main style={{ minHeight: 450 }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/vehicle-pass" component={VehiclePass} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

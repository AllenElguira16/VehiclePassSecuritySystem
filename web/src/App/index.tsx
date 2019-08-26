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

const App: React.FC = () => {
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
    </BrowserRouter>
  );
};

export default App;

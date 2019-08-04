import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navigation from 'Components/Navigation';
import Footer from 'Components/Footer';
import Home from './Home';
import AboutUs from './AboutUs';
import VehiclePass from './VehiclePass';

export default () => {
  return (
    <BrowserRouter>
      <Navigation/>
      <main style={{minHeight: 450}}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about-us" component={AboutUs}/>
          <Route exact path="/vehicle-pass" component={VehiclePass}/>
        </Switch>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}
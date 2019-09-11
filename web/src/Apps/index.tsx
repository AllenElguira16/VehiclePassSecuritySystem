import React, { FC } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Header from './Header'

const App: FC = () => {
  return (
    <>
      {/* <BrowserRouter> */}
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/about-us" component={AboutUs} /> */}
          {/* <Route exact path="/vehicle-pass" component={VehiclePass} /> */}
          {/* <Route path="/dashboard" component={Dashboard} /> */}
        </Switch>
      </main>
      {/* </BrowserRouter> */}
    </>
  )
}

export default App

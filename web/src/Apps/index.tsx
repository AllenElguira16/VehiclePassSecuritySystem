import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//
import Header from 'Apps/Header'
import Footer from 'Apps/Footer'

// Page components
import Home from './Home'
import AboutUs from './AboutUs'
import VehiclePass from './VehiclePass'
import Dashboard from './Dashboard'

const App: React.FC = () => {
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const header = document.getElementById('header')
    const footer = document.getElementById('footer')
    const root = document.getElementById('root')
    if (header && footer && root) {
      setHeight(root.offsetHeight - (header.offsetHeight + footer.offsetHeight))
    }
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <main style={{ minHeight: height }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/vehicle-pass" component={VehiclePass} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App

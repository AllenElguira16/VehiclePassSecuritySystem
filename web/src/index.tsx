import React from 'react'
import ReactDOM from 'react-dom'
import ReactStrap from 'Reactstrap/App'
import App from 'App'
import * as serviceWorker from './serviceWorker'
import Axios from 'axios'
import { BrowserRouter, Route } from 'react-router-dom'

const { NODE_ENV } = process.env
const isProd = NODE_ENV === 'production'
// Axios.defaults.baseURL = 'https://vpss-server.herokuapp.com'
Axios.defaults.baseURL = isProd ? 'https://vpss-server.herokuapp.com' : 'http://localhost:8000'
Axios.defaults.withCredentials = true

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={App} />
    {/* <Route exact path="/reactstrap" render={() => <ReactStrap />} /> */}
    {/* <App /> */}
  </BrowserRouter>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

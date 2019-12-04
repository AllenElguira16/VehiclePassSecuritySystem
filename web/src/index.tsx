import React from 'react'
import ReactDOM from 'react-dom'
import App from 'App'
import * as serviceWorker from './serviceWorker'
import Axios from 'axios'

const { NODE_ENV } = process.env
const isProd = NODE_ENV === 'production'
// Axios.defaults.baseURL = 'http://192.168.100.5:8000'
Axios.defaults.baseURL = isProd
  ? 'https://vpss-server.herokuapp.com'
  : 'http://localhost:8000'

Axios.defaults.withCredentials = true

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

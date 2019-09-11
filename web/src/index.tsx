import React from 'react'
import ReactDOM from 'react-dom'
// import './Assets/styles/index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'
import Axios from 'axios'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { Theme } from 'theme'

// Axios.defaults.baseURL = 'https://vpss-server.herokuapp.com'
Axios.defaults.baseURL = 'http://localhost:8000'
Axios.defaults.withCredentials = true

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

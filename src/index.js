import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyles from './GlobalStyles.js'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <App />
    <GlobalStyles />
  </Router>,
  document.getElementById('root')
)

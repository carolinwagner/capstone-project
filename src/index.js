import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyles from './GlobalStyles.js'
import { BrowserRouter as Router } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

ReactDOM.render(
  <Router>
    <ScrollToTop />
    <App />
    <GlobalStyles />
  </Router>,
  document.getElementById('root')
)

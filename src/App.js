import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import BylawsText from './BylawsText'
import Header from './Header'
import Start from './Start'
import QuestionsForm from './QuestionsForm'

function App() {
  const [answers, setAnswers] = useState([])

  return (
    <Router>
      {/* <Header />
      <QuestionsForm onClick={addAnswers} />
      <BylawsText answers={answers} /> */}

      <Switch>
        <Route path="/start">
          <Start />
        </Route>
        <Route path="/questions">
          <QuestionsForm />
        </Route>
        <Route path="/bylawstext">
          <BylawsText />
        </Route>
      </Switch>
    </Router>
  )

  function addAnswers(newAnswers) {
    setAnswers(newAnswers)
  }
}

export default App

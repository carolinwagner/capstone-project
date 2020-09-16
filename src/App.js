import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Header'
import BylawsText from './BylawsText'
import QuestionsForm from './QuestionsForm'
import Start from './Start'

function App() {
  const [answers, setAnswers] = useState([])

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Start />
        </Route>
        <Route path="/questions">
          <QuestionsForm onClick={addAnswers} />
        </Route>
        <Route path="/bylawstext">
          <BylawsText answers={answers} />
        </Route>
      </Switch>
    </Router>
  )

  function addAnswers(newAnswers) {
    setAnswers(newAnswers)
  }
}

export default App

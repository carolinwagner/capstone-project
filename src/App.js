import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import BylawsText from './BylawsText'
import QuestionsForm from './QuestionsForm'
import Start from './Start'

function App() {
  const [answers, setAnswers] = useState([])

  return (
    <>
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
    </>
  )

  function addAnswers(newAnswers) {
    setAnswers(newAnswers)
  }
}

export default App

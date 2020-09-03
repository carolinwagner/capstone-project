import React, { useState } from 'react'
import Header from './Header'
import QuestionsForm from './QuestionsForm'
import Summary from './Summary'

function App() {
  const [answers, setAnswers] = useState([])

  return (
    <>
      <Header />
      <QuestionsForm onClick={addAnswers} />
      <Summary answers={answers} />
    </>
  )

  function addAnswers(newAnswers) {
    setAnswers(newAnswers)
  }
}

export default App

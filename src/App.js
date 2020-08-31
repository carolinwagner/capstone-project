import React, { useState } from 'react'
import Header from './Header'
import QuestionsAndAnswerPossibilities from './QuestionsAndAnswerPossibilities'
import Summary from './Summary'

function App() {
  const [answers, setAnswers] = useState([])

  return (
    <>
      <Header />
      <QuestionsAndAnswerPossibilities onClick={addAnswers} />
      <Summary answers={answers} />
    </>
  )

  function addAnswers(newAnswers) {
    setAnswers(newAnswers)
  }
}

export default App

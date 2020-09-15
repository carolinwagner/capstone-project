import React, { useState } from 'react'
import BylawsText from './BylawsText'
import Header from './Header'
import QuestionsForm from './QuestionsForm'

function App() {
  const [answers, setAnswers] = useState([])

  return (
    <>
      <Header />
      <QuestionsForm onClick={addAnswers} />
      <BylawsText answers={answers} />
    </>
  )

  function addAnswers(newAnswers) {
    setAnswers(newAnswers)
  }
}

export default App

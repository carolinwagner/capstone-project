import React, { useState } from 'react'
import Header from './Header'
import QuestionsForm from './QuestionsForm'
import Summary from './Summary'
import BylawsText from './BylawsText'

function App() {
  const [answers, setAnswers] = useState([])

  return (
    <>
      <Header />
      <QuestionsForm onClick={addAnswers} />
      {/* <Summary answers={answers} /> */}
      <BylawsText answers={answers} />
    </>
  )

  function addAnswers(newAnswers) {
    setAnswers(newAnswers)
  }
}

export default App

import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import BylawsText from './BylawsText'
import QuestionsForm from './QuestionsForm'
import Start from './Start'
import styled from 'styled-components/macro'

function App() {
  const [answers, setAnswers] = useState([])

  useEffect(() => console.log('Answers:', answers), [answers])

  return (
    <StyledCenterOnDesktop>
      <StyledMainContainer>
        <Header />
        <Switch>
          <Route exact path="/">
            <Start />
          </Route>
          <Route path="/questions">
            <QuestionsForm onAddAnswer={addAnswer} />
          </Route>
          <Route path="/bylawstext">
            <BylawsText answers={answers} />
          </Route>
        </Switch>
      </StyledMainContainer>
    </StyledCenterOnDesktop>
  )

  function addAnswer(newAnswer) {
    setAnswers({ ...answers, ...newAnswer })
  }
}

const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 500px;
  width: 100%;
`
const StyledCenterOnDesktop = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`

export default App

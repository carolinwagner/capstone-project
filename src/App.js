import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import BylawsText from './BylawsText'
import QuestionPage from './QuestionPage'
import Start from './Start'
import styled from 'styled-components/macro'

function App() {
  const [answers, setAnswers] = useState([])

  const addAnswer = (newAnswer) => setAnswers({ ...answers, ...newAnswer })

  return (
    <StyledCenterOnDesktop>
      <StyledMainContainer>
        <Header />
        <Switch>
          <Route exact path="/">
            <Start />
          </Route>
          <Route path="/questions">
            <QuestionPage onAddAnswer={addAnswer} />
          </Route>
          <Route path="/bylawstext">
            <BylawsText answers={answers} />
          </Route>
        </Switch>
      </StyledMainContainer>
    </StyledCenterOnDesktop>
  )
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

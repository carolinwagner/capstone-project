import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import BylawsText from './BylawsText'
import QuestionPage from './QuestionPage'
import Start from './Start'
import Footer from './Footer'
import Impressum from './Impressum'
import styled from 'styled-components/macro'

function App() {
  const [answers, setAnswers] = useState({})

  const addAnswer = (newAnswer) => setAnswers({ ...answers, ...newAnswer })

  return (
    <StyledCenterOnDesktop>
      <StyledMainContainer>
        <Header />
        <Switch>
          <Route exact path="/">
            <Start />
            <Footer />
          </Route>
          <Route path="/questions">
            <QuestionPage onAddAnswer={addAnswer} answers={answers} />
            <Footer />
          </Route>
          <Route path="/bylawstext">
            <BylawsText answers={answers} />
            <Footer />
          </Route>
          <Route path="/impressum">
            <Impressum />
          </Route>
        </Switch>
      </StyledMainContainer>
    </StyledCenterOnDesktop>
  )
}

const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  position: relative;
  min-height: 100vh;
`

const StyledCenterOnDesktop = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`
const defaultAnswers = {
  clubName: 'Neuer Fisch',
  clubLocation: 'Hamburg',
  clubPurpose: 'programmieren',
  typeOfMembers: ['Minderjährige', false, false, false],
  typeOfRequest: ['schriftlich', false, false, false, false],
  admissionFee: 'yesAdmissionFee',
  memberFee: 'yesMemberFee',
  generalMeetingDuties: ['die Wahl des Vorstandes', false, false, false, false],
  typeOfInvitationGeneralMeeting: ' writtenInvitation',
  generalMeetingDeadline: '14',
  quorumQuote: 'quorum',
  generalMeetingFrequency: 'monthly',
  generalMeetingMajority: 'absoluteMajority',
  boardComposition: ['zwei Vorsitzenden', false, false],
  clubRepresentation: 'firstBoardMember',
  boardPeriod: 'oneYear',
  boardReelection: 'yesReelection',
  boardInvitation: 'writtenBoardInvitation',
  boardMeetingDeadline: '14',
  agendaNotice: 'yesAgendaNotice',
  committees: 'yesCommittees',
  dissolutionMajority: 'absoluteMajorityDissolution',
  decisionDate: '2020-10-06',
  signaturesNumber: '7',
}

export default App

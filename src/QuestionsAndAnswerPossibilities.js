import React from 'react'
import questions from './questions.json'
import styled from 'styled-components/macro'

export default function QuestionsAndAnswerPossibilities() {
  return (
    <div>
      {questions.map((question, index) => (
        <>
          <h2>
            Frage {index + 1} von {questions.length}
          </h2>
          <p>{question.questionText}</p>
          <form>
            {question.answerType === 'text' && (
              <input type={question.answerType} />
            )}
            {question.answerType === 'number' && (
              <input type={question.answerType} />
            )}

            {question.answerType === 'checkbox' && (
              <div>
                {question.answerOptions.map((answerOption) => (
                  <div>
                    <input type={question.answerType} />
                    <label>{answerOption}</label>
                  </div>
                ))}
              </div>
            )}
            {question.answerType === 'radio' && (
              <div>
                {question.answerOptions.map((answerOption) => (
                  <div>
                    <input name={index} type={question.answerType} />
                    <label>{answerOption}</label>
                  </div>
                ))}
              </div>
            )}
          </form>
        </>
      ))}
      <StyledContainer>
        <StyledButton>Zusammenfassung anzeigen</StyledButton>
      </StyledContainer>
    </div>
  )
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`

const StyledButton = styled.button`
  margin: 100px;
  padding: 20px;
  color: var(--lightgrey);
  background-color: var(--lightblue);
  border-radius: 5px;
  border: none;
`

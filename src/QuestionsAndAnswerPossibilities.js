import React, { useState } from 'react'
import questions from './questions.json'
import styled from 'styled-components/macro'

export default function QuestionsAndAnswerPossibilities({ onClick }) {
  const [inputValues, setInputValues] = useState([])

  const updateInputValues = (index, value) => {
    const clonedArray = [...inputValues]
    clonedArray[index] = value
    setInputValues(clonedArray)
  }

  return (
    <div>
      {questions.map((question, index) => (
        <React.Fragment key={index}>
          <h2>
            Frage {index + 1} von {questions.length}
          </h2>
          <p>{question.questionText}</p>
          <form>
            {question.answerType === 'text' && (
              <input
                onChange={(event) =>
                  updateInputValues(index, event.target.value)
                }
                value={inputValues[index] || ''}
                type={question.answerType}
              />
            )}
            {question.answerType === 'number' && (
              <input type={question.answerType} key={index} />
            )}

            {question.answerType === 'checkbox' && (
              <div>
                {question.answerOptions.map((answerOption, innerIndex) => (
                  <div key={`checkbox${index}${innerIndex}`}>
                    <input type={question.answerType} />
                    <label>{answerOption}</label>
                  </div>
                ))}
              </div>
            )}
            {question.answerType === 'radio' && (
              <div>
                {question.answerOptions.map((answerOption, innerIndex) => (
                  <div key={`radio${index}${innerIndex}`}>
                    <input name={index} type={question.answerType} />
                    <label>{answerOption}</label>
                  </div>
                ))}
              </div>
            )}
          </form>
        </React.Fragment>
      ))}
      <StyledContainer>
        <StyledButton
          onClick={() => {
            if (inputValues !== []) {
              console.log('Values: ', inputValues)
              onClick(inputValues)
              setInputValues([])
            }
          }}
        >
          Zusammenfassung anzeigen
        </StyledButton>
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

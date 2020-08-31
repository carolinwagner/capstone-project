import React, { useState } from 'react'
import questions from './questions.json'
import styled from 'styled-components/macro'
import TextInput from './TextInput'
import NumberInput from './NumberInput'
import CheckboxInput from './CheckboxInput'
import RadioInput from './RadioInput'

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
          {question.answerType === 'text' && (
            <TextInput
              onChange={(event) =>
                updateInputValues(index, String(event.target.value))
              }
              value={inputValues[index] || ''}
            />
          )}
          {question.answerType === 'number' && (
            <NumberInput
              onChange={(event) =>
                updateInputValues(index, String(event.target.value))
              }
              value={inputValues[index] || ''}
              key={index}
            />
          )}

          {question.answerType === 'checkbox' && (
            <CheckboxInput
              answerOptions={question.answerOptions}
              index={index}
            />
          )}

          {question.answerType === 'radio' && (
            <RadioInput answerOptions={question.answerOptions} index={index} />
          )}
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
  cursor: pointer;
`

import React from 'react'
import questions from './questions.json'

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
    </div>
  )
}

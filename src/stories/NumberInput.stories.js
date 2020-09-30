import React from 'react'
import NumberInput from '../NumberInput'

export default {
  title: 'NumberInput',
  component: NumberInput,
}

const exampleQuestion = {
  questionText:
    'Wie viele Mitglieder (min. 7) sollen die Satzung unterschreiben?',
  name: 'signaturesNumber',
  answerType: 'number',
  answerOptions: [],
  validationHookForm: { required: true },
  validationNative: { min: '7' },
  info:
    'Die Mitglieder, die in der Gründungssitzung anwesend sind, sollten die Satzung unterschreiben. Dabei ist es gesetzlich erforderlich, dass mindestens sieben Mitglieder die Vereinssatzung unterzeichen.',
}

export const DefaultNumberInput = () => (
  <NumberInput question={exampleQuestion} />
)

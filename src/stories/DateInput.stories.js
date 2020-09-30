import React from 'react'
import DateInput from '../DateInput'

export default {
  title: 'DateInput',
  component: DateInput,
}
const exampleQuestion = {
  questionText: 'An welchem Tag soll über die Satzung beschlossen werden?',
  name: 'decisionDate',
  answerType: 'date',
  answerOptions: [],
  validationHookForm: { required: true },
  validationNative: { minToday: true },
  info:
    'Bitte wähle hier den Tag, an dem die Gründungsversammlung stattfinden soll. Dies kann frühestens der heutige Tag sein.',
}

export const DefaultDateInput = () => <DateInput question={exampleQuestion} />

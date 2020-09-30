import React from 'react'
import TextInput from '../TextInput'

export default {
  title: 'TextInput',
  component: TextInput,
}

const exampleQuestion = {
  questionText: 'Wie soll der Name des Vereins lauten? ',
  name: 'clubName',
  answerType: 'text',
  answerOptions: [],
  validationHookForm: { required: true, pattern: '.*\\S.*' },
  placeholder: 'Beispielsverein',
  info:
    'Der Name deines Vereins sollte unmissverständlich sein und sich von anderen Vereinen im Umkreis unterscheiden. Im Idealfall lässt der Name schon den Zweck deines Vereins erkennen. Bitte gib den Namen des Vereins ohne den Zusatz “e. V.” ein. Bezeichnungen des Vereins mit “AG”, “GmbH & Co. KG” oder Ähnlichem sind nicht gestattet, da diese Bezeichnungen Personengesellschaften zugeordnet werden.',
}

export const DefaultTextInput = () => <TextInput question={exampleQuestion} />

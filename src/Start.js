import React from 'react'
import Header from './Header'
import StyledButton from './StyledButton'

export default function Start() {
  return (
    <>
      <Header />
      <p>
        Jeder gemeinnützige Verein benötigt gemäß § 57 des Bürgerlichen
        Gesetzbuches eine Satzung.
      </p>
      <p>
        Beantworte einfach die folgenden Fragen und dir wird im Anschluss eine
        individuell auf deinen Verein abgestimmte Satzung generiert.
      </p>
      <StyledButton text="Zu den Fragen" />
    </>
  )
}

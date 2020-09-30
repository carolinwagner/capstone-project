import React from 'react'
import join from 'join-array'
import Paragraph from '../Paragraph'

const MembersParagraph = ({ answers }) => {
  const members = join({
    array: answers?.typeOfMembers?.filter(Boolean),
    last: ' und ',
  })

  const typeOfRequest = join({
    array: answers?.typeOfRequest?.filter(Boolean),
    last: ' oder ',
  })

  return (
    <Paragraph
      id="members"
      headline="§ 6 Erwerb der Mitgliedschaft"
      section1={`I. ${members} können Vereinsmitglieder werden.`}
      section2={`II. Der Aufnahmeantrag kann 
   ${typeOfRequest} gestellt werden. Über den Aufnahmeantrag entscheidet
    der Vorstand. Gegen die Ablehnung, die keiner Begründung bedarf, steht
    dem/der Bewerber/in die Berufung an die Mitgliederversammlung zu,
    welche dann endgültig entscheidet.`}
    />
  )
}

export default MembersParagraph

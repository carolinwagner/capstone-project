import React from 'react'
import Paragraph from '../Paragraph'

const AdmissionFeeParagraph = ({ answers }) => {
  return (
    <Paragraph
      id="admissionFee"
      headline="§ 7 Aufnahmegebühr"
      text={
        answers?.admissionFee === 'yesAdmissionFee'
          ? 'Vor dem Eintritt wird eine Aufnahmegebühr fällig. Die Höhe bestimmt die Mitgliederversammlung.'
          : 'Eine Aufnahmegebühr wird nicht erhoben.'
      }
    />
  )
}

export default AdmissionFeeParagraph

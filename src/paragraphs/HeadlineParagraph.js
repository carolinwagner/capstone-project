import React from 'react'
import styled from 'styled-components/macro'

const HeadlineGeneratedBylaws = ({ answers }) => {
  return (
    <section id="headline">
      <StyledHeadline>{`Satzung des Vereins ${answers.clubName}
        ${answers.clubRegistration === 'yesClubRegistration' ? 'e. V.' : ''}
    `}</StyledHeadline>
    </section>
  )
}

const StyledHeadline = styled.h2`
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 30px;
`

export default HeadlineGeneratedBylaws

import React from 'react'

const Paragraph = ({
  id,
  headline,
  section1,
  section2,
  section3,
  section4,
  section5,
  section6,
}) => {
  return (
    <section id={id}>
      <h3>{headline}</h3>
      <p>{section1}</p>
      <p>{section2}</p>
      <p>{section3}</p>
      <p>{section4}</p>
      <p>{section5}</p>
      <p>{section6}</p>
    </section>
  )
}

export default Paragraph

import React from 'react'

const Paragraph = ({ id, headline, text }) => {
  return (
    <section id={id}>
      <h3>{headline}</h3>
      <p>{text}</p>
    </section>
  )
}

export default Paragraph

import React from 'react'
import styled from 'styled-components'

export default { title: 'Colors' }

export const Blue = () => (
  <WhiteWrapper>
    <TagWithColor color="var(--blue)">blue: #0E4C73</TagWithColor>
    <ColorBox bgColor="var(--blue)"></ColorBox>
  </WhiteWrapper>
)

export const Lightblue = () => (
  <WhiteWrapper>
    <TagWithColor color="var(--lightblue)">lightblue: #8EBADC</TagWithColor>
    <ColorBox bgColor="var(--lightblue)"></ColorBox>
  </WhiteWrapper>
)

export const Darkgrey = () => (
  <WhiteWrapper>
    <TagWithColor color="var(--darkgrey)">darkgrey: #292424</TagWithColor>
    <ColorBox bgColor="var(--darkgrey)"></ColorBox>
  </WhiteWrapper>
)

export const Lightgrey = () => (
  <WhiteWrapper>
    <TagWithColor color="var(--lightgrey)">lightgrey: #F2F2F2</TagWithColor>
    <ColorBox bgColor="var(--lightgrey)"></ColorBox>
  </WhiteWrapper>
)

const WhiteWrapper = styled.div`
  background-color: white;
  width: 200px;
  height: 200px;
`
const TagWithColor = styled.span`
  color: ${(props) => props.color};
`

const ColorBox = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.bgColor};
`

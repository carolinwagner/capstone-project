import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`

* {
  box-sizing: border-box;
}

body {
  font-size: 112.5%;
  font-family: 'Lato', sans-serif;
  margin: 25px;
}

:root {
    --darkgrey-main: #292424;
    --blue: #406E8F;
    --lightblue: #8EBADC;
    --lightgrey: #F2F2F2;
    --white: #FFFFFF;
}
`

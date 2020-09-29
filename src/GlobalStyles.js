import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`

* {
  box-sizing: border-box;
}

body {
  font-size: 112.5%;
  font-family: 'Lato', sans-serif;
  height: 100%;
  margin: 0;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(235,236,236,1) 100%)
  fixed no-repeat;
}

:root {
  height: 100%;
  --darkgrey: #292424;
  --blue: #0E4C73;
  --lightblue: #8EBADC;
  --lightgrey: #F2F2F2;
  --white: #FFFFFF;
  --button-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

#root {
  height: 100%;
}

input, select {
  font-size: 16px;
}
`

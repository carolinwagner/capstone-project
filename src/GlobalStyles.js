import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`

* {
  box-sizing: border-box;
}

input[type="radio"], input[type="checkbox"] {
  transform: scale(1.2);
}

body {
  font-size: 112.5%;
  font-family: 'Lato', sans-serif;
  height: 100%;
  margin: 0;
}

:root {
  --darkgrey: #292424;
  --blue: #406E8F;
  --lightblue: #8EBADC;
  --lightgrey: #F2F2F2;
  --white: #FFFFFF;
  height: 100%;
}

#root {
  height: 100%;
  background: rgb(255,255,255);
background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(235,236,236,1) 100%)
  fixed no-repeat; 
}

input, select {
  font-size: 16px;
  
}
`

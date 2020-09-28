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
}

:root {
  height: 100%;

  --darkgrey: #292424;
  --blue: #406E8F;
  --lightblue: #8EBADC;
  --lightgrey: #F2F2F2;
  --white: #FFFFFF;

  --button-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
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

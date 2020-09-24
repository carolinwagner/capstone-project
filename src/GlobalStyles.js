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
  --darkgrey: #292424;
  --blue: #406E8F;
  --lightblue: #8EBADC;
  --lightgrey: #F2F2F2;
  --white: #FFFFFF;
  height: 100%;
}

#root {
  height: 100%;
  background: rgb(237,242,245);
background: linear-gradient(185deg, rgba(237,242,245,1) 73%, rgba(237,242,245,1) 77%, rgba(237,242,245,1) 82%, rgba(232,236,240,1) 92%, rgba(221,222,230,1) 100%) 
    fixed no-repeat; 
}

input, select {
  font-size: 16px;
}
`

import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  html, body, #__next {
    height: 100%;
    background-color: #f2f2f2;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
  :root{
    --blue: #2A4F9F;
    --white: #ffffff;
    --black: #222;
    --yellow: #F7DB4A;
    --gray-light: #f2f2f2;
    --gray: #8F9BB3;
    --border-gray-light: rgba(242, 242, 242, 0.3);
    --red: #DD4033;
  }
`

export default GlobalStyles
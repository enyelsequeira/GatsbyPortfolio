import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Default from "./src/themes/default"

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    height: 100%;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
`

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Default}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
)

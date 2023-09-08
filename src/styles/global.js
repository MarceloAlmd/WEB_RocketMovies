import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Roboto Slab', serif;

  }
  
  a {
    text-align: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.6s;
  }

  button:hover, a:hover {
    filter: brightness(.8);
  }

`;

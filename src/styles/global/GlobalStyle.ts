import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
     * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    border: none;
  }

  body {
    background: ${({ theme }) => `linear-gradient(0deg, ${theme.primary}, ${theme.secondary})`};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  #root{
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
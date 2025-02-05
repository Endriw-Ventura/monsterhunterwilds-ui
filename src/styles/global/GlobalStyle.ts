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
  }

  #root{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export default GlobalStyle;
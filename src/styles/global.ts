import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

      outline: 0;
    }

    html {
      @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 93.74%;
      }

      @media (max-width: 720px) {
        font-size: 87.5%;
      }
    }

    body,
    #root {
      max-width: 100%;
      min-height: calc(100vh);

      font-size: 16px;
      font-family: 'Nunito', sans-serif;

      -webkit-font-smoothing: antialiased;
    }

    button {
      border: none;

      cursor: pointer;
    }

    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Sen:wght@800&display=swap');
  `}
`;

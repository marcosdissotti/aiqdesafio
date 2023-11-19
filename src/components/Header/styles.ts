import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    height: 5rem;
    padding: 0 80px;

    display: grid;
    align-items: center;
    grid-template-columns: 1fr 2fr 1fr;

    color: #fff;
    background-color: ${theme.colors.primary};

    div:first-child {
      display: flex;
      justify-self: start;
      justify-items: center;

      grid-column: 1;
    }

    button {
      width: 7rem;
      height: 2.25rem;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 0.5rem;
      background-color: ${theme.colors.bluishGreen};

      font-family: Nunito;
      font-size: 1rem;
      font-weight: 700;
      color: ${theme.colors.white};

      img {
        width: 24px;
        height: 24px;
        margin-right: 8px;
      }
    }

    .aiqfome-logo {
      margin-right: 64px;
    }

    .login-button-wrapper {
      width: fit-content;
      grid-column: 3;
      justify-self: end;
    }
  `}
`;

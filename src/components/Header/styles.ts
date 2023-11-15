import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    height: 5rem;

    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr 2fr 1fr;

    background-color: ${theme.colors.primary};

    color: #fff;

    div:first-child {
      display: flex;
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

    input {
      width: 80%;
      height: 2.5rem;
      padding: 8px 12px;
      border-radius: 8px;
      border: 1px solid ${theme.colors.lightGray};
    }

    input::placeholder {
      opacity: 0.7;
      font-size: 0.875rem;
      color: ${theme.colors.gray};
      background: ${theme.colors.white};
    }

    .aiqfome-logo {
      margin-right: 2.5rem;
    }
  `}
`;

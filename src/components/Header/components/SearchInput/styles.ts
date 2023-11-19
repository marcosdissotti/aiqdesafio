import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 80%;
    height: 2.5rem;
    padding: 8px 12px;

    display: flex;
    justify-self: center;
    grid-column: 2;

    border-radius: 8px;
    border: 1px solid ${theme.colors.lightGray};

    background: ${theme.colors.white};

    font-weight: 600;
    font-size: 0.875rem;
    font-family: Nunito;
    line-height: 135.714%;
    color: ${theme.colors.gray};

    img {
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }

    input {
      width: 100%;
      height: 100%;

      border-radius: 8px;

      border: none;
    }

    input::placeholder {
      opacity: 0.7;
      font-size: 0.875rem;
      color: ${theme.colors.gray};
      background: ${theme.colors.white};
    }
  `}
`;

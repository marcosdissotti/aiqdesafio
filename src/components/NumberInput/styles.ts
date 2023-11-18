import styled, { css } from 'styled-components';

export const Container = styled.div<{ width?: string; height?: string }>`
  ${({ theme, width, height }) => css`
    max-width: fit-content;
    display: flex;
    align-items: center;

    img {
      width: ${width ? width : '24px'};
      height: ${height ? height : '24px'};
    }

    input {
      width: 32px;
      height: 32px;
      margin: 0 6px;
      border: none;

      font-size: 1rem;
      font-weight: 700;
      text-align: center;
      font-family: Nunito;
      color: ${theme.colors.darkGray};

      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      -moz-appearance: textfield;
    }

    input:disabled {
      background: none;
    }

    button,
    button:focus,
    button:active {
      background: none;
      border: none;
      outline: none;
    }
  `}
`;

export const Button = styled.button<{ width?: string; height?: string }>`
  ${({ width, height }) => css`
    width: ${width ? width : '24px'};
    height: ${height ? height : '24px'};

    border-radius: ${width ? width : '24px'};
  `}
`;

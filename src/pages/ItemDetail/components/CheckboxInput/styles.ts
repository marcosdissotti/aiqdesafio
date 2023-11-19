import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 342px;
    padding: 4px 0px;
    margin-right: 60px;

    display: flex;
    flex-direction: row;
    align-items: center;

    div:first-child {
      width: 100%;
      height: 24px;

      display: flex;
      align-items: center;

      label {
        margin-left: 4px;
        text-align: center;
      }
    }

    input {
      height: 80%;
    }

    input[type='radio'] {
      width: 16px;
      height: 16px;

      border: ${theme.colors.silverGray};
    }

    .option-price-wrapper {
      width: 40%;
      display: flex;
      justify-content: flex-end;

      font-weight: 700;
      font-size: 0.875rem;
      line-height: 135.714%;
      color: ${theme.colors.primary};

      p {
        font-weight: 700;
        font-size: 0.75rem;
        white-space: nowrap;
        color: ${theme.colors.gray};

        span {
          font-weight: 700;
          font-size: 0.875rem;
          line-height: 135.714%;
          color: ${theme.colors.green};
        }
      }

      .option-price {
        color: ${theme.colors.primary};
        font-size: 0.875rem;
        font-weight: 700;
        line-height: 135.714%;
      }
    }

    .option-icons {
      height: 24px;
      width: 24px;
    }
  `}
`;

export const HighlightLabel = styled.label`
  ${({ theme }) => css`
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 135.714%;
    color: ${theme.colors.gray};
  `}
`;

export const CheckboxInput = styled.input`
  ${({ theme }) => css`
    width: 24px;
    height: 24px;

    &:checked {
      background-color: ${theme.colors.bluishGreen};
      border-color: ${theme.colors.bluishGreen};
    }
  `}
`;

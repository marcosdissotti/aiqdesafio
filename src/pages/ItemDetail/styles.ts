import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => css`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    .item-detail-padding {
      padding: 24px 132px;
    }

    .item-detail-wrapper {
      width: 100%;
      display: flex;

      div:first-child {
        width: 100%;
      }

      img {
        max-height: 195px;

        border-radius: 12px;
      }

      .item-detail-info {
        height: 70%;
      }

      .order-amount-wrapper {
        height: 30%;

        display: flex;
        flex-direction: column;
        justify-content: center;

        p {
          font-size: 1rem;
          font-weight: 700;
          color: ${theme.colors.darkGray};
        }

        .order-amount {
          margin-top: 6px;

          font-weight: 600;
          font-size: 0.875rem;
          line-height: 135.714%;
          color: ${theme.colors.gray};

          span {
            color: ${theme.colors.darkGray};
            font-weight: 700;
            font-size: 0.875rem;
            line-height: 135.714%;
          }
        }
      }
    }

    .item-detail-name {
      margin-bottom: 6px;

      font-weight: 700;
      font-size: 1.5rem;
      color: ${theme.colors.darkGray};
    }

    .item-detail-price {
      margin-bottom: 6px;

      font-size: 1rem;
      font-weight: 700;
      color: ${theme.colors.gray};

      span {
        font-weight: 800;
        font-size: 1.25rem;
        color: ${theme.colors.primary};
      }
    }

    .item-detail-description {
      font-size: 1rem;
      font-weight: 600;
      color: ${theme.colors.gray};
    }

    .establishment_info {
      width: 100%;
      padding: 24px 84px;

      display: flex;
      align-items: center;

      background: golden;

      h1 {
        font-weight: 700;
        font-size: 1.5rem;
        color: ${theme.colors.black};
      }

      img {
        width: 48px;
        height: 48px;
        margin-right: 8px;

        border-radius: 4px;
        border: 1px solid ${theme.colors.secondary};
      }

      input[type='textarea'] {
        width: 100%;
        height: 58px;
      }
    }

    .observation-wrapper {
      width: 100%;

      display: flex;
      justify-content: center;

      textarea {
        width: 35%;
        margin: 24px 0 48px 0;
        padding: 10px 12px;

        resize: none;
        font-weight: 600;
        font-family: Nunito;
        border-radius: 4px;
        font-size: 0.875rem;
        line-height: 135.714%;
        color: ${theme.colors.gray};
        background: ${theme.colors.white};
        border: 1px solid ${theme.colors.lightGray};
      }
    }

    .item-option-input-container {
      display: flex;
      flex-direction: column;

      color: ${theme.colors.gray};

      font-family: Nunito;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 135.714%;

      .option-wrapper {
        padding: 24px 132px;
      }

      .option-list {
        display: flex;
        flex-wrap: wrap;
      }

      .option-info-wrapper {
        margin-bottom: 16px;
      }
      .option-name {
        font-size: 1rem;
        font-weight: 700;
        color: ${theme.colors.black};
      }
      .option-description {
        font-size: 0.75rem;
        font-weight: 700;
        color: ${theme.colors.gray};
      }

      input[type='radio']:checked {
        display: none;
      }
    }
  `}
`;

export const PromoLabel = styled.label`
  ${({ theme }) => css`
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 135.714%;
    color: ${theme.colors.gray};
  `}
`;

export const InputContainer = styled.div`
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
      /* margin-right: 4px; */
    }

    input[type='radio'] {
      width: 16px;
      height: 16px;

      border: ${theme.colors.silverGray};
    }

    /* input[type='checkbox'] {
      -webkit-appearance: none;

      width: 20px;
      height: 20px;
    }
    input[type='checkbox']:checked {
      background-color: ${theme.colors.bluishGreen};
    } */
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

export const CheckboxInput = styled.input`
  ${({ theme }) => css`
    width: 24px;
    height: 24px;
    /* input[type='checkbox']:checked {
      background-color: ${theme.colors.bluishGreen};
    } */

    &:checked {
      background-color: ${theme.colors.bluishGreen}; /* Cor de fundo quando marcado */
      border-color: ${theme.colors.bluishGreen}; /* Cor da borda quando marcado */
    }
  `}
`;

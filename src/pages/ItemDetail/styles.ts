import styled, { css } from 'styled-components';

export const Container = styled.div`
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
  `}
`;

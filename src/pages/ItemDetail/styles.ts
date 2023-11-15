import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;

    display: flex;
    justify-content: center;

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
      }
    }
  `}
`;

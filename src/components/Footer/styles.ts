import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    padding: 32px 0px;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    background: ${theme.colors.secondary};
    color: ${theme.colors.purple};

    p:first-child {
      margin-bottom: 8px;

      font-weight: 700;
      font-size: 0.875rem;
      line-height: 1.1875rem;
    }
    p {
      font-size: 1.125rem;
      font-weight: 700;
    }
  `}
`;

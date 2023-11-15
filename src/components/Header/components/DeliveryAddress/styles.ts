import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 12rem;
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    span {
      font-weight: 700;
      line-height: 19px;
      font-size: 0.875rem;
      color: ${theme.colors.lightPurple};
    }

    img:first-child {
      width: 24px;
      height: 24px;
      margin-right: 11px;
    }
  `}
`;

export const AddressWrapper = styled.div`
  display: flex;

  p {
    font-weight: 700;
    font-size: 1.125rem;
    white-space: nowrap;
    margin-right: 4px;
  }
`;

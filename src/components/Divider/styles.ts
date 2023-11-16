import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    height: 4px;
    background-color: ${theme.colors.secondary};
  `}
`;

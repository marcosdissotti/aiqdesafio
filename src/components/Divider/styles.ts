import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    height: 4px;
    background-color: ${theme.colors.secondary};
  `}
`;

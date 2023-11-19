import styled, { css } from 'styled-components';

import { InputContainer } from '@pages/ItemDetail/styles';

export const Container = styled(InputContainer)``;

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
    width: 16px;
    height: 16px;

    &:checked {
      background-color: ${theme.colors.bluishGreen};
      border-color: ${theme.colors.bluishGreen};
    }
  `}
`;

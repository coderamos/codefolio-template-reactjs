import styled, { css } from 'styled-components';

export const Container = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.light};
  `}
`;

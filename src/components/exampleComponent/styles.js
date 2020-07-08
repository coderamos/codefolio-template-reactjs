import styled from 'styled-components';

export const ExampleContainer = styled.span`
  color: ${props => props.theme.colors.white};
  ${props => props.theme.fontStyles.title};
`;

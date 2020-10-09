import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
    
    &:focus {
      outline: 0;
    }
  }

  html, body, #root{
    height: 100%; 
  }

  body {
    background-color: ${props => props.theme.colors.secondary};
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
  
  button {
    cursor: pointer;
  }
`;

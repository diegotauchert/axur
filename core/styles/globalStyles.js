import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }
  
  a{
    text-decoration: none;
    transition: .6s ease all;
  }

  button{
    cursor: pointer;
    border: none;
    background: none;
  }
`;
 
export default GlobalStyle;
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
  a, button{
    text-decoration: none;
    transition: .6s ease all;
  }

  button{
    cursor: pointer;
    border: none;
    background: none;
  }
  .error-component{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    button{
      background-color: #000;
      color: #FFF;
      padding: 0.3rem 1rem;
      margin-left: 1rem;
      display: flex;
      align-items: center;
      gap: .4rem;

      &:hover{
        background-color: #444;
      }
    }
  }
`;
 
export default GlobalStyle;
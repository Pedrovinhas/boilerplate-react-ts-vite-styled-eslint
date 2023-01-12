import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`  
  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${props => props.theme.font.inter};
        background-color: #121212;
        color: ${props => props.theme.colors.primary};
     
    }


    body {
        font-size: 14px;
    }
`;

import styled, { css } from 'styled-components';
import { HeadingProps } from '.';


export const StyledHeading = styled.h1<HeadingProps>`

    ${(props) => props.size === 'medium' && css`
        font-size: ${props => props.theme.fontSizes['2xl']};
    `} 


    ${(props) => props.color === 'primary' && css`
        color: ${props => props.theme.colors.primary};
    `} 

    ${(props) => props.color === 'secondary' && css`
        color: ${props => props.theme.colors.secondary};
    `} 

    ${(props) => props.title === 'medium' && css`
        font-weight: ${props => props.theme.fontWeights.medium};
    `} 

    ${(props) => props.title === 'bold' && css`
        font-weight: ${props => props.theme.fontWeights.bold};
    `} 
    ${(props) => props.title === 'strong' && css`
        font-weight: ${props => props.theme.fontWeights.strong};
    `} 
`;

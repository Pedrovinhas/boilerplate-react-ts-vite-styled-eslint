import { ElementType, ReactNode } from 'react';
import { StyledHeading } from './styles';


export interface HeadingProps {
    size:  'large' | 'medium' | 'small';
    title: 'medium' | 'regular' | 'bold' | 'strong';
    color: 'primary' | 'secondary' ;
    children: ReactNode;
    as?: ElementType;
    className?: string;
}


export function Heading({ as, children, size, title, color, className }: HeadingProps) {
    return (
        <StyledHeading size={size} as={'h1'} title={title} color={color} className={className}>
            {children}
        </StyledHeading>
    );
}
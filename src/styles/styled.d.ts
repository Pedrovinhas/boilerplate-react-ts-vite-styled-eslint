import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            secondary: string;
        },

        fontWeights: {
            strong: number;
            bold: number;
            medium: number;
            normal: number;
        },

        fontSizes: {
            sm: string;
            '2xl': string;
        },

        font: {
            inter: string;
        },

        radii: {
            none: number,
            base: string;
            rounded: string;
        },

        animation: {
            easeOut: string;
        }
    }
}
import React, { createContext, ReactNode } from 'react';


interface ContextProps {
    greetings: string;
}

interface ContextProviderProps {
    children: ReactNode;
}
export const Context = createContext({} as ContextProps);

export function ContextProvider({children}: ContextProviderProps ) {

    const greetings = 'Hello World';

    return (
        <Context.Provider 
            value={{  
                greetings
            }}
        >
            { children }
        </Context.Provider>
    );
}
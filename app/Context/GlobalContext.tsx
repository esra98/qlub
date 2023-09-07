
'use client';

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";
import React, { ReactNode } from 'react';

interface ContextProps {
    searched: string,
    setSearched: Dispatch<SetStateAction<string>>
    yearRange: number[];
    setYearRange: Dispatch<SetStateAction<number[]>>;
    searchYear: string,
    setSearchYear: Dispatch<SetStateAction<string>>
}

const GlobalContext = createContext<ContextProps>({
    searched: '',
    setSearched: (): string => '',
    yearRange: [],
    setYearRange: (): number[] => [],
    searchYear: '',
    setSearchYear: (): string => '',
})

interface GlobalContextProviderProps {
    children: ReactNode;
  }

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({ children }) => {
    const [searched, setSearched] = useState('Inception');
    const [yearRange, setYearRange] = useState<number[]>([1900,2023]);
    const [searchYear, setSearchYear] = useState('');
    return (
        <GlobalContext.Provider value={{ searched,setSearched, yearRange,setYearRange, searchYear, setSearchYear }}>
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => useContext(GlobalContext);